import type { ComponentType, SVGProps } from "react";
import type { ThemeIconColors } from "../theme/theme.types";

export type ThemeIconColor = keyof ThemeIconColors;

export interface ThemedSvgIconProps extends Omit<
  SVGProps<SVGSVGElement>,
  "color"
> {
  color?: ThemeIconColor | (string & {});
}

export type ThemedSvgIconComponent = ComponentType<ThemedSvgIconProps>;

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

const wrapThemedIcon = (
  Icon: ComponentType<SVGProps<SVGSVGElement>>,
): ThemedSvgIconComponent => {
  const ThemedIcon = ({ color, ...props }: ThemedSvgIconProps) => (
    <Icon {...props} color={resolveThemeIconColor(color)} />
  );

  return ThemedIcon;
};

export const createThemedIcons = <
  TIcons extends Record<string, ComponentType<SVGProps<SVGSVGElement>>>,
>(
  icons: TIcons,
): { [TKey in keyof TIcons]: ThemedSvgIconComponent } =>
  Object.fromEntries(
    Object.entries(icons).map(([key, Icon]) => [key, wrapThemedIcon(Icon)]),
  ) as { [TKey in keyof TIcons]: ThemedSvgIconComponent };
