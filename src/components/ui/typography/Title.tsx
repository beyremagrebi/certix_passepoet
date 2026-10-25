
import type { ComponentPropsWithoutRef } from "react";

export type TitleSize = "small" | "medium" | "large" | "huge";
export type TitleTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface TitleProps
  extends ComponentPropsWithoutRef<"h2"> {
  size?: TitleSize;
  as?: TitleTag;
}

export function Title({
  size = "large",
  as: Tag = "h2",
  className = "",
  children,
  ...props
}: TitleProps) {
  return (
    <Tag
      className={`title title-${size} ${className}`.trim()}
      {...props}
    >
      {children}
    </Tag>
  );
}
