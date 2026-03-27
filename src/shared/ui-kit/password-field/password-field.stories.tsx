import type { Meta, StoryObj } from "@storybook/nextjs";
import { useState } from "react";
import { PasswordField } from "./password-field";

const meta: Meta<typeof PasswordField> = {
  title: "UI Kit/Inputs/PasswordField",
  component: PasswordField,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    label: "Пароль",
    value: "",
    disabled: false,
    error: false,
    clearable: false,
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value);

    return (
      <div
        style={{
          minHeight: "100vh",
          padding: 24,
          background: "var(--theme-bg-brand-light)",
        }}
      >
        <div style={{ maxWidth: 358 }}>
          <PasswordField {...args} value={value} onChange={setValue} />
        </div>
      </div>
    );
  },
};
