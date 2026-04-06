import { useState } from "react";
import type { ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs";
import { StoryPreviewFrame } from "../story-preview/story-preview-frame";
import { InputMaster } from "./input-master";
import styles from "./input-master.stories.module.css";

type InputMasterStoryArgs = ComponentProps<typeof InputMaster>;

const meta: Meta<InputMasterStoryArgs> = {
  title: "UI Kit/Inputs/InputMaster",
  component: InputMaster,
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

type Story = StoryObj<InputMasterStoryArgs>;

const InputMasterExample = ({
  initialValue = "",
  ...props
}: Omit<InputMasterStoryArgs, "value" | "onValueChange"> & {
  initialValue?: string;
}) => {
  const [value, setValue] = useState(initialValue);

  return <InputMaster {...props} value={value} onValueChange={setValue} />;
};

export const Playground: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value);

    return (
      <div className={styles.stage}>
        <div className={styles.componentFrame}>
          <InputMaster {...args} value={value} onValueChange={setValue} />
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
        title="InputMaster"
        description="Базовое поле ввода с плавающим лейблом и состояниями"
      >
        <div className={styles.selectionFrame}>
          <div className={styles.stack}>
            <InputMasterExample
              label="Label"
              placeholder="Label_placeholder"
              assistiveText="Assistive_text"
            />
            <InputMasterExample
              label="Label"
              placeholder="Label_placeholder"
              initialValue="Value"
              clearable
              assistiveText="Assistive_text"
            />
            <InputMasterExample
              label="Label"
              placeholder="Label_placeholder"
              error
              errorText="Error_text"
            />
            <InputMasterExample
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
