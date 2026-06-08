import React from "react";
import { BaseInput } from "../base-input/base-input";

export interface TextLineProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "defaultValue" | "value" | "onChange"
> {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  error?: boolean;
  clearable?: boolean;
  onClear?: () => void;
}

export const TextLine = React.forwardRef<HTMLInputElement, TextLineProps>(
  (
    {
      label = "Label",
      value,
      onChange,
      error = false,
      className,
      clearable = true,
      ...restProps
    },
    ref,
  ) => (
    <BaseInput
      {...restProps}
      ref={ref}
      label={label}
      value={value}
      onValueChange={onChange}
      error={error}
      clearable={clearable}
      className={className}
      spellCheck={false}
    />
  ),
);

TextLine.displayName = "TextLine";
