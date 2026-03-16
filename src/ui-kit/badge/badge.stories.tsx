import type { Meta, StoryObj } from "@storybook/nextjs";
import { Badge } from "./badge";

const meta: Meta<typeof Badge> = {
  title: "UI Kit/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
      values: [
        { name: "dark", value: "#121212" },
        { name: "light", value: "#F5F5F7" },
      ],
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "error", "inverse"],
    },
    size: {
      control: "select",
      options: ["dot", "medium", "large"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    variant: "primary",
    size: "medium",
    count: 42,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 100px)",
        gap: "40px",
        alignItems: "center",
        justifyItems: "center",
        padding: "40px",
        backgroundColor: "#121212",
        borderRadius: "24px",
      }}
    >
      {/* Row 1: Primary (Blue) */}
      <Badge size="dot" variant="primary" />
      <Badge size="medium" variant="primary">
        42
      </Badge>
      <Badge size="large" variant="primary">
        42
      </Badge>

      {/* Row 2: Error (Red) */}
      <Badge size="dot" variant="error" />
      <Badge size="medium" variant="error">
        42
      </Badge>
      <Badge size="large" variant="error">
        42
      </Badge>

      {/* Row 3: Inverse (White bg, blue text) */}
      <Badge size="dot" variant="inverse" />
      <Badge size="medium" variant="inverse">
        42
      </Badge>
      <Badge size="large" variant="inverse">
        42
      </Badge>
    </div>
  ),
};

export const Dot: Story = {
  args: {
    size: "dot",
    variant: "primary",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    variant: "primary",
    children: "42",
  },
};
