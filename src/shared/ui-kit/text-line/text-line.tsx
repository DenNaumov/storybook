import type { ReactNode } from "react";
import { InputMaster } from "../input-master/input-master";
import styles from "./text-line.module.css";

export interface TextLineProps {
  label?: string;
  placeholder?: string;
  value: string;
  assistiveText?: ReactNode;
  disabled?: boolean;
  error?: boolean;
  clearable?: boolean;
  id?: string;
  name?: string;
  className?: string;
  onChange: (value: string) => void;
}

export const TextLine = ({
  label,
  placeholder,
  value,
  assistiveText,
  disabled = false,
  error = false,
  clearable = false,
  className,
  ...restProps
}: TextLineProps) => {
  const displayPlaceholder = placeholder || label;

  return (
    <InputMaster
      {...restProps}
      value={value}
      disabled={disabled}
      error={error}
      clearable={clearable}
      className={[styles.container, className].filter(Boolean).join(" ")}
      fieldClassName={({ focused, hasValue, disabled: isDisabled }) =>
        [
          styles.field,
          focused || hasValue || isDisabled
            ? styles.fieldExpanded
            : styles.fieldDefault,
          isDisabled ? styles.disabled : "",
          error ? styles.error : "",
        ]
          .filter(Boolean)
          .join(" ")
      }
      contentClassName={({ focused, hasValue, disabled: isDisabled }) =>
        [
          styles.content,
          !(focused || hasValue || isDisabled) ? styles.contentCentered : "",
        ]
          .filter(Boolean)
          .join(" ")
      }
      innerContent={({ inputId, focused, hasValue, disabled: isDisabled }) =>
        focused || hasValue || isDisabled ? (
          <label className={styles.label} htmlFor={inputId}>
            {label}
          </label>
        ) : null
      }
      beforeInput={({ inputId, focused, hasValue, disabled: isDisabled }) =>
        !(focused || hasValue || isDisabled) ? (
          <label className={styles.centerPlaceholder} htmlFor={inputId}>
            {displayPlaceholder}
          </label>
        ) : null
      }
      inputRowClassName={styles.inputRow}
      inputClassName={styles.input}
      clearButtonClassName={styles.clear}
      inputProps={({ focused, hasValue, disabled: isDisabled }) => ({
        placeholder:
          focused || hasValue || isDisabled ? placeholder : "",
      })}
      assistiveContent={() =>
        assistiveText ? (
          <div className={styles.helper} data-error={error ? "true" : "false"}>
            {assistiveText}
          </div>
        ) : null
      }
      clearAriaLabel={label ? `Очистить ${label}` : "Очистить"}
      spellCheck={false}
    />
  );
};
