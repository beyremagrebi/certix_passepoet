import { useId } from "react";
import type {
  ReactNode,
  SelectHTMLAttributes,
} from "react";

export type SelectSize = "small" | "medium" | "large";

export interface SelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  label?: ReactNode;
  hint?: ReactNode;
  error?: string;
  size?: SelectSize;
  fullWidth?: boolean;
  placeholder?: string;
}

export function Select({
  label,
  hint,
  error,
  size = "medium",
  fullWidth = false,
  placeholder,
  id,
  className = "",
  children,
  disabled,
  ...props
}: SelectProps) {
  const generatedId = useId();
  const selectId = id ?? generatedId;
  const hintId = `${selectId}-hint`;
  const errorId = `${selectId}-error`;

  const describedBy = [
    hint ? hintId : undefined,
    error ? errorId : undefined,
    props["aria-describedby"],
  ]
    .filter(Boolean)
    .join(" ") || undefined;

  return (
    <div
      className={[
        "ui-select-field",
        fullWidth ? "ui-select-field--full-width" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {label && (
        <label className="ui-select__label" htmlFor={selectId}>
          {label}
          {props.required && (
            <span className="ui-select__required" aria-hidden="true">
              {" "}*
            </span>
          )}
        </label>
      )}

      <div
        className={[
          "ui-select",
          `ui-select--${size}`,
          error ? "ui-select--error" : "",
          disabled ? "ui-select--disabled" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <select
          {...props}
          id={selectId}
          disabled={disabled}
          aria-invalid={error ? true : props["aria-invalid"]}
          aria-describedby={describedBy}
          className="ui-select__control"
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}

          {children}
        </select>

        <svg
          className="ui-select__chevron"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="m5 7.5 5 5 5-5"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {hint && !error && (
        <span className="ui-select__hint" id={hintId}>
          {hint}
        </span>
      )}

      {error && (
        <span className="ui-select__error" id={errorId}>
          {error}
        </span>
      )}
    </div>
  );
}