import React from 'react';
import styles from './text-field.module.css';

export interface TextFieldProps {
  label?: string;
  value?: string;
  disabled?: boolean;
}

export const TextField: React.FC<TextFieldProps> = ({
  label = 'Label',
  value = 'Value',
  disabled = true, // Default to true as per the 'DisabledFilled' state request
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.settings} ${disabled ? styles.disabled : ''}`}>
        <div className={styles.bg}>
          <div className={styles.textContainer}>
            <div className={styles.label}>{label}</div>
            <div className={styles.textZone}>
              <div className={styles.bodyText}>
                <span className={styles.input}>{value}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
