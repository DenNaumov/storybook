import type { HTMLAttributes, ReactNode } from "react";
import { ResizableIcon } from "../icon";
import type { ResizableIconKeys } from "../icon/packs/resizable";
import { Typography } from "../typography/typography";
import styles from "./colored-chip.module.css";

export interface ColoredChipProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "children"
> {
  label: ReactNode;
  color: string;
  startIcon?: ResizableIconKeys;
  endIcon?: ResizableIconKeys;
  multiline?: boolean;
}

const renderIcon = (icon: ResizableIconKeys) => {
  return <ResizableIcon icon={icon} size={20} color="inherit" />;
};

export const ColoredChip = ({
  label,
  color,
  startIcon,
  endIcon,
  multiline = false,
  className = "",
  style,
  ...props
}: ColoredChipProps) => {
  const classes = [
    styles.coloredChip,
    multiline ? styles.multiline : styles.singleline,
    startIcon ? styles.hasStartIcon : "",
    endIcon ? styles.hasEndIcon : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const chipStyle = {
    backgroundColor: `color-mix(in srgb, ${color}, transparent 85%)`,
    color: color,
    ...style,
  };

  return (
    <div className={classes} style={chipStyle} {...props}>
      {startIcon && (
        <span className={styles.icon}>{renderIcon(startIcon)}</span>
      )}

      <Typography as="span" variant="caption1-regular" className={styles.label}>
        {label}
      </Typography>

      {endIcon && <span className={styles.icon}>{renderIcon(endIcon)}</span>}
    </div>
  );
};
