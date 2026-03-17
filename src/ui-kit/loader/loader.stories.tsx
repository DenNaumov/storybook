import type { ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs";
import { Icon28 } from "../icon/icon-wrappers";
import { Loader } from "./loader";
import styles from "./loader.stories.module.css";

type LoaderStoryArgs = ComponentProps<typeof Loader>;

const meta: Meta<LoaderStoryArgs> = {
  title: "UI Kit/Feedback/Loader",
  component: Loader,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    label: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<LoaderStoryArgs>;

export const Playground: Story = {
  args: {
    size: "medium",
    label: "Загрузка",
  },
  render: (args) => (
    <div className={styles.stage}>
      <Loader {...args} />
    </div>
  ),
};

export const Showcase: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className={styles.stage}>
      <div className={styles.title}>
        <Icon28
          icon="FancyIcon"
          size={28}
          color="currentColor"
          aria-hidden="true"
        />
        <span>Loader</span>
      </div>

      <div className={styles.surface}>
        <Loader size="small" />
        <Loader size="medium" />
        <Loader size="large" />
      </div>
    </div>
  ),
};
