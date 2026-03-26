import type { Meta, StoryObj } from "@storybook/nextjs";
import type { ComponentProps } from "react";
import { useEffect, useState } from "react";

import { InputMaster } from "./input-master";
import styles from "./input-master.stories.module.css";

type InputMasterStoryArgs = Omit<
  ComponentProps<typeof InputMaster>,
  | "value"
  | "onChange"
  | "topContent"
  | "innerContent"
  | "beforeInput"
  | "afterInput"
  | "errorContent"
  | "assistiveContent"
  | "fieldClassName"
  | "contentClassName"
  | "inputRowClassName"
  | "inputClassName"
  | "clearButtonClassName"
  | "inputProps"
> & {
  value: string;
  innerLabel?: string;
  errorText?: string;
  assistiveText?: string;
  showInnerLabel: boolean;
  showPrefix: boolean;
  showSuffix: boolean;
  showErrorText: boolean;
  showAssistiveText: boolean;
};

const meta: Meta<InputMasterStoryArgs> = {
  title: "UI Kit/Inputs/InputMaster",
  component: InputMaster,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    value: "Value",
    placeholder: "Placeholder",
    innerLabel: "Label",
    errorText: "Error_text",
    assistiveText: "Assistive_text",
    disabled: false,
    error: false,
    clearable: true,
    showInnerLabel: true,
    showPrefix: false,
    showSuffix: false,
    showErrorText: false,
    showAssistiveText: true,
  },
  argTypes: {
    onChange: { control: false, table: { disable: true } },
    onFocus: { control: false, table: { disable: true } },
    onBlur: { control: false, table: { disable: true } },
    onClear: { control: false, table: { disable: true } },
    topContent: { control: false, table: { disable: true } },
    innerContent: { control: false, table: { disable: true } },
    beforeInput: { control: false, table: { disable: true } },
    afterInput: { control: false, table: { disable: true } },
    errorContent: { control: false, table: { disable: true } },
    assistiveContent: { control: false, table: { disable: true } },
    fieldClassName: { control: false, table: { disable: true } },
    contentClassName: { control: false, table: { disable: true } },
    inputRowClassName: { control: false, table: { disable: true } },
    inputClassName: { control: false, table: { disable: true } },
    clearButtonClassName: { control: false, table: { disable: true } },
    inputProps: { control: false, table: { disable: true } },
    className: { control: false, table: { disable: true } },
    clearAriaLabel: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<InputMasterStoryArgs>;

const PlaygroundPreview = ({
  value: initialValue,
  innerLabel = "Label",
  errorText = "Error_text",
  assistiveText = "Assistive_text",
  showInnerLabel,
  showPrefix,
  showSuffix,
  showErrorText,
  showAssistiveText,
  error = false,
  disabled = false,
  ...args
}: InputMasterStoryArgs) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return (
    <div className={styles.stage}>
      <div className={styles.card}>
        <div className={styles.title}>InputMaster</div>
        <div className={styles.subtitle}>
          Базовый конструктор поля ввода со слотами для label, assistive text,
          adornments и прочих фич.
        </div>

        <div className={styles.preview}>
          <InputMaster
            {...args}
            value={value}
            onChange={setValue}
            disabled={disabled}
            error={error}
            className={styles.container}
            fieldClassName={({ disabled: isDisabled, error: isError }) =>
              [
                styles.field,
                isDisabled ? styles.fieldDisabled : "",
                isError ? styles.fieldError : "",
              ]
                .filter(Boolean)
                .join(" ")
            }
            contentClassName={styles.content}
            innerContent={({ inputId }) =>
              showInnerLabel ? (
                <label className={styles.innerLabel} htmlFor={inputId}>
                  {innerLabel}
                </label>
              ) : null
            }
            beforeInput={() =>
              showPrefix ? <span className={styles.affix}>+7</span> : null
            }
            afterInput={() =>
              showSuffix ? <span className={styles.affix}>RU</span> : null
            }
            inputRowClassName={styles.inputRow}
            inputClassName={({ disabled: isDisabled, error: isError }) =>
              [
                styles.input,
                isDisabled ? styles.inputDisabled : "",
                isError ? styles.inputError : "",
              ]
                .filter(Boolean)
                .join(" ")
            }
            clearButtonClassName={styles.clear}
            errorContent={() =>
              showErrorText ? (
                <div
                  className={[
                    styles.errorText,
                    error ? styles.errorTextVisible : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  {errorText}
                </div>
              ) : null
            }
            assistiveContent={() =>
              showAssistiveText ? (
                <div
                  className={[
                    styles.assistiveText,
                    error ? styles.assistiveTextMuted : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  {assistiveText}
                </div>
              ) : null
            }
          />
        </div>
      </div>
    </div>
  );
};

export const Playground: Story = {
  render: (args) => <PlaygroundPreview {...args} />,
};
