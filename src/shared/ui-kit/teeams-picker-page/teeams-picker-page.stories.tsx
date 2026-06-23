import type { Meta, StoryObj } from "@storybook/nextjs";

import { Page } from "./page";

const meta: Meta<typeof Page> = {
  title: "Screens/Teeeams Picker",
  component: Page,
  parameters: {
    layout: "fullscreen",
    controls: { disable: true },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Page />,
};
