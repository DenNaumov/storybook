import React from "react";
import { Icon24Icons, ResizableIcons } from "../icon";
import { IconButton } from "../icon-button/icon-button";
import { BaseInput } from "../base-input/base-input";

export interface CrmDateProps {
  label?: string;
  placeholder?: string;
  value: string;
  onValueChange: (value: string) => void;
  onOpen?: () => void;
  error?: boolean;
  errorText?: string;
  disabled?: boolean;
  showCalendarIcon?: boolean;
  showCalculatorIcon?: boolean;
}

export const CrmDate = React.forwardRef<HTMLInputElement, CrmDateProps>(
  (
    {
      label = "Label",
      placeholder = "Label_placeholder",
      value,
      onValueChange,
      onOpen,
      error = false,
      errorText,
      showCalendarIcon = true,
      showCalculatorIcon = false,
      disabled = false,
    },
    ref,
  ) => {
    const handleOpen = () => {
      if (!disabled) {
        onOpen?.();
      }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if ((event.key === "Enter" || event.key === " ") && onOpen) {
        event.preventDefault();
        handleOpen();
      }
    };

    return (
      <BaseInput
        ref={ref}
        label={label}
        placeholder={placeholder}
        value={value}
        onValueChange={onValueChange}
        error={error}
        errorText={errorText}
        disabled={disabled}
        inputMode="numeric"
        aria-label={label}
        onKeyDown={handleKeyDown}
        endAdornment={
          showCalendarIcon || showCalculatorIcon ? (
            <>
              {showCalendarIcon && (
                <IconButton
                  buttonSize="m"
                  iconSize="m"
                  icon={Icon24Icons.Calendar}
                  iconColor={disabled ? "disabled" : "brandMain"}
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={handleOpen}
                  aria-label="Открыть календарь"
                  disabled={disabled}
                />
              )}
              {showCalculatorIcon && (
                <IconButton
                  buttonSize="m"
                  iconSize="s"
                  icon={ResizableIcons.Calculate}
                  iconColor={disabled ? "disabled" : "default"}
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={handleOpen}
                  aria-label="Открыть калькулятор"
                  disabled={disabled}
                />
              )}
            </>
          ) : null
        }
      />
    );
  },
);

CrmDate.displayName = "CrmDate";
