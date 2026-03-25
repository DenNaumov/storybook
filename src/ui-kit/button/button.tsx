import type { ReactNode } from "react";
import { Typography } from "../typography/typography";

import styles from "./button.module.css";

export type ButtonVariant = "primary" | "bezeled" | "outlined" | "text";
export type ButtonSize = "s" | "m";

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
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

const variantMap: Record<ButtonVariant, string> = {
  primary: styles.variantPrimary,
  bezeled: styles.variantBezeled,
  outlined: styles.variantOutlined,
  text: styles.variantText,
};

const sizeMap: Record<ButtonSize, string> = {
  s: styles.sizeS,
  m: styles.sizeM,
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
  const isDisabled = disabled || loading;
  const content = children ?? label;

  const classes = [
    styles.button,
    sizeMap[size],
    variantMap[variant],
    pressed ? styles.pressed : "",
    isDisabled ? styles.disabled : "",
    loading ? styles.loading : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={props.type || "button"}
      className={classes}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      {...props}
    >
      <span className={styles.content} data-hidden={loading ? "true" : "false"}>
        {startIcon ? <span className={styles.icon}>{startIcon}</span> : null}
        <Typography
          as="span"
          variant="text-medium"
          className={styles.label}
          style={{ color: "inherit" }}
        >
          {content}
        </Typography>
        {endIcon ? <span className={styles.icon}>{endIcon}</span> : null}
      </span>
      {loading ? <span className={styles.spinner} aria-hidden="true" /> : null}
    </button>
  );
};
