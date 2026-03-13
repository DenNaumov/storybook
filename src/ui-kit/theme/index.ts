// Theme system public API
export { ThemeProvider } from "./theme-provider/theme-provider";
export { ThemeContext } from "./theme-provider/theme-provider";
export { useTheme } from "./hooks/use-theme";
export { useThemeMode } from "./hooks/use-theme-mode";
export { themes } from "./theme";
export { COLORS, SPACING, RADIUS, OPACITY } from "./theme.constants";
export { THEME_COLORS, THEME_MODES } from "./theme.types";
export { flattenThemeToCssVars } from "./theme.utils";

export type {
  Theme,
  ThemeMode,
  ThemePreference,
  ThemeColor,
  ThemeColors,
  ThemeTextColors,
  ThemeBgColors,
  ThemeBgSurfaceColors,
  ThemeBgFillColors,
  ThemeBorderColors,
  ThemeIconColors,
  ThemeExtraColors,
  ThemeContextValue,
} from "./theme.types";
