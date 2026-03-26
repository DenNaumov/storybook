import type { Meta, StoryObj } from "@storybook/nextjs";
import React, { useEffect, useRef, useState } from "react";

import { TextField } from "./text-field";
import styles from "./text-field.stories.module.css";

const meta = {
  title: "UI Kit/TextField",
  component: TextField,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
} satisfies Meta<typeof TextField>;

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
        <TextField
          label="Label"
          placeholder="Label_placeholder"
          value=""
          onChange={() => undefined}
        />
        <TextField
          ref={focusedRef}
          label="Label"
          placeholder="Label_placeholder"
          value={emptyValue}
          onChange={setEmptyValue}
        />
        <TextField
          label="Label"
          value={value}
          onChange={setValue}
        />
        <TextField
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
