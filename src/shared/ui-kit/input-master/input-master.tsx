import React, { useId, useImperativeHandle, useRef, useState } from "react";
import { IconButton } from "../icon-button/icon-button";
import styles from "./input-master.module.css";

const joinClasses = (...classNames: Array<string | false | undefined>) =>
  classNames.filter(Boolean).join(" ");

export interface InputMasterProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "defaultValue" | "value" | "onChange"
> {
  label?: React.ReactNode;
  value: string;
  onValueChange: (value: string) => void;
  assistiveText?: React.ReactNode;
  errorText?: React.ReactNode;
  error?: boolean;
  clearable?: boolean;
  onClear?: () => void;
  className?: string;
}

export const InputMaster = React.forwardRef<HTMLInputElement, InputMasterProps>(
  (
    {
      value,
      onValueChange: onChange,
      label,
      assistiveText,
      errorText,
      error = false,
      disabled = false,
      clearable = false,
      onClear,
      className,
      placeholder,
      id,
      onFocus,
      onBlur,
      ...restProps
    },
    ref,
  ) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const inputRef = useRef<HTMLInputElement>(null);
    const [focused, setFocused] = useState(false);

    useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

    const hasValue = value.length > 0;
    const isExpanded = focused || hasValue || disabled;
    const showClearButton = clearable && hasValue && !disabled;
    const clearLabel =
      typeof label === "string" && label.trim().length > 0
        ? `Очистить ${label}`
        : "Очистить";

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
      setFocused(true);
      onFocus?.(event);
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      setFocused(false);
      onBlur?.(event);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.value);
    };

    const handleClear = () => {
      const input = inputRef.current;

      if (!input) {
        return;
      }

      onChange("");
      input.focus();
      onClear?.();
    };

    return (
      <div className={joinClasses(styles.container, className)}>
        <div
          className={joinClasses(
            styles.field,
            disabled && styles.fieldDisabled,
            error && styles.fieldError,
          )}
        >
          <div
            className={joinClasses(
              styles.content,
              isExpanded ? styles.contentExpanded : styles.contentCentered,
            )}
          >
            {isExpanded && label ? (
              <label htmlFor={inputId} className={styles.label}>
                {label}
              </label>
            ) : null}
            <div className={styles.inputRow}>
              {!isExpanded && (placeholder || label) ? (
                <label htmlFor={inputId} className={styles.centerLabel}>
                  {placeholder || label}
                </label>
              ) : null}
              <input
                {...restProps}
                id={inputId}
                ref={inputRef}
                className={joinClasses(
                  styles.input,
                  disabled && styles.inputDisabled,
                )}
                value={value}
                placeholder={isExpanded ? placeholder : ""}
                disabled={disabled}
                aria-invalid={error || undefined}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>
          </div>
          {showClearButton ? (
            <IconButton
              buttonSize="m"
              iconSize="m"
              icon="Cancel"
              className={styles.clearButton}
              onMouseDown={(event) => event.preventDefault()}
              onClick={handleClear}
              aria-label={clearLabel}
            />
          ) : null}
        </div>
        {errorText ? <div className={styles.errorText}>{errorText}</div> : null}
        {assistiveText ? (
          <div className={styles.assistiveText}>{assistiveText}</div>
        ) : null}
      </div>
    );
  },
);

InputMaster.displayName = "InputMaster";
