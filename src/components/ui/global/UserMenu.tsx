import { useEffect, useRef, useState } from "react";
import { ChevronDown, LogOut } from "lucide-react";
import { Avatar } from "./Avatar";
import { Body } from "../typography/Body";


interface UserMenuProps {
  name: string;
  role: string;
  onLogout: () => void;
}

export function UserMenu({ name, role, onLogout }: UserMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleLogout = () => {
    setIsOpen(false);
    onLogout();
  };

  return (
    <div className="user-menu" ref={menuRef}>
      <button
        type="button"
        className={`user-menu__trigger ${isOpen ? "is-open" : ""}`}
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Avatar name={name} size="medium" />

        <span className="user-menu__identity">
          <Body size="small">{name}</Body>
          <span className="user-menu__role">{role}</span>
        </span>

        <ChevronDown
          className="user-menu__chevron"
          size={16}
          strokeWidth={1.8}
        />
      </button>

      {isOpen && (
        <div className="user-menu__dropdown">
          <div className="user-menu__dropdown-header">
            <span className="user-menu__dropdown-name">{name}</span>
            <span className="user-menu__dropdown-role">{role}</span>
          </div>

          <div className="user-menu__divider" />

          <button
            type="button"
            className="user-menu__logout"
            onClick={handleLogout}
          >
            <LogOut size={16} strokeWidth={1.8} />
            <span>Log out</span>
          </button>
        </div>
      )}
    </div>
  );
}