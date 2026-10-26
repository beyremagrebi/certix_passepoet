import { useState } from "react";
import type { HTMLAttributes, ReactNode } from "react";

export type AlertVariant = "success" | "warning" | "error" | "info";

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  variant?: AlertVariant;
  title?: string;
  onClose?: () => void;
  icon?: ReactNode;
  dismissible?: boolean;
}

const defaultIcons: Record<AlertVariant, string> = {
  success: "✓",
  warning: "!",
  error: "×",
  info: "i",
};

export function Alert({
  variant = "info",
  title,
  onClose,
  icon,
  dismissible = false,
  className = "",
  children,
  ...props
}: AlertProps) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const close = () => {
    setVisible(false);
    onClose?.();
  };

  return (
    <div
      className={[
        "ui-alert",
        `ui-alert--${variant}`,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      role={variant === "error" ? "alert" : "status"}
      {...props}
    >
      <span className="ui-alert__icon" aria-hidden="true">
        {icon ?? defaultIcons[variant]}
      </span>

      <div className="ui-alert__content">
        {title && (
          <div className="ui-alert__title">{title}</div>
        )}

        <div className="ui-alert__message">{children}</div>
      </div>

      {dismissible && (
        <button
          type="button"
          className="ui-alert__close"
          onClick={close}
          aria-label="Dismiss alert"
        >
          <span aria-hidden="true">×</span>
        </button>
      )}
    </div>
  );
}