import type { ReactNode, HTMLAttributes } from "react";
import styles from "./button-group.module.css";

export type ButtonGroupDirection =
  | "vertical"
  | "horizontal"
  | "horizontalFixed";

export interface ButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
  direction?: ButtonGroupDirection;
  withSpacing?: boolean;
  gap?: 12 | 0;
  children: ReactNode;
  className?: string;
}

/**
 * ButtonGroup component to layout multiple buttons.
 * Supports vertical, horizontal, and fixed-width horizontal layouts.
 */
export const ButtonGroup = ({
  direction = "vertical",
  withSpacing = false,
  gap = 12,
  children,
  className,
  ...props
}: ButtonGroupProps) => {
  const directionClass =
    direction === "horizontalFixed"
      ? styles.horizontalFixed
      : styles[direction];

  const classes = [
    styles.buttonGroup,
    directionClass,
    withSpacing ? styles.withSpacing : "",
    gap === 12 ? styles.withGap : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
