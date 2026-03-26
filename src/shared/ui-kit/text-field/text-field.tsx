import React from "react";
import { InputMaster } from "../input-master/input-master";
import { Typography } from "../typography/typography";
import styles from "./text-field.module.css";

export interface TextFieldProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "defaultValue" | "value" | "onChange"
  > {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  error?: boolean;
  clearable?: boolean;
  onClear?: () => void;
}

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      label = "Label",
      value,
      error = false,
      className,
      clearable = true,
      ...restProps
    },
    ref,
  ) => {
    const displayPlaceholder = restProps.placeholder || label;

    return (
      <InputMaster
        {...restProps}
        ref={ref}
        value={value}
        error={error}
        clearable={clearable}
        className={[styles.container, className].filter(Boolean).join(" ")}
        fieldClassName={({ focused, hasValue, disabled }) =>
          [
            styles.field,
            focused || hasValue || disabled
              ? styles.fieldExpanded
              : styles.fieldDefault,
            error ? styles.error : "",
            disabled ? styles.disabled : "",
          ]
            .filter(Boolean)
            .join(" ")
        }
        contentClassName={({ focused, hasValue, disabled }) =>
          [
            styles.content,
            !(focused || hasValue || disabled) ? styles.contentCentered : "",
          ]
            .filter(Boolean)
            .join(" ")
        }
        innerContent={({ inputId, focused, hasValue, disabled }) =>
          focused || hasValue || disabled ? (
            <label htmlFor={inputId} className={styles.label}>
              <Typography
                variant="caption1-regular"
                color="primary"
              >
                {label}
              </Typography>
            </label>
          ) : null
        }
        beforeInput={({ inputId, focused, hasValue, disabled }) =>
          !(focused || hasValue || disabled) ? (
            <label htmlFor={inputId} className={styles.centerPlaceholder}>
              <Typography
                variant="text-semibold"
                color="var(--theme-text-secondary)"
              >
                {displayPlaceholder}
              </Typography>
            </label>
          ) : null
        }
        inputRowClassName={styles.inputRow}
        inputClassName={styles.input}
        clearButtonClassName={styles.clearButton}
        clearAriaLabel={`Clear ${label}`}
        inputProps={({ focused, hasValue, disabled }) => ({
          placeholder:
            focused || hasValue || disabled ? restProps.placeholder : "",
        })}
        spellCheck={false}
      />
    );
  },
);

TextField.displayName = "TextField";
