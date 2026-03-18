import type { HTMLAttributes, ReactNode } from "react";
import { Typography } from "../typography/typography";
import styles from "./badge.module.css";

export type BadgeVariant = "default" | "critical" | "white";
export type BadgeSize = "dot" | "medium" | "large";

export interface BadgeProps extends Omit<
  HTMLAttributes<HTMLSpanElement>,
  "children" | "className"
> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  children?: ReactNode;
  count?: number | string;
  className?: string;
}

export const Badge = ({
  variant = "default",
  size = "medium",
  children,
  count,
  className,
  ...props
}: BadgeProps) => {
  const isDot = size === "dot";
  const content = isDot ? null : (children ?? count);

  const variantClasses: Record<BadgeVariant, string | undefined> = {
    default: styles.variantDefault,
    critical: styles.variantCritical,
    white: styles.variantWhite,
  };

  const sizeClasses: Record<BadgeSize, string | undefined> = {
    dot: styles.sizeDot,
    medium: styles.sizeMedium,
    large: styles.sizeLarge,
  };

  const classes = [
    styles.badge,
    variantClasses[variant],
    sizeClasses[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={classes} {...props}>
      {isDot ? <span className={styles.dot} aria-hidden="true" /> : null}
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
