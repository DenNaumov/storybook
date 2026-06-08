import React, { useState } from "react";
import { Icon20Icons, Icon24Icons } from "../icon";
import styles from "./search.module.css";

export interface SearchProps {
  placeholder?: string;
  value: string;
  onValueChange: (value: string) => void;
  disabled?: boolean;
}

export const Search = ({
  placeholder = "Поиск",
  value,
  onValueChange,
  disabled = false,
}: SearchProps) => {
  const [focused, setFocused] = useState(false);
  const hasValue = value.length > 0;
  const iconColor = disabled ? "disabled" : focused ? "brandMain" : "default";

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onValueChange(event.target.value);
  };

  const handleClear = () => {
    onValueChange("");
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.field} ${disabled ? styles.fieldDisabled : ""}`}>
        <Icon20Icons.Search width={20} height={20} color={iconColor} />
        <input
          className={styles.input}
          type="search"
          value={value}
          placeholder={focused ? "" : placeholder}
          disabled={disabled}
          autoComplete="off"
          aria-label={placeholder}
          spellCheck={false}
          onChange={handleChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        {hasValue && !disabled && (
          <button
            type="button"
            className={styles.clearButton}
            onClick={handleClear}
            aria-label="Очистить"
          >
            <Icon24Icons.Cancel width={24} height={24} color="default" />
          </button>
        )}
      </div>
    </div>
  );
};

Search.displayName = "Search";
