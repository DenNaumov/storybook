import type { ChangeEvent, ReactNode } from "react";
import { useId, useMemo, useRef, useState } from "react";

import styles from "./text-line.module.css";

export interface TextLineProps {
  label?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  helperText?: ReactNode;
  disabled?: boolean;
  readOnly?: boolean;
  error?: boolean;
  clearable?: boolean;
  id?: string;
  name?: string;
  onChange?: (value: string) => void;
}

export const TextLine = ({
  label,
  placeholder,
  value,
  defaultValue,
  helperText,
  disabled = false,
  readOnly = false,
  error = false,
  clearable = false,
  id,
  name,
  onChange,
}: TextLineProps) => {
  const autoId = useId();
  const inputId = id ?? autoId;
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState(defaultValue ?? "");
  const displayValue = isControlled ? (value ?? "") : internalValue;
  const inputRef = useRef<HTMLInputElement | null>(null);

  const hasValue = displayValue.length > 0;

  const classes = useMemo(
    () =>
      [
        styles.field,
        disabled ? styles.disabled : "",
        readOnly ? styles.readOnly : "",
        error ? styles.error : "",
        hasValue ? styles.filled : "",
      ]
        .filter(Boolean)
        .join(" "),
    [disabled, readOnly, error, hasValue],
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const next = event.target.value;
    if (!isControlled) {
      setInternalValue(next);
    }
    onChange?.(next);
  };

  const handleClear = () => {
    if (disabled || readOnly) return;
    if (!isControlled) {
      setInternalValue("");
    }
    onChange?.("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className={styles.container}>
      {label ? (
        <label className={styles.label} htmlFor={inputId}>
          {label}
        </label>
      ) : null}
      <div className={classes} data-has-value={hasValue}>
        <input
          id={inputId}
          ref={inputRef}
          className={styles.input}
          type="text"
          name={name}
          value={displayValue}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          aria-invalid={error || undefined}
          spellCheck={false}
          onChange={handleChange}
        />
        {clearable && hasValue ? (
          <button
            className={styles.clear}
            type="button"
            aria-label="Очистить"
            onClick={handleClear}
            disabled={disabled || readOnly}
          >
            <span />
          </button>
        ) : null}
      </div>
      {helperText ? (
        <div className={styles.helper} data-error={error ? "true" : "false"}>
          {helperText}
        </div>
      ) : null}
    </div>
  );
};
