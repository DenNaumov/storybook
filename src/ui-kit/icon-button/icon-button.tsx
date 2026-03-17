import type { ReactNode, ButtonHTMLAttributes } from "react";
import { Typography } from "../typography/typography";
import styles from "./icon-button.module.css";

export type IconButtonSize = "s" | "m";
export type IconSize = "s" | "m";

export interface IconButtonProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "className"
> {
  buttonSize: IconButtonSize;
  iconSize: IconSize;
  icon: ReactNode;
  /** Badge value */
  badgeCount?: number | string;
  /** Storybook-only pressed state */
  pressed?: boolean;
}

/**
 * IconButton component based on Figma design.
 * Supports multiple button and icon sizes, states, and an optional badge.
 */
export const IconButton = ({
  buttonSize,
  iconSize,
  icon,
  badgeCount,
  pressed = false,
  disabled,
  ...props
}: IconButtonProps) => {
  const classes = [
    styles.iconButton,
    styles[`buttonSize${buttonSize.toUpperCase()}`],
    pressed ? styles.pressed : "",
    disabled ? styles.disabled : "",
  ]
    .filter(Boolean)
    .join(" ");

  const iconWrapperClasses = [
    styles.iconWrapper,
    styles[`iconSize${iconSize.toUpperCase()}`],
  ].join(" ");

  return (
    <button className={classes} disabled={disabled} {...props}>
      <div className={iconWrapperClasses}>
        {icon}
        {badgeCount !== undefined && (
          <Typography
            as="span"
            variant="caption1-semibold"
            className={styles.badge}
            style={{ color: "inherit" }}
          >
            {badgeCount}
          </Typography>
        )}
      </div>
    </button>
  );
};
