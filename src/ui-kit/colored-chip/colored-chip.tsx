import type { HTMLAttributes, ReactNode } from "react";
import { ResizableIcon } from "../icon/icon-wrappers";
import type { ResizableIconKeys } from "../icon/packs/resizable";
import { Typography } from "../typography/typography";
import styles from "./colored-chip.module.css";

export type ColoredChipTone = "orange" | "green";

export interface ColoredChipProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "children"
> {
  label: ReactNode;
  tone?: ColoredChipTone;
  startIcon?: ResizableIconKeys | ReactNode;
  endIcon?: ResizableIconKeys | ReactNode;
  multiline?: boolean;
}

const renderIcon = (
  icon: ColoredChipProps["startIcon"] | ColoredChipProps["endIcon"],
  tone: ColoredChipTone,
) => {
  if (!icon) {
    return null;
  }

  if (typeof icon === "string") {
    return (
      <ResizableIcon
        icon={icon}
        size={20}
        color={
          tone === "green"
            ? "var(--colored-chip-icon-green)"
            : "var(--colored-chip-icon-orange)"
        }
      />
    );
  }

  return icon;
};

export const ColoredChip = ({
  label,
  tone = "orange",
  startIcon,
  endIcon,
  multiline = false,
  className = "",
  ...props
}: ColoredChipProps) => {
  const classes = [
    styles.coloredChip,
    styles[`tone${tone.charAt(0).toUpperCase() + tone.slice(1)}`],
    multiline ? styles.multiline : styles.singleline,
    startIcon ? styles.hasStartIcon : "",
    endIcon ? styles.hasEndIcon : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} {...props}>
      {startIcon ? (
        <span className={styles.icon}>{renderIcon(startIcon, tone)}</span>
      ) : null}

      <Typography
        as="span"
        variant="caption1-regular"
        className={styles.label}
        style={{ color: "var(--theme-text-primary)" }}
      >
        {label}
      </Typography>

      {endIcon ? (
        <span className={styles.icon}>{renderIcon(endIcon, tone)}</span>
      ) : null}
    </div>
  );
};
