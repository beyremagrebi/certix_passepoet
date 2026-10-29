
import type { ThemeMode } from "../../providers/ThemeProvider";
import { Switch } from "./Switch";



interface ThemeSwitchProps {
  mode: ThemeMode;
  onChange: (mode: ThemeMode) => void;
  className?: string;
}

export function ThemeSwitch({
  mode,
  onChange,
  className,
}: ThemeSwitchProps) {
  const isDark = mode === "dark";

  return (
    <Switch
      label="Dark mode"
      description={isDark ? "Dark theme enabled" : "Light theme enabled"}
      checked={isDark}
      onChange={(event) =>
        onChange(event.target.checked ? "dark" : "light")
      }
      className={className}
    />
  );
}
