import type { Meta, StoryObj } from "@storybook/nextjs";
import type { ComponentProps } from "react";
import { useEffect, useState } from "react";

import { InputMaster } from "./input-master";
import styles from "./input-master.stories.module.css";

type InputMasterStoryArgs = Omit<
  ComponentProps<typeof InputMaster>,
  | "value"
  | "onChange"
> & {
  value: string;
  errorText?: string;
  assistiveText?: string;
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
    label: "Label",
    errorText: "Error_text",
    assistiveText: "Assistive_text",
    disabled: false,
    error: false,
    clearable: true,
    showErrorText: false,
    showAssistiveText: true,
  },
  argTypes: {
    onChange: { control: false, table: { disable: true } },
    onFocus: { control: false, table: { disable: true } },
    onBlur: { control: false, table: { disable: true } },
    onClear: { control: false, table: { disable: true } },
    className: { control: false, table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<InputMasterStoryArgs>;

const PlaygroundPreview = ({
  value: initialValue,
  label = "Label",
  errorText = "Error_text",
  assistiveText = "Assistive_text",
  showErrorText,
  showAssistiveText,
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
            label={label}
            value={value}
            onValueChange={setValue}
            errorText={showErrorText ? errorText : undefined}
            assistiveText={showAssistiveText ? assistiveText : undefined}
          />
        </div>
      </div>
    </div>
  );
};

export const Playground: Story = {
  render: (args) => <PlaygroundPreview {...args} />,
};
