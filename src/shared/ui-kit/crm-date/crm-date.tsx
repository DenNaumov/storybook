import React from "react";
import { Icon24Icons, ResizableIcons } from "../icon";
import { IconButton } from "../icon-button/icon-button";
import { InputMaster } from "../input-master/input-master";

export interface CrmDateProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "defaultValue" | "value" | "onChange"
> {
  label?: string;
  placeholder?: string;
  value: string;
  onValueChange: (value: string) => void;
  onOpen?: () => void;
  error?: boolean;
  errorText?: string;
  showCalendarIcon?: boolean;
  showDictionaryIcon?: boolean;
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
      showDictionaryIcon = false,
      disabled = false,
      className,
      onKeyDown,
      "aria-label": ariaLabel,
      ...restProps
    },
    ref,
  ) => {
    const handleOpen = () => {
      if (!disabled) {
        onOpen?.();
      }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      onKeyDown?.(event);

      if ((event.key === "Enter" || event.key === " ") && onOpen) {
        event.preventDefault();
        handleOpen();
      }
    };

    const hasActions = showCalendarIcon || showDictionaryIcon;

    return (
      <InputMaster
        {...restProps}
        ref={ref}
        label={label}
        placeholder={placeholder}
        value={value}
        onValueChange={onValueChange}
        error={error}
        errorText={errorText}
        disabled={disabled}
        className={className}
        inputMode="numeric"
        aria-label={ariaLabel ?? label}
        onKeyDown={handleKeyDown}
        endAdornment={
          hasActions ? (
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
              {showDictionaryIcon && (
                <IconButton
                  buttonSize="m"
                  iconSize="s"
                  icon={ResizableIcons.Calculate}
                  iconColor={disabled ? "disabled" : "default"}
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={handleOpen}
                  aria-label="Открыть справочник"
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
