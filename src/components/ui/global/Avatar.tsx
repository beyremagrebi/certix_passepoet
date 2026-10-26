
import { useState } from "react";
import type { HTMLAttributes, SyntheticEvent } from "react";

export type AvatarSize = "small" | "medium" | "large" | "extra-large";
export type AvatarShape = "circle" | "square";

export interface AvatarProps extends HTMLAttributes<HTMLSpanElement> {
  src?: string;
  alt?: string;
  name?: string;
  size?: AvatarSize;
  shape?: AvatarShape;
}

function getInitials(name?: string) {
  if (!name?.trim()) return "?";

  const parts = name.trim().split(/\s+/);

  return parts.length === 1
    ? parts[0].slice(0, 2).toUpperCase()
    : `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}

export function Avatar({
  src,
  alt,
  name,
  size = "medium",
  shape = "circle",
  className = "",
  ...props
}: AvatarProps) {
  const [imageFailed, setImageFailed] = useState(false);

  const handleImageError = (_event: SyntheticEvent<HTMLImageElement>) => {
    setImageFailed(true);
  };

  const showImage = Boolean(src) && !imageFailed;

  return (
    <span
      className={[
        "ui-avatar",
        `ui-avatar--${size}`,
        `ui-avatar--${shape}`,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      role="img"
      aria-label={alt || name || "User avatar"}
      {...props}
    >
      {showImage ? (
        <img
          className="ui-avatar__image"
          src={src}
          alt=""
          onError={handleImageError}
        />
      ) : (
        <span className="ui-avatar__initials" aria-hidden="true">
          {getInitials(name)}
        </span>
      )}
    </span>
  );
}
