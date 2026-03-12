import type { ReactNode, ButtonHTMLAttributes } from 'react';
import styles from './InlineButton.module.css';

export type InlineButtonVariant = 'surface' | 'bezeled' | 'primary';

export interface InlineButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
    /** Visual style of the button */
    variant?: InlineButtonVariant;
    /** Icon to display above the text */
    icon: ReactNode;
    /** Text label to display below the icon */
    label: string;
}

/**
 * InlineButton component with a vertical layout (icon over text).
 * Used for specific actions like "Reset", "Filter", etc. in small areas.
 */
export const InlineButton = ({
    variant = 'surface',
    icon,
    label,
    disabled,
    ...props
}: InlineButtonProps) => {
    const classes = [
        styles.inlineButton,
        styles[`variant${variant.charAt(0).toUpperCase() + variant.slice(1)}`],
        disabled ? styles.disabled : '',
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <button className={classes} disabled={disabled} {...props}>
            <span className={styles.icon}>{icon}</span>
            <span className={styles.label}>{label}</span>
        </button>
    );
};
