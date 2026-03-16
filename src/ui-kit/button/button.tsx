import type { ReactNode } from "react";

import styles from "./button.module.css";

export type ButtonVariant = "primary" | "bezeled" | "outlined" | "text";
export type ButtonSize = "s" | "m" | "small" | "medium";

export interface ButtonProps {
  /** Visual style */
  variant?: ButtonVariant;
  /** Button size */
  size: ButtonSize;
  /** Button contents */
  label?: string;
  /** Button contents */
  children?: ReactNode;
  /** Optional click handler */
  onClick?: () => void;
  /** Optional icon before the label */
  startIcon?: ReactNode;
  /** Optional icon after the label */
  endIcon?: ReactNode;
  /** Shows loading spinner */
  loading?: boolean;
  /** Force pressed state (for stories) */
  pressed?: boolean;
  /** Disable interaction */
  disabled?: boolean;
}

const normalizeSize = (size: ButtonSize): "s" | "m" => {
  if (size === "small") return "s";
  if (size === "medium") return "m";
  return size;
};

export const Button = ({
  variant = "primary",
  size,
  label,
  children,
  startIcon,
  endIcon,
  loading = false,
  pressed = false,
  disabled = false,
  ...props
}: ButtonProps) => {
  const resolvedSize = normalizeSize(size);
  const isDisabled = disabled || loading;
  const content = children ?? label;

  const classes = [
    styles.button,
    styles[`size${resolvedSize.toUpperCase()}`],
    styles[`variant${variant[0].toUpperCase()}${variant.slice(1)}`],
    pressed ? styles.pressed : "",
    isDisabled ? styles.disabled : "",
    loading ? styles.loading : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type="button"
      className={classes}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      {...props}
    >
      <span className={styles.content} data-hidden={loading ? "true" : "false"}>
        {startIcon ? <span className={styles.icon}>{startIcon}</span> : null}
        {content}
        {endIcon ? <span className={styles.icon}>{endIcon}</span> : null}
      </span>
      {loading ? <span className={styles.spinner} aria-hidden="true" /> : null}
    </button>
  );
};
