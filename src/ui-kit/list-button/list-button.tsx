import type { ReactNode, ButtonHTMLAttributes } from "react";
import styles from "./list-button.module.css";

export interface ListButtonProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "className"
> {
  /** Text to display on the button */
  label?: string;
  /** Optional icon to display on the left */
  startIcon?: ReactNode;
  /** Force pressed state */
  pressed?: boolean;
}

/**
 * ListButton component typically used within lists or menus.
 * Matches the design with a dark background and blue text/icon.
 */
export const ListButton = ({
  label,
  startIcon,
  pressed = false,
  disabled,
  children,
  ...props
}: ListButtonProps) => {
  const classes = [
    styles.listButton,
    pressed ? styles.pressed : "",
    disabled ? styles.disabled : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classes} disabled={disabled} {...props}>
      {startIcon && <span className={styles.icon}>{startIcon}</span>}
      <span className={styles.label}>{label || children}</span>
    </button>
  );
};
