import type { ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs";
import { ColoredChip } from "./colored-chip";
import {
  ResizableIcons,
  type ResizableIconKeys,
} from "../icon/packs/resizable";
import { StoryPreviewFrame } from "../story-preview/story-preview-frame";
import styles from "./colored-chip.stories.module.css";

const resizableIconNames = Object.keys(ResizableIcons) as ResizableIconKeys[];

type ColoredChipStoryArgs = Omit<
  ComponentProps<typeof ColoredChip>,
  "startIcon" | "endIcon"
> & {
  startIcon?: ResizableIconKeys;
  endIcon?: ResizableIconKeys;
};

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
  render: ({ startIcon, endIcon, ...args }) => {
    const resolvedStartIcon = startIcon ? ResizableIcons[startIcon] : undefined;
    const resolvedEndIcon = endIcon ? ResizableIcons[endIcon] : undefined;

    return (
      <div className={styles.stage}>
        <div className={styles.componentFrame}>
          <ColoredChip
            {...args}
            startIcon={resolvedStartIcon}
            endIcon={resolvedEndIcon}
          />
        </div>
      </div>
    );
  },
};

export const Showcase: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className={styles.stage}>
      <StoryPreviewFrame
        className={styles.previewFrame}
        headerClassName={styles.previewHeader}
        title="ColoredChip"
      >
        <div className={styles.selectionFrame}>
          <div className={styles.chipGrid}>
            <ColoredChip label="Стадия_номер_1" color="#fa8703" />
            <ColoredChip
              label="Меточка"
              color="#00c621"
              startIcon={ResizableIcons.Unarchive24}
            />
            <ColoredChip
              label="Стадия_номер_1"
              color="#fa8703"
              endIcon={ResizableIcons.Unarchive24}
            />
            <ColoredChip
              label="Сортировка"
              color="#00c621"
              startIcon={ResizableIcons.Unarchive24}
              endIcon={ResizableIcons.InformationSquare}
            />
            <ColoredChip
              label={"Много-много\nтекста в\nнесколько строк"}
              color="#00c621"
              multiline
            />
            <ColoredChip
              label={"Много-много\nтекста в\nнесколько строк"}
              color="#00c621"
              startIcon={ResizableIcons.Unarchive24}
              multiline
            />
            <ColoredChip
              label={"Много-много\nтекста в\nнесколько строк"}
              color="#00c621"
              endIcon={ResizableIcons.LinkForward}
              multiline
            />
            <ColoredChip
              label={"Много-\nмного\nтекста в\nнесколько\nстрок"}
              color="#00c621"
              startIcon={ResizableIcons.Unarchive24}
              endIcon={ResizableIcons.InformationSquare}
              multiline
            />
          </div>
        </div>
      </StoryPreviewFrame>
    </div>
  ),
};
