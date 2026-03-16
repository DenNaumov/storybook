import type { ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs";
import { ListButton } from "./list-button";
import { Icon28 } from "../icon/icon-wrappers";
import { Icon28Icons, type Icon28IconKeys } from "../icon/packs/28";
import styles from "./list-button.stories.module.css";

const icon28Names = Object.keys(Icon28Icons) as Icon28IconKeys[];

type ListButtonStoryArgs = Omit<
  ComponentProps<typeof ListButton>,
  "startIcon"
> & {
  startIcon?: Icon28IconKeys | "Нет";
};

const meta: Meta<ListButtonStoryArgs> = {
  title: "UI Kit/ListButton",
  component: ListButton,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    startIcon: {
      control: "select",
      options: ["Нет", ...icon28Names],
    },
    pressed: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<ListButtonStoryArgs>;

const renderIcon = (icon?: Icon28IconKeys | "Нет") =>
  icon && icon !== "Нет" ? <Icon28 icon={icon} size={28} /> : undefined;

export const Showcase: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className={styles.stage}>
      <div className={styles.surface}>
        <ListButton label="Button_text" startIcon={renderIcon("PersonAdd")} />
        <ListButton
          label="Button_text"
          startIcon={renderIcon("PersonAdd")}
          disabled
        />
        <ListButton
          label="Button_text"
          startIcon={renderIcon("PersonAdd")}
          pressed
        />

        <ListButton label="Button_text" />
        <ListButton label="Button_text" disabled />
        <ListButton label="Button_text" pressed />
      </div>
    </div>
  ),
};

export const Playground: Story = {
  args: {
    label: "Button_text",
    startIcon: "PersonAdd",
    pressed: false,
    disabled: false,
  },
  render: (args: ListButtonStoryArgs) => {
    const { startIcon, ...listButtonArgs } = args;
    return (
      <div className={styles.stage}>
        <div className={styles.surface}>
          <ListButton {...listButtonArgs} startIcon={renderIcon(startIcon)} />
        </div>
      </div>
    );
  },
};
