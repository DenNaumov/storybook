import { useState } from "react";
import type { ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs";
import { StoryPreviewFrame } from "../story-preview/story-preview-frame";
import { BaseInput } from "./base-input";
import styles from "./base-input.stories.module.css";

type BaseInputStoryArgs = ComponentProps<typeof BaseInput>;

const meta: Meta<BaseInputStoryArgs> = {
  title: "UI Kit/Inputs/BaseInput",
  component: BaseInput,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    label: "Label",
    placeholder: "Label_placeholder",
    value: "",
    disabled: false,
    error: false,
    clearable: true,
    assistiveText: "Assistive_text",
    errorText: "Error_text",
  },
  argTypes: {
    onValueChange: { control: false, table: { disable: true } },
    onFocus: { control: false, table: { disable: true } },
    onBlur: { control: false, table: { disable: true } },
    onClear: { control: false, table: { disable: true } },
    className: { control: false, table: { disable: true } },
  },
};

export default meta;

type Story = StoryObj<BaseInputStoryArgs>;

const BaseInputExample = ({
  initialValue = "",
  ...props
}: Omit<BaseInputStoryArgs, "value" | "onValueChange"> & {
  initialValue?: string;
}) => {
  const [value, setValue] = useState(initialValue);

  return <BaseInput {...props} value={value} onValueChange={setValue} />;
};

export const Playground: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value);

    return (
      <div className={styles.stage}>
        <div className={styles.componentFrame}>
          <BaseInput {...args} value={value} onValueChange={setValue} />
        </div>
      </div>
    );
  },
};

export const Showcase: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className={styles.stage}>
      <StoryPreviewFrame
        className={styles.previewFrame}
        title="BaseInput"
        description="Базовое поле ввода с плавающим лейблом и состояниями"
      >
        <div className={styles.selectionFrame}>
          <div className={styles.stack}>
            <BaseInputExample
              label="Label"
              placeholder="Label_placeholder"
              assistiveText="Assistive_text"
            />
            <BaseInputExample
              label="Label"
              placeholder="Label_placeholder"
              initialValue="Value"
              clearable
              assistiveText="Assistive_text"
            />
            <BaseInputExample
              label="Label"
              placeholder="Label_placeholder"
              error
              errorText="Error_text"
            />
            <BaseInputExample
              label="Label"
              placeholder="Label_placeholder"
              initialValue="Value"
              disabled
            />
          </div>
        </div>
      </StoryPreviewFrame>
    </div>
  ),
};
