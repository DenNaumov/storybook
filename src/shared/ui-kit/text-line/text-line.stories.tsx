import type { Meta, StoryObj } from "@storybook/nextjs";
import React, { useEffect, useRef, useState } from "react";

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

const StatesPreview = () => {
  const focusedRef = useRef<HTMLInputElement>(null);
  const [emptyValue, setEmptyValue] = useState("");
  const [value, setValue] = useState("Value");

  useEffect(() => {
    focusedRef.current?.focus();
  }, []);

  return (
    <div className={styles.stage}>
      <div className={styles.stack}>
        <TextLine
          label="Label"
          placeholder="Label_placeholder"
          value=""
          onChange={() => undefined}
        />
        <TextLine
          ref={focusedRef}
          label="Label"
          placeholder="Label_placeholder"
          value={emptyValue}
          onChange={setEmptyValue}
        />
        <TextLine label="Label" value={value} onChange={setValue} />
        <TextLine
          label="Label"
          value="Value"
          error
          onChange={() => undefined}
        />
      </div>
    </div>
  );
};

export const States: Story = {
  render: () => <StatesPreview />,
};
