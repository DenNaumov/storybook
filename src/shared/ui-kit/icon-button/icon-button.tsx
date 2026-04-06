import { Badge } from "../badge/badge";
import type { ButtonHTMLAttributes } from "react";
import type { ThemedSvgIconComponent } from "../icon/icon.utils";
import styles from "./icon-button.module.css";

export type IconButtonSize = "s" | "m";
export type IconSize = "s" | "m";
export type SvgIconComponent = ThemedSvgIconComponent;

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
  icon: ThemedSvgIconComponent;
  badgeCount?: number | string;
  /** Storybook-only pressed state */
  pressed?: boolean;
}

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
  icon: IconComponent,
  badgeCount,
  pressed = false,
  disabled,
  ...props
}: IconButtonProps) => {
  const size = iconSizeToPixels[iconSize];

  const classes = [
    styles.iconButton,
    buttonSizeMap[buttonSize],
    pressed ? styles.pressed : "",
    disabled ? styles.disabled : "",
  ]
    .filter(Boolean)
    .join(" ");

  const iconWrapperClasses = [styles.iconWrapper, iconSizeMap[iconSize]].join(
    " ",
  );
  return (
    <button className={classes} disabled={disabled} type="button" {...props}>
      <div className={iconWrapperClasses}>
        <IconComponent width={size} height={size} />
        {badgeCount !== undefined && (
          <Badge variant="critical" className={styles.badge}>
            {badgeCount}
          </Badge>
        )}
      </div>
    </button>
  );
};
