import type { ReactNode } from "react";

import styles from "./button.module.css";

export type ButtonVariant = "primary" | "bezeled" | "outlined" | "text";
export type ButtonSize = "s" | "m" | "small" | "medium";

export interface ButtonProps {
  variant?: ButtonVariant;
  size: ButtonSize;
  label?: string;
  children?: ReactNode;
  onClick?: () => void;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  loading?: boolean;
  /** Storybook-only pressed state */
  pressed?: boolean;
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
