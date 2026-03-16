import { useEffect, useRef } from "react";
import type { ChangeEventHandler } from "react";

import styles from "./checkbox.module.css";

export interface CheckboxProps {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  name?: string;
  id?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export const Checkbox = ({
  checked,
  defaultChecked,
  disabled = false,
  indeterminate = false,
  name,
  id,
  onChange,
}: CheckboxProps) => {
  const ref = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  return (
    <label className={styles.checkbox}>
      <input
        ref={ref}
        className={styles.input}
        type="checkbox"
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        aria-checked={indeterminate ? "mixed" : checked ? "true" : "false"}
        name={name}
        id={id}
        onChange={onChange}
      />
      <span className={styles.box} aria-hidden="true" />
    </label>
  );
};
