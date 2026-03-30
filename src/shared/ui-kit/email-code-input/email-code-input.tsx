import type { ClipboardEvent } from "react";
import { Typography } from "../typography/typography";
import styles from "./email-code-input.module.css";

const CODE_LENGTH = 6;

const sanitizeDigits = (value: string) =>
  value.replace(/\D/g, "").slice(0, CODE_LENGTH);

export interface EmailCodeInputProps {
  digits: string;
  onDigitsChange: (value: string) => void;
  error?: boolean;
  disable?: boolean;
}

export const EmailCodeInput = ({
  digits,
  onDigitsChange,
  error = false,
  disable = false,
}: EmailCodeInputProps) => {
  const normalizedDigits = sanitizeDigits(digits);

  const handlePaste = (event: ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault();
    onDigitsChange(sanitizeDigits(event.clipboardData.getData("text")));
  };

  return (
    <label
      className={[
        styles.root,
        error ? styles.rootError : "",
        disable ? styles.rootDisabled : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span className={styles.visuallyHidden}>Код из письма</span>
      <input
        className={styles.hiddenInput}
        type="text"
        inputMode="numeric"
        autoComplete="one-time-code"
        value={normalizedDigits}
        maxLength={CODE_LENGTH}
        disabled={disable}
        onPaste={handlePaste}
        onChange={(event) => onDigitsChange(sanitizeDigits(event.target.value))}
      />

      <div
        className={styles.row}
        style={{
          gridTemplateColumns: `repeat(${CODE_LENGTH}, minmax(0, 1fr))`,
        }}
        aria-hidden="true"
      >
        {Array.from({ length: CODE_LENGTH }, (_, index) => {
          const symbol = normalizedDigits[index] ?? "";

          return (
            <div
              key={index}
              className={[
                styles.cell,
                error ? styles.cellError : "",
                disable ? styles.cellDisabled : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <Typography variant="headline-semibold" className={styles.digit}>
                {symbol}
              </Typography>
            </div>
          );
        })}
      </div>
    </label>
  );
};
