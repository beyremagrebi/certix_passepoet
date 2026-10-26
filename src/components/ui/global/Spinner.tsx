
import type { HTMLAttributes } from "react";

export interface SpinnerProps extends HTMLAttributes<HTMLSpanElement> {
  size?: "small" | "medium" | "large";
  label?: string;
}

export function Spinner({
  size = "medium",
  label = "Loading...",
  className = "",
  ...props
}: SpinnerProps) {
  return (
    <span
      className={`spinner spinner--${size} ${className}`.trim()}
      role="status"
      aria-label={label}
      {...props}
    >
      <span className="spinner__circle" aria-hidden="true" />
      <span className="spinner__label">{label}</span>
    </span>
  );
}
