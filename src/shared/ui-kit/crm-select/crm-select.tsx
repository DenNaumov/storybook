import React from "react";
import { Icon24Icons, ResizableIcons } from "../icon";
import { IconButton } from "../icon-button/icon-button";
import { InputMaster } from "../input-master/input-master";
import styles from "./crm-select.module.css";

const joinClasses = (...classNames: Array<string | false | undefined>) =>
  classNames.filter(Boolean).join(" ");

export interface CrmSelectProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "defaultValue" | "value" | "onChange" | "readOnly"
> {
  label?: string;
  placeholder?: string;
  value: string;
  onValueChange?: (value: string) => void;
  onOpen?: () => void;
  clearable?: boolean;
  onClear?: () => void;
  error?: boolean;
  errorText?: string;
  markerColor?: string;
  showDictionaryIcon?: boolean;
}

export const CrmSelect = React.forwardRef<HTMLInputElement, CrmSelectProps>(
  (
    {
      label = "Label",
      placeholder = "Label_placeholder",
      value,
      onValueChange,
      onOpen,
      clearable = true,
      onClear,
      error = false,
      errorText,
      markerColor,
      showDictionaryIcon = false,
      disabled = false,
      className,
      onClick,
      onKeyDown,
      "aria-label": ariaLabel,
      ...restProps
    },
    ref,
  ) => {
    const hasValue = value.length > 0;
    const showClearButton = clearable && hasValue && !disabled;
    const showMarker = Boolean(markerColor && hasValue);

    const handleOpen = () => {
      if (!disabled) {
        onOpen?.();
      }
    };

    const handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
      onClick?.(event);
      handleOpen();
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      onKeyDown?.(event);

      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        handleOpen();
      }
    };

    const handleClear = () => {
      onValueChange?.("");
      onClear?.();
    };

    return (
      <div
        className={joinClasses(
          styles.container,
          showMarker && styles.withMarker,
          disabled && styles.disabled,
          className,
        )}
      >
        <InputMaster
          {...restProps}
          ref={ref}
          role="combobox"
          aria-expanded="false"
          aria-label={ariaLabel ?? label}
          label={label}
          placeholder={placeholder}
          value={value}
          onValueChange={onValueChange ?? (() => undefined)}
          error={error}
          errorText={errorText}
          disabled={disabled}
          readOnly
          onClick={handleClick}
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
              {showDictionaryIcon && (
                <IconButton
                  buttonSize="m"
                  iconSize="s"
                  icon={ResizableIcons.Calculate}
                  iconColor={disabled ? "disabled" : "brandMain"}
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={handleOpen}
                  aria-label="Открыть справочник"
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
            <span className={styles.markerText}>{value}</span>
          </div>
        )}
      </div>
    );
  },
);

CrmSelect.displayName = "CrmSelect";
