import type { ReactNode, SVGProps } from 'react';

export interface BaseIconProps extends SVGProps<SVGSVGElement> {
  /** Цвет иконки (по умолчанию currentColor) */
  color?: string;
  /** Размер (для ResizableIcon) */
  size?: number | string;
  /** Дочерние элементы SVG (path, circle и т.д.) */
  children?: ReactNode;
}

export interface CommonIconProps extends Omit<SVGProps<SVGSVGElement>, 'color'> {
  /** Цвет иконки (по умолчанию currentColor) */
  color?: string;
  /** Размер иконки */
  size?: number;
}

export const BaseIcon = ({
  color = 'currentColor',
  size,
  width,
  height,
  viewBox,
  children,
  ...props
}: BaseIconProps) => (
  <svg
    width={width || size}
    height={height || size}
    viewBox={viewBox}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ color, flexShrink: 0, ...props.style }}
    {...props}
  >
    {children}
  </svg>
);
