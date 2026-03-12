import type { ChangeEventHandler } from 'react';

import styles from './RadioButton.module.css';

export interface RadioButtonProps {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  name?: string;
  value?: string;
  id?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export const RadioButton = ({
  checked,
  defaultChecked,
  disabled = false,
  name,
  value,
  id,
  onChange,
}: RadioButtonProps) => (
  <label className={styles.radio}>
    <input
      className={styles.input}
      type="radio"
      checked={checked}
      defaultChecked={defaultChecked}
      disabled={disabled}
      name={name}
      value={value}
      id={id}
      onChange={onChange}
    />
    <span className={styles.circle} aria-hidden="true" />
  </label>
);
