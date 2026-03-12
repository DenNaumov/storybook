import type { BaseIconProps, CommonIconProps } from './Icon.types';
import { Icon16Icons, type Icon16IconKeys } from './packs/16';
import { Icon20Icons, type Icon20IconKeys } from './packs/20';
import { Icon24Icons, type Icon24IconKeys } from './packs/24';
import { Icon28Icons, type Icon28IconKeys } from './packs/28';

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

/** Иконки размером 16x16 */
export const Icon16 = ({ icon, size = 16, color, ...props }: Icon16Props) => {
    const Icon = Icon16Icons[icon];
    return <Icon width={size} height={size} color={color} {...props} />;
};

/** Иконки размером 20x20 */
export const Icon20 = ({ icon, size = 20, color, ...props }: Icon20Props) => {
    const Icon = Icon20Icons[icon];
    return <Icon width={size} height={size} color={color} {...props} />;
};

/** Иконки размером 24x24 */
export const Icon24 = ({ icon, size = 24, color, ...props }: Icon24Props) => {
    const Icon = Icon24Icons[icon];
    return <Icon width={size} height={size} color={color} {...props} />;
};

/** Иконки размером 28x28 */
export const Icon28 = ({ icon, size = 28, color, ...props }: Icon28Props) => {
    const Icon = Icon28Icons[icon];
    return <Icon width={size} height={size} color={color} {...props} />;
};

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
