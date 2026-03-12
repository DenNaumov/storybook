import type { ReactNode, ButtonHTMLAttributes } from 'react';
import styles from './ChipButton.module.css';

export type ChipButtonSize = 's' | 'm' | 'l';

export interface ChipButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
    /** Size of the chip button */
    size?: ChipButtonSize;
    /** Optional icon to display on the left */
    startIcon?: ReactNode;
    /** Optional icon to display on the right */
    endIcon?: ReactNode;
    /** Is the chip in an active/selected state? */
    active?: boolean;
    /** Text label to display */
    label?: string;
}

/**
 * ChipButton component for filters, tags, or small action buttons.
 * Supports S, M, L sizes, icons on both sides, and active/disabled states.
 */
export const ChipButton = ({
    size = 'm',
    startIcon,
    endIcon,
    active = false,
    label,
    disabled,
    children,
    ...props
}: ChipButtonProps) => {
    const content = label || children;
    const isIconOnly = !content && (startIcon || endIcon);

    const classes = [
        styles.chipButton,
        styles[`size${size.toUpperCase()}`],
        active ? styles.active : '',
        disabled ? styles.disabled : '',
        startIcon ? styles.hasStartIcon : '',
        endIcon ? styles.hasEndIcon : '',
        isIconOnly ? styles.iconOnly : '',
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <button className={classes} disabled={disabled} {...props}>
            {startIcon && <span className={styles.icon}>{startIcon}</span>}
            {content && <span className={styles.label}>{content}</span>}
            {endIcon && <span className={styles.icon}>{endIcon}</span>}
        </button>
    );
};
