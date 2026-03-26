import React, {
  useId,
  useImperativeHandle,
  useRef,
} from "react";
import { IconButton } from "../icon-button/icon-button";
import { Typography } from "../typography/typography";
import styles from "./text-field.module.css";

export interface TextFieldProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "defaultValue" | "value" | "onChange"
  > {
  label?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  clearable?: boolean;
  onClear?: () => void;
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
      clearable = true,
      onClear,
      id,
      ...restProps
    },
    ref,
  ) => {
    const inputId = useId();
    const inputRef = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = React.useState(false);

    useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

    const hasValue = value.length > 0;
    const showFloatingLabel = isFocused || hasValue || disabled;
    const showClearButton = clearable && hasValue && !disabled;
    const displayPlaceholder = placeholder || label;

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      onFocus?.(event);
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      onBlur?.(event);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(event);
    };

    const handleClear = () => {
      const input = inputRef.current;

      if (!input) {
        return;
      }

      const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
        HTMLInputElement.prototype,
        "value",
      )?.set;

      nativeInputValueSetter?.call(input, "");
      input.dispatchEvent(new Event("input", { bubbles: true }));
      input.focus();
      onClear?.();
    };

    return (
      <div className={[styles.wrapper, className].filter(Boolean).join(" ")}>
        <div
          className={[
            styles.field,
            showFloatingLabel ? styles.fieldExpanded : styles.fieldDefault,
            disabled ? styles.disabled : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <div
            className={[
              styles.content,
              !showFloatingLabel ? styles.contentCentered : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {showFloatingLabel ? (
              <label htmlFor={id ?? inputId} className={styles.label}>
                <Typography
                  variant="caption1-regular"
                  color="primary"
                >
                  {label}
                </Typography>
              </label>
            ) : null}

            <div className={styles.inputRow}>
              {!showFloatingLabel && (
                <label htmlFor={id ?? inputId} className={styles.centerPlaceholder}>
                  <Typography
                    variant="text-semibold"
                    color="var(--theme-text-secondary)"
                  >
                    {displayPlaceholder}
                  </Typography>
                </label>
              )}

              <input
                {...restProps}
                id={id ?? inputId}
                ref={inputRef}
                className={styles.input}
                value={value}
                placeholder={showFloatingLabel ? placeholder : ""}
                disabled={disabled}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                spellCheck={false}
              />

              {showClearButton && (
                <IconButton
                  buttonSize="m"
                  iconSize="m"
                  icon="Cancel"
                  className={styles.clearButton}
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={handleClear}
                  aria-label={`Clear ${label}`}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  },
);

TextField.displayName = "TextField";
