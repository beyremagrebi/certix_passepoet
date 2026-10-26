import { useEffect, useState } from "react";


const palettes = [
  { name: "Indigo", value: "indigo", color: "#5255D9" },
  { name: "Blue", value: "blue", color: "#2563EB" },
  { name: "Emerald", value: "emerald", color: "#059669" },
  { name: "Violet", value: "violet", color: "#7C3AED" },
  { name: "Rose", value: "rose", color: "#E11D48" },
  { name: "Orange", value: "orange", color: "#EA580C" },
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
      // Use the default palette if storage is unavailable.
    }

    return "indigo";
  });

  useEffect(() => {
    document.documentElement.dataset.palette = selected;

    try {
      localStorage.setItem("color-palette", selected);
    } catch {
      // The selection still works for this session.
    }
  }, [selected]);

  return (
    <div className="palette-selector">
      <div className="palette-selector-header">
        <h3 className="palette-selector-title">Color palette</h3>
        <span className="palette-selector-current">
          {palettes.find((palette) => palette.value === selected)?.name}
        </span>
      </div>

      <div className="palette-options">
        {palettes.map((palette) => (
          <button
            key={palette.value}
            type="button"
            className={`palette-option ${
              selected === palette.value ? "palette-option-selected" : ""
            }`}
            onClick={() => setSelected(palette.value)}
            aria-label={`Select ${palette.name} palette`}
            aria-pressed={selected === palette.value}
          >
            <span
              className="palette-swatch"
              style={{ backgroundColor: palette.color }}
            />
            <span className="palette-option-name">{palette.name}</span>
            {selected === palette.value && (
              <span className="palette-check" aria-hidden="true">
                ✓
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}