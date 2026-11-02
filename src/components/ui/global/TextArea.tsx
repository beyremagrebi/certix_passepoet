
import type { TextareaHTMLAttributes } from "react";

export type TextAreaSize = "small" | "medium" | "large";

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  size?: TextAreaSize;
  error?: string;
  fullWidth?: boolean;
}

export function TextArea({
  size = "medium",
  error,
  fullWidth = true,
  className = "",
  id,
  "aria-invalid": ariaInvalid,
  ...props
}: TextAreaProps) {
  const classes = [
    "ui-textarea",
    `ui-textarea--${size}`,
    fullWidth ? "ui-textarea--full-width" : "",
    error ? "ui-textarea--error" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="ui-textarea-wrapper">
      <textarea
        {...props}
        id={id}
        className={classes}
        aria-invalid={error ? true : ariaInvalid}
        aria-describedby={error && id ? `${id}-error` : undefined}
      />

      {error && (
        <span
          className="ui-textarea-error"
          id={id ? `${id}-error` : undefined}
          role="alert"
        >
          {error}
        </span>
      )}
    </div>
  );
}
