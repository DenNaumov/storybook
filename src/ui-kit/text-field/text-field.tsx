import React from 'react';
import { Typography } from '../typography/typography';
import styles from './text-field.module.css';

export interface TextFieldProps {
  label?: string;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextField: React.FC<TextFieldProps> = ({
  label = 'Label',
  value,
  placeholder,
  disabled = true,
  onChange,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.settings} ${disabled ? styles.disabled : ''}`}>
        <div className={styles.bg}>
          <div className={styles.textContainer}>
            <Typography
              variant="caption1-regular"
              color="var(--theme-text-secondary)"
              as="label"
              className={styles.label}
            >
              {label}
            </Typography>
            <div className={styles.textZone}>
              <Typography
                as="div"
                variant="subheadline2-semibold"
                color="var(--theme-text-primary)"
                className={styles.bodyText}
              >
                <input
                  className={styles.input}
                  value={value}
                  placeholder={placeholder}
                  disabled={disabled}
                  onChange={onChange}
                  spellCheck={false}
                />
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
