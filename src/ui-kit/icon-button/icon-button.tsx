import type { ButtonHTMLAttributes } from "react";
import { Badge } from "../badge/badge";
import { ResizableIcon } from "../icon/icon-wrappers";
import type { ResizableIconKeys } from "../icon/packs/resizable";
import styles from "./icon-button.module.css";

export type IconButtonSize = "s" | "m";
export type IconSize = "s" | "m";

const iconSizeToPixels: Record<IconSize, number> = {
  s: 20,
  m: 24,
};

export interface IconButtonProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "className" | "children"
> {
  buttonSize: IconButtonSize;
  iconSize: IconSize;
  icon: ResizableIconKeys;
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
    <button
      className={classes}
      disabled={disabled}
      type="button"
      {...props}
    >
      <div className={iconWrapperClasses}>
        <ResizableIcon
          icon={icon}
          size={iconSizeToPixels[iconSize]}
        />
        {badgeCount !== undefined && (
          <Badge variant="critical" className={styles.badge}>
            {badgeCount}
          </Badge>
        )}
      </div>
    </button>
  );
};
