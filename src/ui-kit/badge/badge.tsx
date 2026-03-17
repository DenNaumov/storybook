import type { ReactNode } from "react";
import { Typography } from "../typography/typography";
import styles from "./badge.module.css";

export type BadgeVariant = "primary" | "error" | "inverse";
export type BadgeSize = "dot" | "medium" | "large";

export interface BadgeProps {
  variant?: BadgeVariant;
  size?: BadgeSize;
  children?: ReactNode;
  /** Badge value */
  count?: number | string;
  className?: string;
}

/**
 * Badge component for displaying notifications, counts, or status indicators.
 * Matches the design with dot, medium, and large variants in blue, red, and inverse themes.
 */
export const Badge = ({
  variant = "primary",
  size = "medium",
  children,
  count,
  className,
  ...props
}: BadgeProps) => {
  const isDot = size === "dot";
  const content = isDot ? null : (children ?? count);

  const classes = [
    styles.badge,
    styles[`variant${variant.charAt(0).toUpperCase()}${variant.slice(1)}`],
    styles[`size${size.charAt(0).toUpperCase()}${size.slice(1)}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={classes} {...props}>
      {content !== null ? (
        <Typography
          as="span"
          variant={
            size === "large" ? "subheadline2-semibold" : "caption1-semibold"
          }
          className={styles.label}
          style={{ color: "inherit" }}
        >
          {content}
        </Typography>
      ) : null}
    </span>
  );
};
