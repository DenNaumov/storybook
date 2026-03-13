import type { KeyboardEvent, ReactNode } from 'react';
import { useEffect, useId, useMemo, useRef, useState } from 'react';

import styles from './text-line.module.css';

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
  const [internalValue, setInternalValue] = useState(defaultValue ?? '');
  const displayValue = isControlled ? value ?? '' : internalValue;
  const editableRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (editableRef.current && editableRef.current.innerText !== displayValue) {
      editableRef.current.innerText = displayValue;
    }
  }, [displayValue]);

  const hasValue = displayValue.length > 0;

  const classes = useMemo(
    () =>
      [
        styles.field,
        disabled ? styles.disabled : '',
        readOnly ? styles.readOnly : '',
        error ? styles.error : '',
        hasValue ? styles.filled : '',
      ]
        .filter(Boolean)
        .join(' '),
    [disabled, readOnly, error, hasValue],
  );

  const handleInput = () => {
    const next = editableRef.current?.innerText ?? '';
    if (!isControlled) {
      setInternalValue(next);
    }
    onChange?.(next);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (readOnly || disabled) {
      event.preventDefault();
    }
  };

  const handleClear = () => {
    if (disabled || readOnly) return;
    if (!isControlled) {
      setInternalValue('');
    }
    onChange?.('');
    if (editableRef.current) {
      editableRef.current.innerText = '';
      editableRef.current.focus();
    }
  };

  return (
    <div className={styles.wrapper}>
      {label ? (
        <label className={styles.label} htmlFor={inputId}>
          {label}
        </label>
      ) : null}
      <div className={classes} data-has-value={hasValue}>
        <div
          id={inputId}
          ref={editableRef}
          className={styles.input}
          role="textbox"
          aria-multiline="true"
          aria-disabled={disabled || undefined}
          aria-readonly={readOnly || undefined}
          aria-invalid={error || undefined}
          data-placeholder={placeholder}
          contentEditable={!disabled && !readOnly}
          spellCheck={false}
          onInput={handleInput}
          onKeyDown={handleKeyDown}
          suppressContentEditableWarning
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
        {name ? <input type="hidden" name={name} value={displayValue} /> : null}
      </div>
      {helperText ? (
        <div className={styles.helper} data-error={error ? 'true' : 'false'}>
          {helperText}
        </div>
      ) : null}
    </div>
  );
};
