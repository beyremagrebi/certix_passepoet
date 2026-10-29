
import type { HTMLAttributes } from "react";

export type CardVariant = "default" | "outlined" | "elevated";
export type CardPadding = "small" | "medium" | "large";
export type CardSize = "small" | "medium" | "large" | "auto";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  padding?: CardPadding;
  size?: CardSize;
  fullWidth?: boolean;
}

export function Card({
  variant = "default",
  padding = "medium",
  size = "auto",
  fullWidth = false,
  className = "",
  children,
  ...props
}: CardProps) {
  const classes = [
    "card",
    `card-${variant}`,
    `card-padding-${padding}`,
    `card-size-${size}`,
    fullWidth ? "card-full-width" : "",
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
