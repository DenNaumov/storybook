import type { ButtonHTMLAttributes } from "react";
import { Badge } from "../badge/badge";
import { Icon24, ResizableIcon } from "../icon/icon-wrappers";
import type { Icon24IconKeys } from "../icon/packs/24";
import type { ResizableIconKeys } from "../icon/packs/resizable";
import { ResizableIcons } from "../icon/packs/resizable";
import styles from "./icon-button.module.css";

export type IconButtonSize = "s" | "m";
export type IconSize = "s" | "m";

const iconSizeToPixels: Record<IconSize, number> = {
  s: 20,
  m: 24,
};

export interface IconButtonProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "children"
> {
  buttonSize: IconButtonSize;
  iconSize: IconSize;
  icon: ResizableIconKeys | Icon24IconKeys;
  badgeCount?: number | string;
  /** Storybook-only pressed state */
  pressed?: boolean;
}

const isResizableIcon = (
  icon: ResizableIconKeys | Icon24IconKeys,
): icon is ResizableIconKeys => icon in ResizableIcons;

const buttonSizeMap: Record<IconButtonSize, string> = {
  s: styles.buttonSizeS,
  m: styles.buttonSizeM,
};

const iconSizeMap: Record<IconSize, string> = {
  s: styles.iconSizeS,
  m: styles.iconSizeM,
};

export const IconButton = ({
  buttonSize,
  iconSize,
  icon,
  badgeCount,
  pressed = false,
  disabled,
  className,
  ...props
}: IconButtonProps) => {
  const classes = [
    styles.iconButton,
    buttonSizeMap[buttonSize],
    pressed ? styles.pressed : "",
    disabled ? styles.disabled : "",
    className || "",
  ]
    .filter(Boolean)
    .join(" ");

  const iconWrapperClasses = [styles.iconWrapper, iconSizeMap[iconSize]].join(
    " ",
  );

  return (
    <button className={classes} disabled={disabled} type="button" {...props}>
      <div className={iconWrapperClasses}>
        {isResizableIcon(icon) ? (
          <ResizableIcon icon={icon} size={iconSizeToPixels[iconSize]} />
        ) : (
          <Icon24 icon={icon} size={iconSizeToPixels[iconSize]} />
        )}
        {badgeCount !== undefined && (
          <Badge variant="critical" className={styles.badge}>
            {badgeCount}
          </Badge>
        )}
      </div>
    </button>
  );
};
