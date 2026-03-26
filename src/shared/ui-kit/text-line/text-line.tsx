import type { ChangeEvent, ReactNode } from "react";
import { useId, useMemo, useRef } from "react";

import { IconButton } from "../icon-button/icon-button";
import styles from "./text-line.module.css";

export interface TextLineProps {
  label?: string;
  placeholder?: string;
  value: string;
  helperText?: ReactNode;
  disabled?: boolean;
  readOnly?: boolean;
  error?: boolean;
  clearable?: boolean;
  id?: string;
  name?: string;
  onChange: (value: string) => void;
}

export const TextLine = ({
  label,
  placeholder,
  value,
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
  const inputRef = useRef<HTMLInputElement | null>(null);

  const hasValue = value.length > 0;

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
    onChange(event.target.value);
  };

  const handleClear = () => {
    if (disabled || readOnly) return;
    onChange("");
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
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          aria-invalid={error || undefined}
          spellCheck={false}
          onChange={handleChange}
        />
        {clearable && hasValue ? (
          <IconButton
            className={styles.clear}
            buttonSize="m"
            iconSize="m"
            icon="Cancel"
            aria-label="Очистить"
            onClick={handleClear}
            onMouseDown={(event) => event.preventDefault()}
            disabled={disabled || readOnly}
          />
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
