import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";
import { Typography } from "../typography/typography";
import styles from "./segmented-control.module.css";

export interface SegmentedControlProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "children"
> {
  children: ReactNode;
  fullWidth?: boolean;
}

export interface SegmentedControlItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
  label?: string;
  children?: ReactNode;
}

export const SegmentedControl = ({
  children,
  fullWidth = false,
  className,
  role = "radiogroup",
  ...props
}: SegmentedControlProps) => {
  const classes = [
    styles.segmentedControl,
    fullWidth ? styles.fullWidth : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} role={role} {...props}>
      {children}
    </div>
  );
};

export const SegmentedControlItem = ({
  selected = false,
  label,
  children,
  disabled,
  type = "button",
  className,
  ...props
}: SegmentedControlItemProps) => {
  const content = children ?? label;
  const classes = [
    styles.item,
    selected ? styles.selected : "",
    disabled ? styles.disabled : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      className={classes}
      type={type}
      role="radio"
      aria-checked={selected}
      disabled={disabled}
      {...props}
    >
      <Typography
        as="span"
        variant="caption1-regular"
        className={styles.label}
        style={{ color: "inherit" }}
      >
        {content}
      </Typography>
    </button>
  );
};
