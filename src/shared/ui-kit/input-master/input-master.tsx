import React, { useId, useImperativeHandle, useRef, useState } from "react";
import { IconButton } from "../icon-button/icon-button";
import { Icon24Icons } from "../icon/packs/24";
import { Typography } from "../typography/typography";
import styles from "./input-master.module.css";

const joinClasses = (...classNames: Array<string | false | undefined>) =>
  classNames.filter(Boolean).join(" ");

export interface InputMasterProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "defaultValue" | "value" | "onChange"
> {
  label?: string;
  value: string;
  onValueChange: (value: string) => void;
  assistiveText?: string;
  errorText?: string;
  error?: boolean;
  clearable?: boolean;
  onClear?: () => void;
  endAdornment?: React.ReactNode;
  className?: string;
}

export const InputMaster = React.forwardRef<HTMLInputElement, InputMasterProps>(
  (
    {
      value,
      onValueChange,
      label,
      assistiveText,
      errorText,
      error = false,
      disabled = false,
      clearable = false,
      onClear,
      endAdornment,
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
    const hasRightActions = Boolean(endAdornment);
    const hasActions = showClearButton || hasRightActions;
    const clearLabel = label?.trim() ? `Очистить ${label}` : "Очистить";
    const labelColor = error ? "error" : disabled ? "disabled" : "secondary";
    const inputColor = error ? "error" : disabled ? "disabled" : "primary";
    const assistiveColor = disabled ? "disabled" : "secondary";

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
      setFocused(true);
      onFocus?.(event);
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      setFocused(false);
      onBlur?.(event);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      onValueChange(event.target.value);
    };

    const handleClear = () => {
      const input = inputRef.current;

      if (!input) {
        return;
      }

      onValueChange("");
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
              error && styles.contentError,
            )}
          >
            {isExpanded && label ? (
              <label
                htmlFor={inputId}
                className={joinClasses(
                  styles.label,
                  error && styles.labelError,
                )}
              >
                <Typography
                  as="span"
                  variant="caption1-regular"
                  color={labelColor}
                >
                  {label}
                </Typography>
              </label>
            ) : null}
            <div className={styles.inputRow}>
              {!isExpanded && (placeholder || label) ? (
                <label
                  htmlFor={inputId}
                  className={joinClasses(
                    styles.centerLabel,
                    error && styles.centerLabelError,
                  )}
                >
                  <Typography
                    as="span"
                    variant="subheadline2-semibold"
                    color={labelColor}
                  >
                    {placeholder || label}
                  </Typography>
                </label>
              ) : null}
              <Typography
                as="div"
                variant="subheadline2-semibold"
                color={inputColor}
                className={styles.inputTypography}
              >
                <input
                  {...restProps}
                  id={inputId}
                  ref={inputRef}
                  className={joinClasses(
                    styles.input,
                    disabled && styles.inputDisabled,
                    error && styles.inputError,
                  )}
                  value={value}
                  placeholder={isExpanded ? placeholder : ""}
                  disabled={disabled}
                  aria-invalid={error || undefined}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </Typography>
            </div>
          </div>
          {hasActions ? (
            <div className={styles.actions}>
              {showClearButton ? (
                <IconButton
                  buttonSize="m"
                  iconSize="m"
                  icon={Icon24Icons.Cancel}
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={handleClear}
                  aria-label={clearLabel}
                />
              ) : null}
              {endAdornment ? (
                <div className={styles.rightAction}>{endAdornment}</div>
              ) : null}
            </div>
          ) : null}
        </div>
        {errorText ? (
          <Typography
            as="div"
            variant="caption1-regular"
            color="error"
            className={styles.errorText}
          >
            {errorText}
          </Typography>
        ) : null}
        {assistiveText ? (
          <Typography
            as="div"
            variant="caption1-regular"
            color={assistiveColor}
            className={styles.assistiveText}
          >
            {assistiveText}
          </Typography>
        ) : null}
      </div>
    );
  },
);

InputMaster.displayName = "InputMaster";
