import type { ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs";
import { Icon28Icons } from "../icon/packs/28";
import { Illustration } from "./illustration";
import {
  illustrationSrcMap,
  type IllustrationName,
} from "./illustration.constants";
import styles from "./illustration.stories.module.css";

type IllustrationStoryArgs = ComponentProps<typeof Illustration>;

const illustrationNames = Object.keys(illustrationSrcMap) as IllustrationName[];

const meta: Meta<IllustrationStoryArgs> = {
  title: "UI Kit/Illustration",
  component: Illustration,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    illustration: {
      control: "select",
      options: illustrationNames,
    },
    size: {
      control: { type: "number", min: 64, max: 240, step: 4 },
    },
    label: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<IllustrationStoryArgs>;

export const Playground: Story = {
  args: {
    illustration: "UserLimit",
    size: 184,
    label: "User limit illustration",
  },
  render: (args) => (
    <div className={styles.stage}>
      <Illustration {...args} />
    </div>
  ),
};

export const Showcase: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className={styles.stage}>
      <div className={styles.surface}>
        <div className={styles.title}>
          <Icon28Icons.FancyIcon
            width={28}
            height={28}
            color="currentColor"
            aria-hidden="true"
          />
          <span>Illustration</span>
        </div>

        <div className={styles.showcase}>
          {illustrationNames.map((illustration) => (
            <div key={illustration} className={styles.item}>
              <Illustration illustration={illustration} size={184} />
              <span>{illustration}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};
