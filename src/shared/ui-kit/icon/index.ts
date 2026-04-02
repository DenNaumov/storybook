import type { ComponentType, SVGProps } from "react";
import { Icon16Icons, type Icon16IconKeys } from "./packs/16";
import { Icon20Icons, type Icon20IconKeys } from "./packs/20";
import { Icon24Icons, type Icon24IconKeys } from "./packs/24";
import { Icon28Icons, type Icon28IconKeys } from "./packs/28";
import {
  ResizableIcons,
  type ResizableIconKeys,
} from "./packs/resizable";

export * from "./packs/16";
export * from "./packs/20";
export * from "./packs/24";
export * from "./packs/28";
export * from "./packs/resizable";

type SvgIconComponent = ComponentType<SVGProps<SVGSVGElement>>;

type IconRendererProps<TIcon extends string> = Omit<
  SVGProps<SVGSVGElement>,
  "color"
> & {
  icon: TIcon;
  size?: number;
  color?: string;
};

const renderIcon = <TIcon extends string>(
  iconMap: Record<TIcon, SvgIconComponent>,
  { icon, size, color, style, ...props }: IconRendererProps<TIcon>,
) => {
  const IconComponent = iconMap[icon];

  return (
    <IconComponent
      width={size}
      height={size}
      color={color}
      style={{ color, ...style }}
      {...props}
    />
  );
};

export const Icon16 = (props: IconRendererProps<Icon16IconKeys>) =>
  renderIcon(Icon16Icons, props);

export const Icon20 = (props: IconRendererProps<Icon20IconKeys>) =>
  renderIcon(Icon20Icons, props);

export const Icon24 = (props: IconRendererProps<Icon24IconKeys>) =>
  renderIcon(Icon24Icons, props);

export const Icon28 = (props: IconRendererProps<Icon28IconKeys>) =>
  renderIcon(Icon28Icons, props);

export const ResizableIcon = (props: IconRendererProps<ResizableIconKeys>) =>
  renderIcon(ResizableIcons, props);
