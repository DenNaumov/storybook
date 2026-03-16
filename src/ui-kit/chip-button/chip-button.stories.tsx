import type { ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs";
import { ChipButton } from "./chip-button";
import { ResizableIcon } from "../icon/icon-wrappers";
import {
  ResizableIcons,
  type ResizableIconKeys,
} from "../icon/packs/resizable";
import styles from "./chip-button.stories.module.css";

const resizableIconNames = Object.keys(ResizableIcons) as ResizableIconKeys[];

type ChipButtonStoryArgs = Omit<
  ComponentProps<typeof ChipButton>,
  "startIcon" | "endIcon"
> & {
  startIcon?: ResizableIconKeys | "Нет";
  endIcon?: ResizableIconKeys | "Нет";
};

const meta: Meta<ChipButtonStoryArgs> = {
  title: "UI Kit/ChipButton",
  component: ChipButton,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["s", "m", "l"],
    },
    startIcon: {
      control: "select",
      options: ["Нет", ...resizableIconNames],
    },
    endIcon: {
      control: "select",
      options: ["Нет", ...resizableIconNames],
    },
    active: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<ChipButtonStoryArgs>;

const renderIcon = (icon?: ResizableIconKeys | "Нет") =>
  icon && icon !== "Нет" ? <ResizableIcon icon={icon} size={24} /> : undefined;

export const Showcase: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className={styles.stage}>
      <div className={styles.surface}>
        <div className={styles.headerCell}>ButtonSize=S</div>
        <div className={styles.headerCell}>ButtonSize=M</div>
        <div className={styles.headerCell}>ButtonSize=L</div>

        <ChipButton
          size="s"
          startIcon={renderIcon("ArrowUpDown")}
          endIcon={renderIcon("ArrowUpDown")}
          label="Сортировка"
        />
        <ChipButton
          size="m"
          startIcon={renderIcon("ArrowUpDown")}
          endIcon={renderIcon("ArrowUpDown")}
          label="Сортировка"
        />
        <ChipButton
          size="l"
          startIcon={renderIcon("ArrowUpDown")}
          endIcon={renderIcon("ArrowUpDown")}
          label="Сортировка"
        />

        <ChipButton
          size="s"
          startIcon={renderIcon("ArrowUpDown")}
          endIcon={renderIcon("ArrowUpDown")}
          label="Сортировка"
          active
        />
        <ChipButton
          size="m"
          startIcon={renderIcon("ArrowUpDown")}
          endIcon={renderIcon("ArrowUpDown")}
          label="Сортировка"
          active
        />
        <ChipButton
          size="l"
          startIcon={renderIcon("ArrowUpDown")}
          endIcon={renderIcon("ArrowUpDown")}
          label="Сортировка"
          active
        />

        <ChipButton
          size="s"
          startIcon={renderIcon("ArrowUpDown")}
          label="Сортировка"
        />
        <ChipButton
          size="m"
          startIcon={renderIcon("ArrowUpDown")}
          label="Сортировка"
        />
        <ChipButton
          size="l"
          startIcon={renderIcon("ArrowUpDown")}
          label="Сортировка"
        />

        <ChipButton
          size="s"
          startIcon={renderIcon("ArrowUpDown")}
          label="Сортировка"
          active
        />
        <ChipButton
          size="m"
          startIcon={renderIcon("ArrowUpDown")}
          label="Сортировка"
          active
        />
        <ChipButton
          size="l"
          startIcon={renderIcon("ArrowUpDown")}
          label="Сортировка"
          active
        />

        <ChipButton
          size="s"
          endIcon={renderIcon("ArrowUpDown")}
          label="Сортировка"
        />
        <ChipButton
          size="m"
          endIcon={renderIcon("ArrowUpDown")}
          label="Сортировка"
        />
        <ChipButton
          size="l"
          endIcon={renderIcon("ArrowUpDown")}
          label="Сортировка"
        />

        <ChipButton
          size="s"
          endIcon={renderIcon("ArrowUpDown")}
          label="Сортировка"
          active
        />
        <ChipButton
          size="m"
          endIcon={renderIcon("ArrowUpDown")}
          label="Сортировка"
          active
        />
        <ChipButton
          size="l"
          endIcon={renderIcon("ArrowUpDown")}
          label="Сортировка"
          active
        />

        <ChipButton size="s" label="Сортировка" />
        <ChipButton size="m" label="Сортировка" />
        <ChipButton size="l" label="Сортировка" />

        <ChipButton size="s" label="Сортировка" disabled />
        <ChipButton size="m" label="Сортировка" disabled />
        <ChipButton size="l" label="Сортировка" disabled />

        <ChipButton size="s" label="Сортировка" active />
        <ChipButton size="m" label="Сортировка" active />
        <ChipButton size="l" label="Сортировка" active />

        <ChipButton size="s" label="Сортировка" active disabled />
        <ChipButton size="m" label="Сортировка" active disabled />
        <ChipButton size="l" label="Сортировка" active disabled />

        <div className={styles.centeredCell}>
          <ChipButton size="s" startIcon={renderIcon("ArrowUpDown")} />
        </div>
        <div className={styles.centeredCell}>
          <ChipButton size="m" startIcon={renderIcon("ArrowUpDown")} />
        </div>
        <div className={styles.centeredCell}>
          <ChipButton size="l" startIcon={renderIcon("ArrowUpDown")} />
        </div>
      </div>
    </div>
  ),
};

export const Playground: Story = {
  args: {
    label: "Сортировка",
    size: "m",
    startIcon: "ArrowUpDown",
    endIcon: "Нет",
    active: false,
    disabled: false,
  },
  render: (args: ChipButtonStoryArgs) => {
    const { startIcon, endIcon, ...chipButtonArgs } = args;
    return (
      <div className={styles.stage}>
        <div className={styles.playgroundSurface}>
          <ChipButton
            {...chipButtonArgs}
            startIcon={renderIcon(startIcon)}
            endIcon={renderIcon(endIcon)}
          />
        </div>
      </div>
    );
  },
};
