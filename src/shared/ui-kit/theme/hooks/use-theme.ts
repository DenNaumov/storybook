"use client";

import { useContext } from "react";
import { ThemeContext } from "../theme-provider/theme-provider";
import type { Theme } from "../theme.types";

/**
 * Returns the current resolved Theme object.
 *
 * Usage in inline styles:
 * ```tsx
 * const theme = useTheme();
 * <div style={{ color: theme.colors.text.primary, padding: theme.spacing.l }} />
 * ```
 *
 * Must be used inside a <ThemeProvider>.
 */
export const useTheme = (): Theme => {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within a <ThemeProvider>");
  }
  return ctx.theme;
};
