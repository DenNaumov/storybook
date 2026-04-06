import React, { useState } from "react";
import { InputMaster } from "../input-master/input-master";
import { ResizableIcons } from "../icon/packs/resizable";
import styles from "./password-field.module.css";

export interface PasswordFieldProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "defaultValue" | "value" | "onChange" | "type"
> {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  error?: boolean;
  errorText?: string;
  clearable?: boolean;
  onClear?: () => void;
}

export const PasswordField = React.forwardRef<
  HTMLInputElement,
  PasswordFieldProps
>(
  (
    {
      label = "Пароль",
      value,
      onChange,
      error = false,
      errorText,
      className,
      clearable = false,
      autoComplete = "current-password",
      ...restProps
    },
    ref,
    ) => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const VisibilityIcon = passwordVisible
      ? ResizableIcons.ViewOffSlash
      : ResizableIcons.View;

    return (
      <div className={[styles.root, className].filter(Boolean).join(" ")}>
        <InputMaster
          {...restProps}
          ref={ref}
          label={label}
          type={passwordVisible ? "text" : "password"}
          value={value}
          onValueChange={onChange}
          error={error}
          errorText={errorText}
          clearable={clearable}
          endAdornment={
            <button
              type="button"
              className={styles.visibilityButton}
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => setPasswordVisible((current) => !current)}
              aria-label={
                passwordVisible ? "Скрыть пароль" : "Показать пароль"
              }
              aria-pressed={passwordVisible}
              disabled={restProps.disabled}
            >
              <VisibilityIcon width={24} height={24} color="default" />
            </button>
          }
          autoComplete={autoComplete}
          className={styles.field}
          spellCheck={false}
        />
      </div>
    );
  },
);

PasswordField.displayName = "PasswordField";
