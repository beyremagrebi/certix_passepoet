
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type ToastVariant = "success" | "error" | "warning" | "info";

export interface ToastOptions {
  title: string;
  description?: string;
  variant?: ToastVariant;
  duration?: number;
}

interface ToastItem extends ToastOptions {
  id: number;
}

interface ToastContextValue {
  showToast: (options: ToastOptions) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

export function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within ToastProvider");
  }

  return context;
}

export interface ToastProviderProps {
  children: ReactNode;
}

export function ToastProvider({ children }: ToastProviderProps) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const dismissToast = useCallback((id: number) => {
    setToasts((current) => current.filter((toast) => toast.id !== id));
  }, []);

  const showToast = useCallback((options: ToastOptions) => {
    const id = Date.now() + Math.random();

    setToasts((current) => [
      ...current,
      { ...options, id, variant: options.variant ?? "info" },
    ]);
  }, []);

  useEffect(() => {
    const timers = toasts.map((toast) => {
      const duration = toast.duration ?? 4000;

      if (duration <= 0) return undefined;

      return setTimeout(() => dismissToast(toast.id), duration);
    });

    return () => {
      timers.forEach((timer) => {
        if (timer !== undefined) clearTimeout(timer);
      });
    };
  }, [toasts, dismissToast]);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      <div className="toast-container" aria-label="Notifications">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`toast toast--${toast.variant}`}
            role={toast.variant === "error" ? "alert" : "status"}
          >
            <div className="toast__content">
              <strong className="toast__title">{toast.title}</strong>
              {toast.description && (
                <p className="toast__description">{toast.description}</p>
              )}
            </div>

            <button
              type="button"
              className="toast__close"
              aria-label="Dismiss notification"
              onClick={() => dismissToast(toast.id)}
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
