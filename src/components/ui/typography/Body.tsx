
import type { HTMLAttributes } from "react";

export type BodySize = "small" | "medium" | "large" | "huge";

export interface BodyProps
  extends HTMLAttributes<HTMLParagraphElement> {
  size?: BodySize;
}

export function Body({
  size = "medium",
  className = "",
  children,
  ...props
}: BodyProps) {
  return (
    <p
      className={`body body-${size} ${className}`.trim()}
      {...props}
    >
      {children}
    </p>
  );
}
