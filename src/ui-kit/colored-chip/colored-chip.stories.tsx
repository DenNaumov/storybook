import type { ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs";
import { Icon20 } from "../icon/icon-wrappers";
import { ColoredChip } from "./colored-chip";
import styles from "./colored-chip.stories.module.css";

type ColoredChipStoryArgs = ComponentProps<typeof ColoredChip>;

const meta: Meta<ColoredChipStoryArgs> = {
  title: "UI Kit/Feedback/ColoredChip",
  component: ColoredChip,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    tone: { control: "select", options: ["orange", "green"] },
    multiline: { control: "boolean" },
    startIcon: { control: false },
    endIcon: { control: false },
  },
};

export default meta;
type Story = StoryObj<ColoredChipStoryArgs>;

export const Playground: Story = {
  args: {
    label: "Стадия_номер_1",
    tone: "orange",
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
            <p className={styles.lead}>Чипса с цветом</p>
            <p className={styles.lead}>
              Поэтому сюда цвета все ваши и описание про отступы, если иконки
              есть или нет.
            </p>
            <p className={styles.warningText}>
              Если иконки нет, то отступ 12px. Если есть, то вместо одного
              отступа с этой стороны, отступ становится 8px.
            </p>
          </div>
          <div className={styles.divider} />
        </div>

        <div className={styles.selectionFrame}>
          <div className={styles.chipGrid}>
            <ColoredChip label="Стадия_номер_1" tone="orange" />
            <ColoredChip
              label="Меточка"
              tone="green"
              startIcon="Unarchive24"
            />
            <ColoredChip
              label="Стадия_номер_1"
              tone="orange"
              endIcon={
                <Icon20
                  icon="ChevronRight"
                  size={20}
                  color="var(--colored-chip-icon-orange)"
                />
              }
            />
            <ColoredChip
              label="Сортировка"
              tone="green"
              startIcon="Unarchive24"
              endIcon={
                <Icon20
                  icon="Cancel"
                  size={20}
                  color="var(--theme-icon-default)"
                />
              }
            />
            <ColoredChip
              label={"Много-много\nтекста в\nнесколько строк"}
              tone="green"
              multiline
            />
            <ColoredChip
              label={"Много-много\nтекста в\nнесколько строк"}
              tone="green"
              startIcon="Unarchive24"
              multiline
            />
            <ColoredChip
              label={"Много-много\nтекста в\nнесколько строк"}
              tone="green"
              endIcon={
                <Icon20
                  icon="ChevronRight"
                  size={20}
                  color="var(--colored-chip-icon-green)"
                />
              }
              multiline
            />
            <ColoredChip
              label={"Много-\nмного\nтекста в\nнесколько\nстрок"}
              tone="green"
              startIcon="Unarchive24"
              endIcon={
                <Icon20
                  icon="Cancel"
                  size={20}
                  color="var(--theme-icon-default)"
                />
              }
              multiline
            />
          </div>
        </div>

        <div className={styles.multilineHint}>Multiline = Yes</div>
      </div>
    </div>
  ),
};
