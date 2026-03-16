import { flattenThemeToCssVars } from "./theme.utils";
import { themes } from "./theme";

describe("flattenThemeToCssVars", () => {
  const vars = flattenThemeToCssVars(themes.blue.dark);

  it("returns an object with string keys and values", () => {
    expect(typeof vars).toBe("object");

    for (const [key, value] of Object.entries(vars)) {
      expect(typeof key).toBe("string");
      expect(typeof value).toBe("string");
    }
  });

  it("all keys start with --theme-", () => {
    for (const key of Object.keys(vars)) {
      expect(key.startsWith("--theme-")).toBe(true);
    }
  });

  it("produces kebab-case keys (no uppercase letters)", () => {
    for (const key of Object.keys(vars)) {
      expect(key).toBe(key.toLowerCase());
    }
  });

  it("includes color tokens", () => {
    expect(vars["--theme-text-primary"]).toBeDefined();
    expect(vars["--theme-bg-surface-primary"]).toBeDefined();
    expect(vars["--theme-bg-fill-brand-main"]).toBeDefined();
    expect(vars["--theme-border-default"]).toBeDefined();
    expect(vars["--theme-icon-default"]).toBeDefined();
  });

  it("includes spacing tokens with px suffix", () => {
    expect(vars["--theme-spacing-xs"]).toMatch(/^\d+px$/);
    expect(vars["--theme-spacing-s"]).toMatch(/^\d+px$/);
    expect(vars["--theme-spacing-m"]).toMatch(/^\d+px$/);
    expect(vars["--theme-spacing-l"]).toMatch(/^\d+px$/);
  });

  it("includes radius tokens with px suffix", () => {
    expect(vars["--theme-radius-small"]).toMatch(/^\d+px$/);
    expect(vars["--theme-radius-medium"]).toMatch(/^\d+px$/);
    expect(vars["--theme-radius-large"]).toMatch(/^\d+px$/);
  });

  it("includes opacity tokens as numeric strings", () => {
    expect(vars["--theme-opacity-bg-blur"]).toMatch(/^\d+(\.\d+)?$/);
  });

  it("camelCase groups are converted (bgSurface → bg-surface)", () => {
    const bgSurfaceKeys = Object.keys(vars).filter((k) => k.startsWith("--theme-bg-surface-"));
    expect(bgSurfaceKeys.length).toBeGreaterThan(0);
  });

  it("camelCase tokens are converted (brandMain → brand-main)", () => {
    expect(vars["--theme-text-brand-main"]).toBeDefined();
    expect(vars["--theme-text-brandMain"]).toBeUndefined();
  });

  it("produces the same number of vars for different themes", () => {
    const blueLight = flattenThemeToCssVars(themes.blue.light);
    const pinkDark = flattenThemeToCssVars(themes.pink.dark);

    expect(Object.keys(blueLight).length).toBe(Object.keys(pinkDark).length);
  });

  it("produces different color values for different themes", () => {
    const blueVars = flattenThemeToCssVars(themes.blue.light);
    const pinkVars = flattenThemeToCssVars(themes.pink.light);

    expect(blueVars["--theme-text-brand-main"]).not.toBe(pinkVars["--theme-text-brand-main"]);
  });
});
