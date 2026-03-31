import type { Meta, StoryObj } from "@storybook/nextjs";
import { useState } from "react";

import { TextLine } from "./text-line";
import styles from "./text-line.stories.module.css";

const meta: Meta<typeof TextLine> = {
  title: "UI Kit/Inputs/TextLine",
  component: TextLine,
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

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value);

    return (
      <div className={styles.stage}>
        <div className={styles.stack}>
          <TextLine {...args} value={value} onChange={setValue} />
        </div>
      </div>
    );
  },
};
