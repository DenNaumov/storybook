import type { ComponentType, SVGProps } from 'react';
import type { CommonIconProps } from './icon.types';
import { Icon16Icons, type Icon16IconKeys } from './packs/16';
import { Icon20Icons, type Icon20IconKeys } from './packs/20';
import { Icon24Icons, type Icon24IconKeys } from './packs/24';
import { Icon28Icons, type Icon28IconKeys } from './packs/28';
import { ResizableIcons, type ResizableIconKeys } from './packs/resizable';

type SvgComponent = ComponentType<SVGProps<SVGSVGElement>>;
type SvgModule = SvgComponent | { default?: SvgComponent; ReactComponent?: SvgComponent };

const resolveSvgComponent = (iconModule: SvgModule): SvgComponent => {
  if (typeof iconModule === 'function') {
    return iconModule;
  }

  if (iconModule && typeof iconModule === 'object' && typeof iconModule.default === 'function') {
    return iconModule.default;
  }

  if (iconModule && typeof iconModule === 'object' && typeof iconModule.ReactComponent === 'function') {
    return iconModule.ReactComponent;
  }

  throw new Error('Invalid SVG icon module.');
};

export interface Icon16Props extends CommonIconProps {
  icon: Icon16IconKeys;
}

export interface Icon20Props extends CommonIconProps {
  icon: Icon20IconKeys;
}

export interface Icon24Props extends CommonIconProps {
  icon: Icon24IconKeys;
}

export interface Icon28Props extends CommonIconProps {
  icon: Icon28IconKeys;
}

export interface ResizableIconProps extends CommonIconProps {
  icon: ResizableIconKeys;
}

/** Иконки размером 16x16 */
export const Icon16 = ({ icon, size = 16, color, ...props }: Icon16Props) => {
  const Icon = resolveSvgComponent(Icon16Icons[icon] as SvgModule);
  return <Icon width={size} height={size} color={color} {...props} />;
};

/** Иконки размером 20x20 */
export const Icon20 = ({ icon, size = 20, color, ...props }: Icon20Props) => {
  const Icon = resolveSvgComponent(Icon20Icons[icon] as SvgModule);
  return <Icon width={size} height={size} color={color} {...props} />;
};

/** Иконки размером 24x24 */
export const Icon24 = ({ icon, size = 24, color, ...props }: Icon24Props) => {
  const Icon = resolveSvgComponent(Icon24Icons[icon] as SvgModule);
  return <Icon width={size} height={size} color={color} {...props} />;
};

/** Иконки размером 28x28 */
export const Icon28 = ({ icon, size = 28, color, ...props }: Icon28Props) => {
  const Icon = resolveSvgComponent(Icon28Icons[icon] as SvgModule);
  return <Icon width={size} height={size} color={color} {...props} />;
};

/** Иконки со свободным размером из пакета resizable */
export const ResizableIcon = ({ icon, size = 24, color, ...props }: ResizableIconProps) => {
  const IconComponent = resolveSvgComponent(ResizableIcons[icon] as SvgModule);
  return <IconComponent width={size} height={size} color={color} {...props} style={{ width: size, height: size, ...props.style }} />;
};

// Короткий алиас, если нужен более общий нейминг
export const Icon = ResizableIcon;
