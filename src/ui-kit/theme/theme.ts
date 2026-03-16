import { COLORS, SPACING, RADIUS, OPACITY } from "./theme.constants";
import { THEME_COLORS, THEME_MODES } from "./theme.types";
import type {
  BaseThemeDefinition,
  BrandThemes,
  DeepPartial,
  ResolvedThemes,
  Theme,
  ThemeColors,
} from "./theme.types";

// ─── Base theme (shared across all brand colors) ─────────────

const baseTheme: BaseThemeDefinition = {
  colors: {
    light: {
      text: {
        primary: COLORS.gray[800],
        secondary: COLORS.gray[500],
        disabled: COLORS.gray[500],
        onMain: COLORS.white[0],
        error: COLORS.red[300],
        brandMain: "", // overridden by brand theme
      },
      bg: {
        tabbar: COLORS.white[0],
        brandLight: "", // overridden by brand theme
        brandMain: "", // overridden by brand theme
      },
      bgSurface: {
        primary: COLORS.white[0],
        error: COLORS.red[0],
        success: COLORS.green[0],
        info: COLORS.blue[50],
      },
      bgFill: {
        primary: COLORS.white[0],
        disabled: COLORS.gray[0],
        error: COLORS.red[300],
        success: COLORS.green[500],
        brandMain: "", // overridden by brand theme
        white: COLORS.white[0],
      },
      border: {
        default: COLORS.gray[100],
        disabled: COLORS.gray[100],
        error: COLORS.red[300],
        brandMain: "", // overridden by brand theme
      },
      icon: {
        default: COLORS.gray[300],
        disabled: COLORS.gray[100],
        onMain: COLORS.white[0],
        error: COLORS.red[300],
        success: COLORS.green[500],
        brandMain: "", // overridden by brand theme
        info: COLORS.blue[500],
      },
      extra: {
        swipeDelete: COLORS.red[200],
        swipeComplete: COLORS.green[200],
        swipeEdit: COLORS.blue[200],
        swipeArchive: COLORS.orange[200],
      },
    },
    dark: {
      text: {
        primary: COLORS.white[0],
        secondary: COLORS.gray[200],
        disabled: COLORS.gray[300],
        onMain: COLORS.white[0],
        error: COLORS.red[300],
        brandMain: "", // overridden by brand theme
      },
      bg: {
        tabbar: COLORS.gray[850],
        brandLight: "", // overridden by brand theme
        brandMain: "", // overridden by brand theme
      },
      bgSurface: {
        primary: COLORS.gray[800],
        error: COLORS.red[0],
        success: COLORS.green[0],
        info: COLORS.blue[50],
      },
      bgFill: {
        primary: COLORS.gray[800],
        disabled: COLORS.gray[750],
        error: COLORS.red[300],
        success: COLORS.green[500],
        brandMain: "", // overridden by brand theme
        white: COLORS.white[0],
      },
      border: {
        default: COLORS.gray[700],
        disabled: COLORS.gray[750],
        error: COLORS.red[300],
        brandMain: "", // overridden by brand theme
      },
      icon: {
        default: COLORS.gray[200],
        disabled: COLORS.gray[700],
        onMain: COLORS.white[0],
        error: COLORS.red[300],
        success: COLORS.green[500],
        brandMain: "", // overridden by brand theme
        info: COLORS.blue[400],
      },
      extra: {
        swipeDelete: COLORS.red[600],
        swipeComplete: COLORS.green[700],
        swipeEdit: COLORS.blue[700],
        swipeArchive: COLORS.orange[700],
      },
    },
  },
};

// ─── Brand themes (override brand-specific tokens) ───────────

const brandThemes: BrandThemes = {
  blue: {
    colors: {
      light: {
        text: { brandMain: COLORS.blue[500] },
        bg: { brandLight: COLORS.blue[0], brandMain: COLORS.blue[500] },
        bgFill: { brandMain: COLORS.blue[500] },
        border: { brandMain: COLORS.blue[500] },
        icon: { brandMain: COLORS.blue[500] },
      },
      dark: {
        text: { brandMain: COLORS.blue[400] },
        bg: { brandLight: COLORS.gray[900], brandMain: COLORS.blue[400] },
        bgFill: { brandMain: COLORS.blue[400] },
        border: { brandMain: COLORS.blue[400] },
        icon: { brandMain: COLORS.blue[400] },
      },
    },
  },
  pink: {
    colors: {
      light: {
        text: { brandMain: COLORS.pink[500] },
        bg: { brandLight: COLORS.pink[0], brandMain: COLORS.pink[500] },
        bgFill: { brandMain: COLORS.pink[500] },
        border: { brandMain: COLORS.pink[500] },
        icon: { brandMain: COLORS.pink[500] },
      },
      dark: {
        text: { brandMain: COLORS.pink[500] },
        bg: { brandLight: COLORS.gray[900], brandMain: COLORS.pink[500] },
        bgFill: { brandMain: COLORS.pink[500] },
        border: { brandMain: COLORS.pink[500] },
        icon: { brandMain: COLORS.pink[500] },
      },
    },
  },
};

// ─── Typed merge for ThemeColors ─────────────────────────────

const mergeThemeColors = (base: ThemeColors, override: DeepPartial<ThemeColors>): ThemeColors => ({
  text: { ...base.text, ...override.text },
  bg: { ...base.bg, ...override.bg },
  bgSurface: { ...base.bgSurface, ...override.bgSurface },
  bgFill: { ...base.bgFill, ...override.bgFill },
  border: { ...base.border, ...override.border },
  icon: { ...base.icon, ...override.icon },
  extra: { ...base.extra, ...override.extra },
});

// ─── Typed Object.fromEntries ────────────────────────────────

/** Type-safe wrapper — Object.fromEntries loses key types by default */
const typedFromEntries = <K extends string, V>(entries: readonly [K, V][]): Record<K, V> =>
  Object.fromEntries(entries) as Record<K, V>;

// ─── Build themes ────────────────────────────────────────────

const buildTheme = (baseColors: ThemeColors, brandOverride: DeepPartial<ThemeColors>): Theme => ({
  colors: mergeThemeColors(baseColors, brandOverride),
  spacing: SPACING,
  radius: RADIUS,
  opacity: OPACITY,
});

const normalizeThemes = (base: BaseThemeDefinition, brands: BrandThemes): ResolvedThemes =>
  typedFromEntries(
    THEME_COLORS.map((color) => [
      color,
      typedFromEntries(
        THEME_MODES.map((mode) => [mode, buildTheme(base.colors[mode], brands[color].colors[mode])])
      ),
    ])
  );

/** All resolved themes: themes[themeColor][themeMode] → Theme */
export const themes: ResolvedThemes = normalizeThemes(baseTheme, brandThemes);
