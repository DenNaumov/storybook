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
  return (
    <InputMaster
      {...restProps}
      value={value}
      disabled={disabled}
      error={error}
      clearable={clearable}
      placeholder={placeholder}
      className={[styles.container, className].filter(Boolean).join(" ")}
      topContent={({ inputId, hasValue }) =>
        label ? (
          <label
            className={[
              styles.label,
              hasValue ? styles.labelFilled : "",
            ]
              .filter(Boolean)
              .join(" ")}
            htmlFor={inputId}
          >
            {label}
          </label>
        ) : null
      }
      fieldClassName={({ disabled: isDisabled }) =>
        [
          styles.field,
          isDisabled ? styles.disabled : "",
          error ? styles.error : "",
        ]
          .filter(Boolean)
          .join(" ")
      }
      inputRowClassName={styles.inputRow}
      inputClassName={styles.input}
      clearButtonClassName={styles.clear}
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
