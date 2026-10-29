
import type { HTMLAttributes, ReactNode } from "react";
export type CenterAxis = "horizontal" | "vertical" | "both";

export interface CenterProps
  extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  axis?: CenterAxis;
  fullHeight?: boolean;
  inline?: boolean;
}

export function Center({
  children,
  axis = "both",
  fullHeight = false,
  inline = false,
  className = "",
  ...props
}: CenterProps) {
  const classes = [
    "ui-center",
    `ui-center--${axis}`,
    fullHeight ? "ui-center--full-height" : "",
    inline ? "ui-center--inline" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}
