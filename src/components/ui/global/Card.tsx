import type { HTMLAttributes } from "react";


export type CardVariant = "default" | "outlined" | "elevated";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  padding?: "small" | "medium" | "large";
  fullWidth?: boolean;
}

export function Card({
  variant = "default",
  padding = "medium",
  fullWidth = false,
  className = "",
  children,
  ...props
}: CardProps) {
  const classes = [
    "card",
    `card-${variant}`,
    `card-padding-${padding}`,
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