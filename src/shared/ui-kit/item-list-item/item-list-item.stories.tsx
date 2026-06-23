import type { Meta, StoryObj } from "@storybook/nextjs";

import { ItemListItem } from "./item-list-item";
import styles from "./item-list-item.stories.module.css";

const meta: Meta<typeof ItemListItem> = {
  title: "UI Kit/Lists/ItemListItem",
  component: ItemListItem,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    label: "Значение справочника/связи",
    divider: true,
  },
  argTypes: {
    children: { control: false, table: { disable: true } },
    onChange: { control: false, table: { disable: true } },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <div className={styles.stage}>
      <div className={styles.list}>
        <ItemListItem {...args} />
      </div>
    </div>
  ),
};

export const Showcase: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className={styles.stage}>
      <div className={styles.list}>
        <ItemListItem label="Значение справочника/связи" />
        <ItemListItem label="Значение справочника/связи" />
        <ItemListItem
          label="Значение справочника/связи без дивайдера"
          divider={false}
        />
      </div>
    </div>
  ),
};
