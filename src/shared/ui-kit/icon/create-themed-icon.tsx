import type { ComponentType, SVGProps } from "react";
import { resolveThemeIconColor, type ThemeIconColor } from "./theme-icon-color";

export interface ThemedSvgIconProps extends Omit<
  SVGProps<SVGSVGElement>,
  "color"
> {
  color?: ThemeIconColor | (string & {});
}

export type ThemedSvgIconComponent = ComponentType<ThemedSvgIconProps>;

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
