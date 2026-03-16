import type { ReactNode, ButtonHTMLAttributes } from "react";
import styles from "./chip-button.module.css";

export type ChipButtonSize = "s" | "m" | "l";

export interface ChipButtonProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "className"
> {
  size: ChipButtonSize;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  active?: boolean;
  label?: string;
}

/**
 * ChipButton component for filters, tags, or small action buttons.
 * Supports S, M, L sizes, icons on both sides, and active/disabled states.
 */
export const ChipButton = ({
  size,
  startIcon,
  endIcon,
  active = false,
  label,
  disabled,
  children,
  ...props
}: ChipButtonProps) => {
  const content = label || children;
  // Icon-only chips use a dedicated padding preset to keep the visual width consistent.
  const isIconOnly = !content && (startIcon || endIcon);

  const classes = [
    styles.chipButton,
    styles[`size${size.toUpperCase()}`],
    active ? styles.active : "",
    disabled ? styles.disabled : "",
    startIcon ? styles.hasStartIcon : "",
    endIcon ? styles.hasEndIcon : "",
    isIconOnly ? styles.iconOnly : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classes} disabled={disabled} {...props}>
      {startIcon && <span className={styles.icon}>{startIcon}</span>}
      {content && <span className={styles.label}>{content}</span>}
      {endIcon && <span className={styles.icon}>{endIcon}</span>}
    </button>
  );
};
