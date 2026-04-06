import type { ThemeIconColors } from "../theme/theme.types";

export type ThemeIconColor = keyof ThemeIconColors;

const themeIconColorMap: Record<ThemeIconColor, string> = {
  default: "var(--theme-icon-default)",
  disabled: "var(--theme-icon-disabled)",
  onMain: "var(--theme-icon-on-main)",
  error: "var(--theme-icon-error)",
  success: "var(--theme-icon-success)",
  brandMain: "var(--theme-icon-brand-main)",
  info: "var(--theme-icon-info)",
};

export const resolveThemeIconColor = (
  color?: ThemeIconColor | (string & {}),
) => (color ? themeIconColorMap[color as ThemeIconColor] || color : undefined);
