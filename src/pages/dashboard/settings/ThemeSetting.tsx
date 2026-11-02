
import { useTheme } from "../../../components/providers/ThemeProvider";
import { Card } from "../../../components/ui/global/Card";
import { ColorPaletteSelector } from "../../../components/ui/global/ColorPaletteSelecotr";
import { Switch } from "../../../components/ui/global/Switch";
import { SectionHeader } from "./SectionHeader";

export function ThemeSetting() {
  const {  resolvedTheme, setMode } = useTheme();

  const handleThemeChange = (checked: boolean) => {
    setMode(checked ? "dark" : "light");
  };

  return (
    <Card>
      <SectionHeader
        size="small"
        title="Appearance"
        description="Customize the look and feel of your workspace."
      />

      <div className="settings-divider" />

      {/* THEME MODE */}
      <div className="theme-setting-section">
        <div className="theme-setting-row">
          <div className="theme-setting-info">
            <h3 className="theme-setting-title">Theme mode</h3>
            <p className="theme-setting-description">
              Choose between light and dark appearance.
            </p>
          </div>

          <div className="theme-setting-toggle">
            <span className="theme-setting-mode">
              {resolvedTheme === "dark" ? "Dark" : "Light"}
            </span>

            <Switch
              size="medium"
              checked={resolvedTheme === "dark"}
              onChange={(event) =>
                handleThemeChange(event.target.checked)
              }
              aria-label="Toggle dark mode"
            />
          </div>
        </div>

        <div className="theme-setting-preview">
          <div
            className={`theme-preview-card theme-preview-card--light ${
              resolvedTheme === "light" ? "theme-preview-card--active" : ""
            }`}
          >
            <div className="theme-preview-topbar" />
            <div className="theme-preview-content">
              <span />
              <span />
              <span />
            </div>
            <span className="theme-preview-label">Light</span>
          </div>

          <div
            className={`theme-preview-card theme-preview-card--dark ${
              resolvedTheme === "dark" ? "theme-preview-card--active" : ""
            }`}
          >
            <div className="theme-preview-topbar" />
            <div className="theme-preview-content">
              <span />
              <span />
              <span />
            </div>
            <span className="theme-preview-label">Dark</span>
          </div>
        </div>
      </div>

      <div className="settings-divider" />

      {/* COLOR PALETTE */}
      <div className="theme-setting-section">
        <SectionHeader
          size="small"
          title="Accent color"
          description="Choose the primary color used throughout the interface."
        />

        <ColorPaletteSelector />
      </div>
    </Card>
  );
}
