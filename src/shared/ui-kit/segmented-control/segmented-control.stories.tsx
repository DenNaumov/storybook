import type { Meta, StoryObj } from "@storybook/nextjs";
import { useState } from "react";
import { SegmentedControl, SegmentedControlItem } from "./segmented-control";
import styles from "./segmented-control.stories.module.css";

const meta: Meta<typeof SegmentedControl> = {
  title: "UI Kit/Inputs/SegmentedControl",
  component: SegmentedControl,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    fullWidth: {
      control: "boolean",
    },
    children: { control: false, table: { disable: true } },
    className: { control: false, table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof SegmentedControl>;

const options = ["Список", "Календарь", "Канбан"];
const controlRows = [1, 2, 3, 4];

export const ItemShowcase: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className={styles.stage}>
      <div className={styles.itemFrame} role="radiogroup" aria-label="State">
        <SegmentedControlItem
          className={styles.frameItemOn}
          label="Item #1"
          selected
        />
        <SegmentedControlItem className={styles.frameItemOff} label="Item #1" />
      </div>

      <div
        className={styles.longItems}
        role="radiogroup"
        aria-label="Long labels"
      >
        <SegmentedControlItem
          label="Очень длинное название, которое >300 символов"
          selected
          title="Очень длинное название, которое >300 символов"
        />
        <SegmentedControlItem
          label="Очень длинное название, которое >300 символов"
          title="Очень длинное название, которое >300 символов"
        />
      </div>
    </div>
  ),
};

export const SegmentedControlShowcase: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className={styles.stage}>
      <div className={styles.controlFrame}>
        {controlRows.map((count) => (
          <SegmentedControl
            key={count}
            className={styles.controlRow}
            aria-label={`Segmented control ${count}`}
          >
            <SegmentedControlItem label="Основное" selected />
            {Array.from({ length: count - 1 }, (_, index) => (
              <SegmentedControlItem
                key={index + 2}
                label={`Item #${index + 2}`}
              />
            ))}
          </SegmentedControl>
        ))}
      </div>
    </div>
  ),
};

export const Playground: Story = {
  args: {
    fullWidth: false,
  },
  render: (args) => {
    const [selectedOption, setSelectedOption] = useState(options[0]);

    return (
      <div className={styles.stage}>
        <div className={styles.playgroundBox}>
          <SegmentedControl {...args} aria-label="Вид отображения">
            {options.map((option) => (
              <SegmentedControlItem
                key={option}
                label={option}
                selected={selectedOption === option}
                onClick={() => setSelectedOption(option)}
              />
            ))}
          </SegmentedControl>
        </div>
      </div>
    );
  },
};
