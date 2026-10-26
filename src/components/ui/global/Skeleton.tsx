
import type { CSSProperties, HTMLAttributes } from "react";

export interface SkeletonProps
  extends HTMLAttributes<HTMLSpanElement> {
  variant?: "text" | "circular" | "rectangular";
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
}

export function Skeleton({
  variant = "text",
  width,
  height,
  className = "",
  style,
  ...props
}: SkeletonProps) {
  return (
    <span
      className={`skeleton skeleton--${variant} ${className}`.trim()}
      style={{
        width,
        height: height ?? (variant === "text" ? "1em" : undefined),
        ...style,
      }}
      aria-hidden="true"
      {...props}
    />
  );
}
