import type { LabelHTMLAttributes } from "react";

export type LabelSize = "small" | "medium" | "large" | "huge";

export interface LabelProps
  extends LabelHTMLAttributes<HTMLLabelElement> {
  size?: LabelSize;
  required?: boolean;
  optional?: boolean;
}

export function Label({
  size = "medium",
  required = false,
  optional = false,
  className = "",
  children,
  ...props
}: LabelProps) {
  return (
    <label
      className={`label label-${size} ${className}`.trim()}
      {...props}
    >
      {children}

      {required && (
        <span className="label-required" aria-hidden="true">
          {" "}*
        </span>
      )}

      {optional && !required && (
        <span className="label-optional">
          {" "}(optional)
        </span>
      )}
    </label>
  );
}
