"use client";

import { useContext } from "react";
import { ThemeContext } from "../theme-provider/theme-provider";
import type { ThemeColor, ThemeMode, ThemePreference } from "../theme.types";

interface UseThemeModeReturn {
  /** Current resolved mode (light or dark) */
  themeMode: ThemeMode;
  /** User's preference (light, dark, or auto) */
  themePreference: ThemePreference;
  /** Set user's preferred mode */
  setThemePreference: (preference: ThemePreference) => void;
  /** Current brand color */
  themeColor: ThemeColor;
  /** Set brand color */
  setThemeColor: (color: ThemeColor) => void;
}

/**
 * Hook to manage theme mode and color.
 *
 * Usage:
 * ```tsx
 * const { themeMode, themePreference, setThemePreference, themeColor, setThemeColor } = useThemeMode();
 * setThemePreference('dark');
 * setThemeColor('pink');
 * ```
 *
 * Must be used inside a <ThemeProvider>.
 */
export const useThemeMode = (): UseThemeModeReturn => {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useThemeMode must be used within a <ThemeProvider>");
  }
  return {
    themeMode: ctx.themeMode,
    themePreference: ctx.themePreference,
    setThemePreference: ctx.setThemePreference,
    themeColor: ctx.themeColor,
    setThemeColor: ctx.setThemeColor,
  };
};
