import { BaseInput } from "../base-input/base-input";

export interface TextAreaProps {
  label?: string;
  placeholder?: string;
  value: string;
  assistiveText?: string;
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
  <BaseInput
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
