import { useId } from "react";
import type {
  InputHTMLAttributes,
  ReactNode,
} from "react";


export type SwitchSize = "small" | "medium" | "large";

export interface SwitchProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  label?: ReactNode;
  description?: ReactNode;
  size?: SwitchSize;
}

export function Switch({
  label,
  description,
  size = "medium",
  id,
  className = "",
  disabled,
  ...props
}: SwitchProps) {
  const generatedId = useId();
  const switchId = id ?? generatedId;
  const descriptionId = `${switchId}-description`;

  const describedBy = [
    description ? descriptionId : undefined,
    props["aria-describedby"],
  ]
    .filter(Boolean)
    .join(" ") || undefined;

  return (
    <div
      className={[
        "ui-switch",
        `ui-switch--${size}`,
        disabled ? "ui-switch--disabled" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <label className="ui-switch__label" htmlFor={switchId}>
        <span className="ui-switch__control">
          <input
            {...props}
            id={switchId}
            type="checkbox"
            role="switch"
            disabled={disabled}
            aria-describedby={describedBy}
            className="ui-switch__input"
          />

          <span className="ui-switch__track" aria-hidden="true">
            <span className="ui-switch__thumb" />
          </span>
        </span>

        {(label || description) && (
          <span className="ui-switch__content">
            {label && (
              <span className="ui-switch__title">{label}</span>
            )}

            {description && (
              <span
                className="ui-switch__description"
                id={descriptionId}
              >
                {description}
              </span>
            )}
          </span>
        )}
      </label>
    </div>
  );
}