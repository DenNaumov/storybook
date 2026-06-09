import React from "react";
import { Icon24Icons, ResizableIcons } from "../icon";
import { IconButton } from "../icon-button/icon-button";
import { BaseInput } from "../base-input/base-input";
import { Typography } from "../typography/typography";
import styles from "./crm-select.module.css";

const joinClasses = (...classNames: Array<string | false | undefined>) =>
  classNames.filter(Boolean).join(" ");

export interface CrmSelectProps {
  label?: string;
  value: string | null;
  onValueChange: (value: string | null) => void;
  onOpen?: () => void;
  error?: boolean;
  errorText?: string;
  disabled?: boolean;
  markerColor?: string;
  showCalculatorIcon?: boolean;
}

export const CrmSelect = React.forwardRef<HTMLInputElement, CrmSelectProps>(
  (
    {
      label = "Label",
      value,
      onValueChange,
      onOpen,
      error = false,
      errorText,
      markerColor,
      showCalculatorIcon = false,
      disabled = false,
    },
    ref,
  ) => {
    const inputValue = value ?? "";
    const hasValue = inputValue.length > 0;
    const showClearButton = hasValue && !disabled;
    const showMarker = Boolean(markerColor && hasValue);
    const handleOpen = () => {
      if (!disabled && onOpen) {
        onOpen();
      }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        handleOpen();
      }
    };

    const handleMouseDown = (event: React.MouseEvent<HTMLInputElement>) => {
      event.preventDefault();
    };

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
      event.currentTarget.blur();
    };

    const handleClear = () => {
      onValueChange(null);
    };

    return (
      <div
        className={joinClasses(
          styles.container,
          showMarker && styles.withMarker,
          disabled && styles.disabled,
        )}
      >
        <BaseInput
          ref={ref}
          role="combobox"
          aria-expanded="false"
          aria-label={label}
          label={label}
          placeholder={label}
          value={inputValue}
          onValueChange={(nextValue) => onValueChange(nextValue)}
          error={error}
          errorText={errorText}
          disabled={disabled}
          readOnly
          tabIndex={-1}
          onClick={handleOpen}
          onMouseDown={handleMouseDown}
          onFocus={handleFocus}
          onKeyDown={handleKeyDown}
          endAdornment={
            <div className={styles.actions}>
              {showClearButton && (
                <IconButton
                  buttonSize="m"
                  iconSize="m"
                  icon={Icon24Icons.Cancel}
                  iconColor="default"
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={handleClear}
                  aria-label="Очистить"
                />
              )}
              {!showClearButton && !disabled && (
                <IconButton
                  buttonSize="m"
                  iconSize="m"
                  icon={Icon24Icons.ChevronRight}
                  iconColor={error ? "error" : "brandMain"}
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={handleOpen}
                  aria-label="Открыть список"
                />
              )}
              {showCalculatorIcon && (
                <IconButton
                  buttonSize="m"
                  iconSize="s"
                  icon={ResizableIcons.Calculate}
                  iconColor={disabled ? "disabled" : "brandMain"}
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={handleOpen}
                  aria-label="Открыть калькулятор"
                  disabled={disabled}
                />
              )}
            </div>
          }
        />
        {showMarker && (
          <div className={styles.markerValue} aria-hidden="true">
            <span
              className={styles.marker}
              style={{ backgroundColor: markerColor }}
            />
            <Typography
              variant="subheadline2-semibold"
              color={disabled ? "disabled" : "primary"}
              className={styles.markerText}
              nowrap
            >
              {inputValue}
            </Typography>
          </div>
        )}
      </div>
    );
  },
);

CrmSelect.displayName = "CrmSelect";
