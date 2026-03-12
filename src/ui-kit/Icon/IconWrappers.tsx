import { BaseIcon, type BaseIconProps } from './Icon.types';

/** Иконки размером 16x16 */
export const Icon16 = (props: Omit<BaseIconProps, 'size'>) => (
    <BaseIcon width={16} height={16} viewBox="0 0 16 16" {...props} />
);

/** Иконки размером 20x20 */
export const Icon20 = (props: Omit<BaseIconProps, 'size'>) => (
    <BaseIcon width={20} height={20} viewBox="0 0 20 20" {...props} />
);

/** Иконки размером 24x24 */
export const Icon24 = (props: Omit<BaseIconProps, 'size'>) => (
    <BaseIcon width={24} height={24} viewBox="0 0 24 24" {...props} />
);

/** Иконки размером 28x28 */
export const Icon28 = (props: Omit<BaseIconProps, 'size'>) => (
    <BaseIcon width={28} height={28} viewBox="0 0 28 28" {...props} />
);

/** Иконка со свободным размером */
export const ResizableIcon = ({ size = 24, ...props }: BaseIconProps) => (
    <BaseIcon size={size} viewBox={`0 0 ${size} ${size}`} {...props} />
);
