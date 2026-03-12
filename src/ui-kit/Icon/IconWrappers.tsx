import type { BaseIconProps } from './Icon.types';
import { SvgIcon, type SvgIconProps } from './SvgIcon';

export interface NamedIconProps extends Omit<SvgIconProps, 'src' | 'size'> {
    name: string;
}

const buildSrc = (size: number, name: string) => {
    if (name.endsWith('.svg')) {
        return `/icons/${size}/${name}`;
    }
    if (name.endsWith(`_${size}`)) {
        return `/icons/${size}/${name}.svg`;
    }
    return `/icons/${size}/${name}_${size}.svg`;
};

/** Иконки размером 16x16 */
export const Icon16 = ({ name, ...props }: NamedIconProps) => (
    <SvgIcon src={buildSrc(16, name)} size={16} {...props} />
);

/** Иконки размером 20x20 */
export const Icon20 = ({ name, ...props }: NamedIconProps) => (
    <SvgIcon src={buildSrc(20, name)} size={20} {...props} />
);

/** Иконки размером 24x24 */
export const Icon24 = ({ name, ...props }: NamedIconProps) => (
    <SvgIcon src={buildSrc(24, name)} size={24} {...props} />
);

/** Иконки размером 28x28 */
export const Icon28 = ({ name, ...props }: NamedIconProps) => (
    <SvgIcon src={buildSrc(28, name)} size={28} {...props} />
);

/** Иконка со свободным размером (для кастомных inline-svg) */
export const ResizableIcon = ({ size = 24, ...props }: BaseIconProps) => (
    <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ color: props.color ?? 'currentColor', flexShrink: 0, ...props.style }}
        {...props}
    >
        {props.children}
    </svg>
);
