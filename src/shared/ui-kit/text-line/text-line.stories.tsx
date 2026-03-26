import type { Meta, StoryObj } from "@storybook/nextjs";
import type { ComponentProps } from "react";
import { useState } from "react";

import { TextLine } from "./text-line";
import styles from "./text-line.stories.module.css";

const meta = {
  title: "UI Kit/TextLine",
  component: TextLine,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
} satisfies Meta<typeof TextLine>;

export default meta;
type Story = StoryObj<typeof meta>;

const TextLineExample = ({
  initialValue = "",
  ...props
}: Omit<ComponentProps<typeof TextLine>, "value" | "onChange"> & {
  initialValue?: string;
}) => {
  const [value, setValue] = useState(initialValue);

  return <TextLine {...props} value={value} onValueChange={setValue} />;
};

export const Showcase: Story = {
  render: () => (
    <div className={styles.stage}>
      <div className={styles.card}>
        <div className={styles.title}>TextLine</div>
        <div className={styles.subtitle}>
          Текстовое поле, которое не TextArea, но всё равно многострочный)))
        </div>
        <div className={styles.divider} />
        <div className={styles.stack}>
          <TextLineExample placeholder="Label_placeholder" />
          <TextLineExample label="Label" />
          <TextLineExample label="Label" initialValue="Value" clearable />
          <TextLineExample
            label="Label"
            initialValue="Value Value Value Value Value Value Value Value Value Value Value Value Value Value Value Value Valu"
            clearable
          />
          <TextLineExample placeholder="Label_placeholder" disabled />
          <TextLineExample label="Label" initialValue="Value" disabled />
          <TextLineExample
            placeholder="Label_placeholder"
            error
            assistiveText="Assistive_text"
          />
          <TextLineExample
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
