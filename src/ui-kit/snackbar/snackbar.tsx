import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";
import { Icon20, Icon28 } from "../icon/icon-wrappers";
import { IconButton } from "../icon-button/icon-button";
import styles from "./snackbar.module.css";

export type SnackbarVariant = "neutral" | "success" | "error";

export interface SnackbarProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "children" | "className"
> {
  message: ReactNode;
  variant?: SnackbarVariant;
  actionLabel?: string;
  onAction?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
  actionAriaLabel?: string;
  onDismiss?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
  dismissAriaLabel?: string;
  hideIcon?: boolean;
  className?: string;
}

const variantToIcon = {
  neutral: null,
  success: (
    <Icon28
      icon="Check"
      size={28}
      color="var(--theme-icon-success)"
      aria-hidden="true"
    />
  ),
  error: (
    <Icon28
      icon="Warning"
      size={28}
      color="var(--theme-icon-error)"
      aria-hidden="true"
    />
  ),
} as const;

export const Snackbar = ({
  message,
  variant = "neutral",
  actionLabel,
  onAction,
  actionAriaLabel,
  onDismiss,
  dismissAriaLabel = "Закрыть уведомление",
  hideIcon = false,
  className = "",
  ...props
}: SnackbarProps) => {
  const icon = hideIcon ? null : variantToIcon[variant];
  const liveMode = variant === "error" ? "assertive" : "polite";
  const role = variant === "error" ? "alert" : "status";

  return (
    <div
      className={[
        styles.snackbar,
        styles[`variant${capitalize(variant)}`],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      role={role}
      aria-live={liveMode}
      {...props}
    >
      <div className={styles.content}>
        {icon && <span className={styles.icon}>{icon}</span>}
        <span className={styles.message}>{message}</span>
      </div>

      {(actionLabel || onDismiss) && (
        <div className={styles.controls}>
          {actionLabel && (
            <button
              type="button"
              className={styles.action}
              aria-label={actionAriaLabel ?? actionLabel}
              onClick={onAction}
            >
              {actionLabel}
            </button>
          )}

          {onDismiss && (
            <span className={styles.dismiss}>
              <IconButton
                buttonSize="s"
                iconSize="s"
                icon={
                  <Icon20
                    icon="Cancel"
                    size={20}
                    color="var(--theme-icon-default)"
                    aria-hidden="true"
                  />
                }
                aria-label={dismissAriaLabel}
                onClick={onDismiss}
              />
            </span>
          )}
        </div>
      )}
    </div>
  );
};

const capitalize = (value: string) =>
  value.charAt(0).toUpperCase() + value.slice(1);
