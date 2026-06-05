import type { Meta, StoryObj } from "@storybook/nextjs";
import type { ComponentProps } from "react";
import { SegmentedControl, SegmentedControlItem } from "./segmented-control";
import styles from "./segmented-control.stories.module.css";

type SegmentedControlStoryArgs = ComponentProps<typeof SegmentedControl> & {
  items: NonNullable<ComponentProps<typeof SegmentedControl>["items"]>;
};

const meta: Meta<SegmentedControlStoryArgs> = {
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
    defaultValue: {
      control: "text",
    },
    items: { control: "object" },
    onChange: { table: { disable: true } },
    children: { control: false, table: { disable: true } },
    className: { control: false, table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<SegmentedControlStoryArgs>;

const controlRows = [1, 2, 3, 4];
const playgroundItems: SegmentedControlStoryArgs["items"] = [
  { key: "main", label: "Основное" },
  { key: "second", label: "Item #2" },
  { key: "third", label: "Item #3" },
];

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
            defaultValue="main"
            items={[
              { key: "main", label: "Основное" },
              ...Array.from({ length: count - 1 }, (_, index) => ({
                key: `item-${index + 2}`,
                label: `Item #${index + 2}`,
              })),
            ]}
          />
        ))}
      </div>
    </div>
  ),
};

export const Playground: Story = {
  args: {
    fullWidth: false,
    defaultValue: "main",
    items: playgroundItems,
  },
  render: (args) => (
    <div className={styles.stage}>
      <div className={styles.playgroundBox}>
        <SegmentedControl
          key={`${args.defaultValue}-${args.items.map((item) => item.key).join("-")}`}
          fullWidth={args.fullWidth}
          defaultValue={args.defaultValue}
          items={args.items}
          aria-label="Вид отображения"
        />
      </div>
    </div>
  ),
};
