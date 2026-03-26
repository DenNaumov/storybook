import React from "react";
import { InputMaster } from "../input-master/input-master";

export interface TextFieldProps
  extends Omit<
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

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      label = "Label",
      value,
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
      error={error}
      clearable={clearable}
      className={className}
      clearAriaLabel={`Clear ${label}`}
      spellCheck={false}
    />
  ),
);

TextField.displayName = "TextField";
