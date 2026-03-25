import React from "react";
import { Typography } from "../typography/typography";
import styles from "./text-field.module.css";

export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
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
      className,
      ...restProps
    },
    ref,
  ) => {
    return (
      <div className={`${styles.wrapper} ${className || ""}`}>
        <div
          className={`${styles.settings} ${disabled ? styles.disabled : ""}`}
        >
          <div className={styles.bg}>
            <div className={styles.textContainer}>
              <Typography
                variant="caption1-regular"
                color="var(--theme-text-secondary)"
                as="label"
                className={styles.label}
              >
                {label}
              </Typography>
              <div className={styles.textZone}>
                <Typography
                  as="div"
                  variant="subheadline2-semibold"
                  color="var(--theme-text-primary)"
                  className={styles.bodyText}
                >
                  <input
                    ref={ref}
                    className={styles.input}
                    value={value}
                    placeholder={placeholder}
                    disabled={disabled}
                    onChange={onChange}
                    spellCheck={false}
                    {...restProps}
                  />
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
