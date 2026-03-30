import type { ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs";
import { StoryPreviewFrame } from "../story-preview/story-preview-frame";
import { Loader } from "./loader";
import styles from "./loader.stories.module.css";

type LoaderStoryArgs = ComponentProps<typeof Loader>;

const meta: Meta<LoaderStoryArgs> = {
  title: "UI Kit/Loader",
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
  },
};

export default meta;
type Story = StoryObj<LoaderStoryArgs>;

export const Playground: Story = {
  args: {
    size: "medium",
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
      <StoryPreviewFrame
        className={styles.phoneFrame}
        title="Loader"
        description="Компонент загрузки"
      >
        <div className={styles.selectionFrame}>
          <Loader size="small" />
          <Loader size="medium" />
          <Loader size="large" />
        </div>
      </StoryPreviewFrame>
    </div>
  ),
};
