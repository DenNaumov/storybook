import type { ReactNode, ButtonHTMLAttributes } from "react";
import styles from "./fab.module.css";

export type FABVariant = "primary" | "bezeled" | "white";

export interface FABProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> {
    /** Visual style variant */
    variant?: FABVariant;
    /** Icon to display in the FAB */
    icon?: ReactNode;
    /** Force pressed state (useful for Storybook) */
    pressed?: boolean;
}

/**
 * Floating Action Button (FAB) component.
 * Used for the primary action on a screen.
 */
export const FAB = ({
    variant = "primary",
    icon,
    pressed = false,
    disabled,
    children,
    ...props
}: FABProps) => {
    const classes = [
        styles.fab,
        styles[`variant${variant.charAt(0).toUpperCase()}${variant.slice(1)}`],
        pressed ? styles.pressed : "",
        disabled ? styles.disabled : "",
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <button className={classes} disabled={disabled} {...props}>
            <span className={styles.icon}>
                {icon || children || "+"}
            </span>
        </button>
    );
};
