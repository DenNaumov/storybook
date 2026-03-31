import React from "react";
import { InputMaster } from "../input-master/input-master";

export interface TextLineProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "defaultValue" | "value" | "onChange"
> {
  label?: string;
  value: string;
  onValueChange: (value: string) => void;
  error?: boolean;
  clearable?: boolean;
  onClear?: () => void;
}

export const TextLine = React.forwardRef<HTMLInputElement, TextLineProps>(
  (
    {
      label = "Label",
      value,
      onValueChange,
      error = false,
      className,
      clearable = true,
      ...restProps
    },
    ref,
  ) => (
    <InputMaster
      {...restProps}
      ref={ref}
      label={label}
      value={value}
      onValueChange={onValueChange}
      error={error}
      clearable={clearable}
      className={className}
      spellCheck={false}
    />
  ),
);

TextLine.displayName = "TextLine";
