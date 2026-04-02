import type { ReactNode } from "react";
import { InputMaster } from "../input-master/input-master";

export interface TextAreaProps {
  label?: string;
  placeholder?: string;
  value: string;
  assistiveText?: ReactNode;
  disabled?: boolean;
  error?: boolean;
  clearable?: boolean;
  id?: string;
  name?: string;
  className?: string;
  onValueChange: (value: string) => void;
}

export const TextArea = ({
  label,
  value,
  assistiveText,
  disabled = false,
  error = false,
  clearable = false,
  className,
  ...restProps
}: TextAreaProps) => (
  <InputMaster
    {...restProps}
    label={label}
    value={value}
    assistiveText={assistiveText}
    disabled={disabled}
    error={error}
    clearable={clearable}
    className={className}
    spellCheck={false}
  />
);
