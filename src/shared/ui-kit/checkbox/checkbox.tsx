import { useEffect, useRef } from "react";
import type { ChangeEventHandler } from "react";

import styles from "./checkbox.module.css";

export interface CheckboxProps {
  className?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  name?: string;
  id?: string;
  ariaLabel?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export const Checkbox = ({
  className,
  checked,
  defaultChecked,
  disabled = false,
  indeterminate = false,
  name,
  id,
  ariaLabel,
  onChange,
}: CheckboxProps) => {
  const ref = useRef<HTMLInputElement | null>(null);
  const classes = [styles.checkbox, className].filter(Boolean).join(" ");

  useEffect(() => {
    if (ref.current) {
      ref.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  return (
    <span className={classes}>
      <input
        ref={ref}
        className={styles.input}
        type="checkbox"
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        aria-checked={indeterminate ? "mixed" : checked ? "true" : "false"}
        aria-label={ariaLabel}
        name={name}
        id={id}
        onChange={onChange}
      />
      <span className={styles.box} aria-hidden="true" />
    </span>
  );
};
