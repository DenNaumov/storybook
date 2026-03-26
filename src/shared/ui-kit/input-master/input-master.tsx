import React, {
  useId,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { IconButton } from "../icon-button/icon-button";

export interface InputMasterState {
  inputId: string;
  hasValue: boolean;
  disabled: boolean;
  error: boolean;
  focused: boolean;
}

type SlotClassName = string | ((state: InputMasterState) => string);

const resolveClassName = (
  className: SlotClassName | undefined,
  state: InputMasterState,
) => (typeof className === "function" ? className(state) : className);

type ResolvedInputProps = Partial<
  React.InputHTMLAttributes<HTMLInputElement>
>;

export interface InputMasterProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "defaultValue" | "value" | "onChange"
  > {
  value: string;
  onChange: (value: string) => void;
  error?: boolean;
  clearable?: boolean;
  onClear?: () => void;
  clearAriaLabel?: string;
  topContent?: (state: InputMasterState) => React.ReactNode;
  innerContent?: (state: InputMasterState) => React.ReactNode;
  beforeInput?: (state: InputMasterState) => React.ReactNode;
  afterInput?: (state: InputMasterState) => React.ReactNode;
  errorContent?: (state: InputMasterState) => React.ReactNode;
  assistiveContent?: (state: InputMasterState) => React.ReactNode;
  inputProps?: (state: InputMasterState) => ResolvedInputProps;
  className?: string;
  fieldClassName?: SlotClassName;
  contentClassName?: SlotClassName;
  inputRowClassName?: SlotClassName;
  inputClassName?: SlotClassName;
  clearButtonClassName?: SlotClassName;
}

export const InputMaster = React.forwardRef<HTMLInputElement, InputMasterProps>(
  (
    {
      value,
      onChange,
      error = false,
      disabled = false,
      clearable = false,
      onClear,
      clearAriaLabel = "Clear input",
      topContent,
      innerContent,
      beforeInput,
      afterInput,
      errorContent,
      assistiveContent,
      inputProps,
      className,
      fieldClassName,
      contentClassName,
      inputRowClassName,
      inputClassName,
      clearButtonClassName,
      id,
      onFocus,
      onBlur,
      ...restProps
    },
    ref,
  ) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const inputRef = useRef<HTMLInputElement>(null);
    const [focused, setFocused] = useState(false);

    useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

    const state: InputMasterState = {
      inputId,
      hasValue: value.length > 0,
      disabled,
      error,
      focused,
    };
    const showClearButton = clearable && state.hasValue && !disabled;

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
      setFocused(true);
      onFocus?.(event);
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      setFocused(false);
      onBlur?.(event);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.value);
    };

    const handleClear = () => {
      const input = inputRef.current;

      if (!input) {
        return;
      }

      onChange("");
      input.focus();
      onClear?.();
    };

    const resolvedFieldClassName = resolveClassName(fieldClassName, state);
    const resolvedContentClassName = resolveClassName(contentClassName, state);
    const resolvedInputRowClassName = resolveClassName(inputRowClassName, state);
    const resolvedInputClassName = resolveClassName(inputClassName, state);
    const resolvedClearButtonClassName = resolveClassName(
      clearButtonClassName,
      state,
    );
    const resolvedInputProps = inputProps?.(state);

    const inputRow = (
      <div className={resolvedInputRowClassName}>
        {beforeInput?.(state)}
        <input
          {...restProps}
          {...resolvedInputProps}
          id={inputId}
          ref={inputRef}
          className={resolvedInputClassName}
          value={value}
          disabled={disabled}
          aria-invalid={error || undefined}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {afterInput?.(state)}
        {showClearButton ? (
          <IconButton
            buttonSize="m"
            iconSize="m"
            icon="Cancel"
            className={resolvedClearButtonClassName}
            onMouseDown={(event) => event.preventDefault()}
            onClick={handleClear}
            aria-label={clearAriaLabel}
          />
        ) : null}
      </div>
    );

    return (
      <div className={className}>
        {topContent?.(state)}
        <div className={resolvedFieldClassName}>
          {resolvedContentClassName ? (
            <div className={resolvedContentClassName}>
              {innerContent?.(state)}
              {inputRow}
            </div>
          ) : (
            <>
              {innerContent?.(state)}
              {inputRow}
            </>
          )}
        </div>
        {errorContent?.(state)}
        {assistiveContent?.(state)}
      </div>
    );
  },
);

InputMaster.displayName = "InputMaster";
