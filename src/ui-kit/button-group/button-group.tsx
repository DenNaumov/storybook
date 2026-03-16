import type { ReactNode, HTMLAttributes } from "react";
import styles from "./button-group.module.css";

export type ButtonGroupDirection =
  | "vertical"
  | "horizontal"
  | "inline"
  | "chips";

export interface ButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
  direction?: ButtonGroupDirection;
  /** Add padding around the group (8px 16px) */
  withSpacing?: boolean;
  /** Gap between items (default 12px based on spec) */
  gap?: 12 | 0;
  children: ReactNode;
  className?: string;
}

/**
 * ButtonGroup component to layout multiple buttons.
 * Supports Figma specs for Vertical, Horizontal, Inline, and Chips layouts.
 */
export const ButtonGroup = ({
  direction = "vertical",
  withSpacing = false,
  gap = 12,
  children,
  className,
  ...props
}: ButtonGroupProps) => {
  const classes = [
    styles.buttonGroup,
    // Inline and chips use dedicated layout classes instead of the plain direction names.
    direction === "inline"
      ? styles.inlineHorizontal
      : direction === "chips"
        ? styles.chipsHorizontal
        : styles[direction],
    withSpacing ? styles.withSpacing : "",
    gap === 12 ? styles.gap12 : "",
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
