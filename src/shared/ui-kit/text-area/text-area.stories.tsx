import type { Meta, StoryObj } from "@storybook/nextjs";
import type { ComponentProps } from "react";
import { useState } from "react";

import { TextArea } from "./text-area";
import styles from "./text-area.stories.module.css";

const meta = {
  title: "UI Kit/TextArea",
  component: TextArea,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

const TextAreaExample = ({
  initialValue = "",
  ...props
}: Omit<ComponentProps<typeof TextArea>, "value" | "onChange"> & {
  initialValue?: string;
}) => {
  const [value, setValue] = useState(initialValue);

  return <TextArea {...props} value={value} onValueChange={setValue} />;
};

export const Showcase: Story = {
  render: () => (
    <div className={styles.stage}>
      <div className={styles.card}>
        <div className={styles.title}>TextArea</div>
        <div className={styles.subtitle}>
          Текстовое поле, которое не TextArea, но всё равно многострочный)))
        </div>
        <div className={styles.divider} />
        <div className={styles.stack}>
          <TextAreaExample placeholder="Label_placeholder" />
          <TextAreaExample label="Label" />
          <TextAreaExample label="Label" initialValue="Value" clearable />
          <TextAreaExample
            label="Label"
            initialValue="Value Value Value Value Value Value Value Value Value Value Value Value Value Value Value Value Valu"
            clearable
          />
          <TextAreaExample placeholder="Label_placeholder" disabled />
          <TextAreaExample label="Label" initialValue="Value" disabled />
          <TextAreaExample
            placeholder="Label_placeholder"
            error
            assistiveText="Assistive_text"
          />
          <TextAreaExample
            label="Label"
            initialValue="Value"
            error
            assistiveText="Assistive_text"
          />
        </div>
      </div>
    </div>
  ),
};
