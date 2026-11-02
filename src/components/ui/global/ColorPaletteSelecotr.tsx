
import { useEffect, useState } from "react";

const palettes = [
  { name: "Indigo", value: "indigo", color: "#5558B8" },
  { name: "Blue", value: "blue", color: "#3267C8" },
  { name: "Emerald", value: "emerald", color: "#287D61" },
  { name: "Violet", value: "violet", color: "#7652B8" },
  { name: "Rose", value: "rose", color: "#C74768" },
  { name: "Orange", value: "orange", color: "#B9662C" },
] as const;

type Palette = (typeof palettes)[number]["value"];

export function ColorPaletteSelector() {
  const [selected, setSelected] = useState<Palette>(() => {
    try {
      const saved = localStorage.getItem("color-palette");
      if (palettes.some((palette) => palette.value === saved)) {
        return saved as Palette;
      }
    } catch {
      // Use default palette.
    }

    return "indigo";
  });

  useEffect(() => {
    document.documentElement.dataset.palette = selected;

    try {
      localStorage.setItem("color-palette", selected);
    } catch {
      // Selection remains active for this session.
    }
  }, [selected]);

  const currentPalette = palettes.find(
    (palette) => palette.value === selected
  );

  return (
    <div className="palette-selector">
      <div className="palette-selector__header">
        <div>
          <p className="palette-selector__title">Accent color</p>
          <p className="palette-selector__description">
            Choose your preferred interface color.
          </p>
        </div>

        <span className="palette-selector__selected-name">
          <span
            className="palette-selector__selected-dot"
            style={{ backgroundColor: currentPalette?.color }}
          />
          {currentPalette?.name}
        </span>
      </div>

      <div className="palette-options" role="group" aria-label="Accent color">
        {palettes.map((palette) => {
          const isSelected = selected === palette.value;

          return (
            <button
              key={palette.value}
              type="button"
              className={`palette-option ${
                isSelected ? "palette-option--selected" : ""
              }`}
              onClick={() => setSelected(palette.value)}
              aria-label={`${palette.name} accent color`}
              aria-pressed={isSelected}
              title={palette.name}
            >
              <span
                className="palette-option__swatch"
                style={{ backgroundColor: palette.color }}
              >
                {isSelected && (
                  <svg viewBox="0 0 16 16" aria-hidden="true">
                    <path
                      d="m3.5 8 3 3 6-6"
                      fill="none"
                      stroke="white"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </span>
              <span className="palette-option__name">{palette.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
