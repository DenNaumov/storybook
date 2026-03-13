import { themes } from "./theme";
import { THEME_COLORS, THEME_MODES } from "./theme.types";
import type { ThemeColors } from "./theme.types";

describe("themes (normalizeThemes result)", () => {
  it("has an entry for every ThemeColor", () => {
    for (const color of THEME_COLORS) {
      expect(themes[color]).toBeDefined();
    }
  });

  it("has light and dark modes for every ThemeColor", () => {
    for (const color of THEME_COLORS) {
      for (const mode of THEME_MODES) {
        expect(themes[color][mode]).toBeDefined();
      }
    }
  });

  it("each theme has colors, spacing, radius, opacity", () => {
    const theme = themes.blue.light;

    expect(theme.colors).toBeDefined();
    expect(theme.spacing).toBeDefined();
    expect(theme.radius).toBeDefined();
    expect(theme.opacity).toBeDefined();
  });

  it("colors contain all required groups", () => {
    const groups: (keyof ThemeColors)[] = [
      "text",
      "bg",
      "bgSurface",
      "bgFill",
      "border",
      "icon",
      "extra",
    ];

    for (const color of THEME_COLORS) {
      for (const mode of THEME_MODES) {
        const colors = themes[color][mode].colors;
        for (const group of groups) {
          expect(colors[group]).toBeDefined();
        }
      }
    }
  });

  it("brand overrides are applied (blue brandMain differs from pink)", () => {
    const blueBrand = themes.blue.light.colors.text.brandMain;
    const pinkBrand = themes.pink.light.colors.text.brandMain;

    expect(blueBrand).toBeTruthy();
    expect(pinkBrand).toBeTruthy();
    expect(blueBrand).not.toBe(pinkBrand);
  });

  it("brand colors are consistent across color groups", () => {
    const theme = themes.blue.light.colors;

    // all brand tokens should reference the same blue color
    expect(theme.text.brandMain).toBe(theme.bgFill.brandMain);
    expect(theme.text.brandMain).toBe(theme.border.brandMain);
    expect(theme.text.brandMain).toBe(theme.icon.brandMain);
  });

  it("non-brand tokens are shared between blue and pink (same base)", () => {
    // text.primary should be the same regardless of brand color
    expect(themes.blue.light.colors.text.primary).toBe(
      themes.pink.light.colors.text.primary,
    );
    expect(themes.blue.dark.colors.text.primary).toBe(
      themes.pink.dark.colors.text.primary,
    );
  });

  it("light and dark modes have different bg surface primary", () => {
    expect(themes.blue.light.colors.bgSurface.primary).not.toBe(
      themes.blue.dark.colors.bgSurface.primary,
    );
  });

  it("spacing, radius, opacity are the same across all themes", () => {
    const ref = themes.blue.light;

    for (const color of THEME_COLORS) {
      for (const mode of THEME_MODES) {
        const t = themes[color][mode];
        expect(t.spacing).toEqual(ref.spacing);
        expect(t.radius).toEqual(ref.radius);
        expect(t.opacity).toEqual(ref.opacity);
      }
    }
  });

  it("no empty-string values in resolved theme colors", () => {
    for (const color of THEME_COLORS) {
      for (const mode of THEME_MODES) {
        const colors = themes[color][mode].colors;
        for (const tokens of Object.values(colors)) {
          for (const value of Object.values(tokens as Record<string, string>)) {
            expect(value).not.toBe("");
          }
        }
      }
    }
  });
});
