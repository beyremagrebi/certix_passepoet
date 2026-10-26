import { useId } from "react";
import type { InputHTMLAttributes, ReactNode } from "react";
export type CheckboxSize = "small" | "medium" | "large";

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  label?: ReactNode;
  description?: ReactNode;
  size?: CheckboxSize;
  error?: string;
}

export function Checkbox({
  label,
  description,
  size = "medium",
  error,
  id,
  className = "",
  disabled,
  ...props
}: CheckboxProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const errorId = `${inputId}-error`;
  const descriptionId = `${inputId}-description`;

  const describedBy = [
    description ? descriptionId : undefined,
    error ? errorId : undefined,
    props["aria-describedby"],
  ]
    .filter(Boolean)
    .join(" ") || undefined;

  return (
    <div
      className={[
        "ui-checkbox",
        `ui-checkbox--${size}`,
        disabled ? "ui-checkbox--disabled" : "",
        error ? "ui-checkbox--error" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <label className="ui-checkbox__label" htmlFor={inputId}>
        <span className="ui-checkbox__control">
          <input
            {...props}
            id={inputId}
            type="checkbox"
            disabled={disabled}
            aria-invalid={error ? true : props["aria-invalid"]}
            aria-describedby={describedBy}
            className="ui-checkbox__input"
          />

          <span className="ui-checkbox__box" aria-hidden="true">
            <svg
              className="ui-checkbox__check"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M3.5 8.2 6.5 11 12.5 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </span>

        {(label || description) && (
          <span className="ui-checkbox__content">
            {label && (
              <span className="ui-checkbox__title">{label}</span>
            )}

            {description && (
              <span
                className="ui-checkbox__description"
                id={descriptionId}
              >
                {description}
              </span>
            )}
          </span>
        )}
      </label>

      {error && (
        <span className="ui-checkbox__error" id={errorId}>
          {error}
        </span>
      )}
    </div>
  );
}