import type { SPACING, RADIUS, OPACITY } from "./theme.constants";

// ─── Mode & Color ────────────────────────────────────────────

export const THEME_MODES = ["light", "dark"] as const;
export type ThemeMode = (typeof THEME_MODES)[number];

/** User preference for theme mode (includes auto-detection) */
export type ThemePreference = ThemeMode | "auto";

export const THEME_COLORS = ["blue", "pink"] as const;
export type ThemeColor = (typeof THEME_COLORS)[number];

// ─── Semantic color groups ───────────────────────────────────

export interface ThemeTextColors {
  primary: string;
  secondary: string;
  disabled: string;
  onMain: string;
  error: string;
  brandMain: string;
}

export interface ThemeBgColors {
  tabbar: string;
  brandLight: string;
  brandMain: string;
}

export interface ThemeBgSurfaceColors {
  primary: string;
  error: string;
  success: string;
  info: string;
}

export interface ThemeBgFillColors {
  primary: string;
  disabled: string;
  error: string;
  success: string;
  brandMain: string;
  white: string;
}

export interface ThemeBorderColors {
  default: string;
  disabled: string;
  error: string;
  brandMain: string;
}

export interface ThemeIconColors {
  default: string;
  disabled: string;
  onMain: string;
  error: string;
  success: string;
  brandMain: string;
  info: string;
}

export interface ThemeExtraColors {
  swipeDelete: string;
  swipeComplete: string;
  swipeEdit: string;
  swipeArchive: string;
}

// ─── Composed theme ──────────────────────────────────────────

export interface ThemeColors {
  text: ThemeTextColors;
  bg: ThemeBgColors;
  bgSurface: ThemeBgSurfaceColors;
  bgFill: ThemeBgFillColors;
  border: ThemeBorderColors;
  icon: ThemeIconColors;
  extra: ThemeExtraColors;
}

/** Full resolved theme object returned by useTheme() */
export interface Theme {
  colors: ThemeColors;
  spacing: typeof SPACING;
  radius: typeof RADIUS;
  opacity: typeof OPACITY;
}

// ─── Theme definition helpers ────────────────────────────────

/** Utility type for partial overrides */
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

/** Base theme defines colors for both modes */
export interface BaseThemeDefinition {
  colors: Record<ThemeMode, ThemeColors>;
}

/** Brand theme overrides — partial colors per mode */
export interface BrandThemeDefinition {
  colors: Record<ThemeMode, DeepPartial<ThemeColors>>;
}

/** All brand themes keyed by ThemeColor */
export type BrandThemes = Record<ThemeColor, BrandThemeDefinition>;

/** Fully resolved themes: theme[color][mode] → Theme */
export type ResolvedThemes = Record<ThemeColor, Record<ThemeMode, Theme>>;

// ─── Context ─────────────────────────────────────────────────

export interface ThemeContextValue {
  /** Current resolved theme */
  theme: Theme;
  /** Active resolved mode (light or dark) */
  themeMode: ThemeMode;
  /** User's preference (light, dark, or auto) */
  themePreference: ThemePreference;
  /** Set user's mode preference */
  setThemePreference: (preference: ThemePreference) => void;
  /** Active brand color */
  themeColor: ThemeColor;
  /** Set brand color */
  setThemeColor: (color: ThemeColor) => void;
}
