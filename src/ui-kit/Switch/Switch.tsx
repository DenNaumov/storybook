import type { ChangeEventHandler } from 'react';

import styles from './Switch.module.css';

export interface SwitchProps {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  invalid?: boolean;
  name?: string;
  id?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export const Switch = ({
  checked,
  defaultChecked,
  disabled = false,
  invalid = false,
  name,
  id,
  onChange,
}: SwitchProps) => {
  const classes = [
    styles.switch,
    disabled ? styles.disabled : '',
    invalid ? styles.invalid : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <label className={classes}>
      <input
        className={styles.input}
        type="checkbox"
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        aria-invalid={invalid || undefined}
        name={name}
        id={id}
        onChange={onChange}
      />
      <span className={styles.track} aria-hidden="true" />
    </label>
  );
};
