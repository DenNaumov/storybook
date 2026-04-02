import type { ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs";
import { InlineButton } from "./inline-button";
import { ResizableIcon } from "../icon";
import {
  ResizableIcons,
  type ResizableIconKeys,
} from "../icon/packs/resizable";
import styles from "./inline-button.stories.module.css";

const resizableIconNames = Object.keys(ResizableIcons) as ResizableIconKeys[];

type InlineButtonStoryArgs = Omit<
  ComponentProps<typeof InlineButton>,
  "icon"
> & {
  icon: ResizableIconKeys;
};

const meta: Meta<InlineButtonStoryArgs> = {
  title: "UI Kit/Buttons/InlineButton",
  component: InlineButton,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["surface", "bezeled", "primary"],
    },
    icon: {
      control: "select",
      options: resizableIconNames,
    },
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<InlineButtonStoryArgs>;

const renderIcon = (icon: ResizableIconKeys) => (
  <ResizableIcon icon={icon} size={24} />
);

export const Showcase: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className={styles.stage}>
      <div className={styles.surface}>
        <div className={styles.stack}>
          <InlineButton
            variant="surface"
            icon={renderIcon("CalendarRemove24")}
            label="Сбросить"
          />
          <InlineButton
            variant="bezeled"
            icon={renderIcon("CalendarRemove24")}
            label="Сбросить"
          />
          <InlineButton
            variant="primary"
            icon={renderIcon("CalendarRemove24")}
            label="Сбросить"
          />
        </div>
      </div>
    </div>
  ),
};

export const Playground: Story = {
  args: {
    label: "Сбросить",
    icon: "CalendarRemove24",
    variant: "surface",
    disabled: false,
  },
  render: (args: InlineButtonStoryArgs) => {
    const { icon, ...inlineButtonArgs } = args;
    return (
      <div className={styles.stage}>
        <div className={styles.surface}>
          <InlineButton {...inlineButtonArgs} icon={renderIcon(icon)} />
        </div>
      </div>
    );
  },
};
