import type { ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs";
import { ColoredChip } from "./colored-chip";
import { ResizableIcons } from "../icon/packs/resizable";
import { typographyColors } from "../typography/typography";
import styles from "./colored-chip.stories.module.css";

const resizableIconNames = Object.keys(ResizableIcons);

type ColoredChipStoryArgs = ComponentProps<typeof ColoredChip>;

const meta: Meta<ColoredChipStoryArgs> = {
  title: "UI Kit/ColoredChip",
  component: ColoredChip,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    color: { control: "color" },
    multiline: { control: "boolean" },
    startIcon: {
      control: "select",
      options: [undefined, ...resizableIconNames],
    },
    endIcon: { control: "select", options: [undefined, ...resizableIconNames] },
    className: { table: { disable: true } },
    style: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<ColoredChipStoryArgs>;

export const Playground: Story = {
  args: {
    label: "Стадия_номер_1",
    color: "#fa8703",
  },
  render: (args) => (
    <div className={styles.stage}>
      <div className={styles.componentFrame}>
        <ColoredChip {...args} />
      </div>
    </div>
  ),
};

export const Showcase: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className={styles.stage}>
      <div className={styles.phoneFrame}>
        <div className={styles.frameHeader}>
          <div className={styles.frameContent}>
            <h1 className={styles.heading}>ColoredChip</h1>
          </div>
          <div className={styles.divider} />
        </div>

        <div className={styles.selectionFrame}>
          <div className={styles.chipGrid}>
            <ColoredChip label="Стадия_номер_1" color="#fa8703" />
            <ColoredChip
              label="Меточка"
              color="#00c621"
              startIcon="Unarchive24"
            />
            <ColoredChip
              label="Стадия_номер_1"
              color="#fa8703"
              endIcon="LinkForward"
            />
            <ColoredChip
              label="Сортировка"
              color="#00c621"
              startIcon="Unarchive24"
              endIcon="InformationSquare"
            />
            <ColoredChip
              label={"Много-много\nтекста в\nнесколько строк"}
              color="#00c621"
              multiline
            />
            <ColoredChip
              label={"Много-много\nтекста в\nнесколько строк"}
              color="#00c621"
              startIcon="Unarchive24"
              multiline
            />
            <ColoredChip
              label={"Много-много\nтекста в\nнесколько строк"}
              color="#00c621"
              endIcon="LinkForward"
              multiline
            />
            <ColoredChip
              label={"Много-\nмного\nтекста в\nнесколько\nстрок"}
              color="#00c621"
              startIcon="Unarchive24"
              endIcon="InformationSquare"
              multiline
            />
          </div>
        </div>
      </div>
    </div>
  ),
};
