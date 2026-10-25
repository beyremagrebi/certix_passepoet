import type { InputHTMLAttributes } from "react";

export type InputSize = "small" | "medium" | "large";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: InputSize;
  error?: string;
  fullWidth?: boolean;
}

export function Input({
  size = "medium",
  error,
  fullWidth = true,
  className = "",
  id,
  "aria-invalid": ariaInvalid,
  ...props
}: InputProps) {
  const classes = [
    "ui-input",
    `ui-input--${size}`,
    fullWidth ? "ui-input--full-width" : "",
    error ? "ui-input--error" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="ui-input-wrapper">
      <input
        {...props}
        id={id}
        className={classes}
        aria-invalid={error ? true : ariaInvalid}
        aria-describedby={error && id ? `${id}-error` : undefined}
      />

      {error && (
        <span
          className="ui-input-error"
          id={id ? `${id}-error` : undefined}
          role="alert"
        >
          {error}
        </span>
      )}
    </div>
  );
}
