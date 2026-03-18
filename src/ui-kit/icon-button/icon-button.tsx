import type { ReactNode, ButtonHTMLAttributes } from "react";
import { Badge } from "../badge/badge";
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
  badgeCount?: number | string;
  /** Storybook-only pressed state */
  pressed?: boolean;
}

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
          <Badge variant="critical" className={styles.badge}>
            {badgeCount}
          </Badge>
        )}
      </div>
    </button>
  );
};
