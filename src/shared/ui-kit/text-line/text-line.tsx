import type { ReactNode } from "react";
import { InputMaster } from "../input-master/input-master";

export interface TextLineProps {
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
  onChange: (value: string) => void;
}

export const TextLine = ({
  label,
  placeholder,
  value,
  assistiveText,
  disabled = false,
  error = false,
  clearable = false,
  className,
  ...restProps
}: TextLineProps) => (
  <InputMaster
    {...restProps}
    label={label}
    value={value}
    assistiveText={assistiveText}
    disabled={disabled}
    error={error}
    clearable={clearable}
    className={className}
    clearAriaLabel={label ? `Очистить ${label}` : "Очистить"}
    spellCheck={false}
  />
);
