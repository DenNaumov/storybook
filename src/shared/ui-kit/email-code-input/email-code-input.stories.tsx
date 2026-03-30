import type { Meta, StoryObj } from "@storybook/nextjs";
import { useState } from "react";
import { EmailCodeInput } from "./email-code-input";

const meta: Meta<typeof EmailCodeInput> = {
  title: "UI Kit/Inputs/EmailCodeInput",
  component: EmailCodeInput,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    digits: "",
    error: false,
    disable: false,
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => {
    const [digits, setDigits] = useState(args.digits);

    return (
      <div
        style={{
          minHeight: "100vh",
          padding: 24,
          background: "var(--theme-bg-brand-light)",
        }}
      >
        <div style={{ maxWidth: 358 }}>
          <EmailCodeInput
            {...args}
            digits={digits}
            onDigitsChange={setDigits}
          />
        </div>
      </div>
    );
  },
};
