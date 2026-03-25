import React, { useState } from "react";
import { Typography } from "../typography/typography";
import styles from "./text-field.module.css";

export interface TextFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      label = "Label",
      value,
      placeholder,
      disabled = false,
      onChange,
      onFocus,
      onBlur,
      className,
      ...restProps
    },
    ref,
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    const hasValue =
      value !== undefined && value !== null && String(value).length > 0;

    const showCenteredPlaceholder = !hasValue && !isFocused && !disabled;
    const displayPlaceholder = placeholder || label;

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      onBlur?.(e);
    };

    return (
      <div className={`${styles.wrapper} ${className || ""}`}>
        <div className={`${styles.settings} ${disabled ? styles.disabled : ""}`}>
          <div className={styles.bg}>
            <div
              className={`${styles.textContainer} ${showCenteredPlaceholder ? styles.textContainerCentered : ""
                }`}
            >
              {!showCenteredPlaceholder && (
                <Typography
                  variant="caption1-regular"
                  color="var(--theme-text-secondary)"
                  as="label"
                  className={styles.label}
                >
                  {label}
                </Typography>
              )}

              <div className={styles.textZone}>
                <Typography
                  as="div"
                  variant="subheadline2-semibold"
                  color="var(--theme-text-primary)"
                  className={styles.bodyText}
                >
                  <div className={styles.inputContainer}>
                    <input
                      ref={ref}
                      className={styles.input}
                      value={value}
                      placeholder={showCenteredPlaceholder ? "" : placeholder}
                      disabled={disabled}
                      onChange={onChange}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      spellCheck={false}
                      {...restProps}
                    />

                    {showCenteredPlaceholder && (
                      <div className={styles.centerPlaceholder}>
                        <Typography
                          as="div"
                          variant="subheadline2-semibold"
                          color="var(--theme-text-secondary)"
                          className={styles.centerPlaceholderText}
                        >
                          {displayPlaceholder}
                        </Typography>
                      </div>
                    )}
                  </div>
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
);

TextField.displayName = "TextField";