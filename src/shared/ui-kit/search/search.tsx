import React, { useId, useImperativeHandle, useRef, useState } from "react";
import { Icon20Icons, Icon24Icons } from "../icon";
import styles from "./search.module.css";

const joinClasses = (...classNames: Array<string | false | undefined>) =>
  classNames.filter(Boolean).join(" ");

export interface SearchProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "defaultValue" | "value" | "onChange" | "type"
> {
  value: string;
  onChange: (value: string) => void;
  clearable?: boolean;
  onClear?: () => void;
}

export const Search = React.forwardRef<HTMLInputElement, SearchProps>(
  (
    {
      value,
      onChange,
      clearable = true,
      onClear,
      placeholder = "Поиск",
      className,
      disabled = false,
      autoComplete = "off",
      onFocus,
      onBlur,
      "aria-label": ariaLabel,
      ...restProps
    },
    ref,
  ) => {
    const generatedId = useId();
    const inputId = restProps.id ?? generatedId;
    const inputRef = useRef<HTMLInputElement>(null);
    const [focused, setFocused] = useState(false);
    const hasValue = value.length > 0;
    const showPlaceholder = !focused && !hasValue;
    const showClearButton = clearable && hasValue && !disabled;
    const iconColor = disabled ? "disabled" : focused ? "brandMain" : "default";

    useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

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
          )}
        >
          <Icon20Icons.Search width={20} height={20} color={iconColor} />
          <div className={styles.inputWrap}>
            {showPlaceholder && (
              <label htmlFor={inputId} className={styles.placeholder}>
                {placeholder}
              </label>
            )}
            <input
              {...restProps}
              id={inputId}
              ref={inputRef}
              className={styles.input}
              type="search"
              value={value}
              disabled={disabled}
              autoComplete={autoComplete}
              aria-label={ariaLabel ?? placeholder}
              spellCheck={false}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>
          {showClearButton && (
            <button
              type="button"
              className={styles.clearButton}
              onMouseDown={(event) => event.preventDefault()}
              onClick={handleClear}
              aria-label="Очистить"
            >
              <Icon24Icons.Cancel width={24} height={24} color="default" />
            </button>
          )}
        </div>
      </div>
    );
  },
);

Search.displayName = "Search";
