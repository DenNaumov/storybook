import type { Meta, StoryObj } from "@storybook/nextjs";

import { Typography } from "../typography/typography";
import { ItemList } from "./item-list";
import { ItemListItem } from "../item-list-item/item-list-item";
import styles from "./item-list.stories.module.css";

const meta: Meta<typeof ItemList> = {
  title: "UI Kit/Lists/ItemList",
  component: ItemList,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    children: { control: false, table: { disable: true } },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const TextItem = ({
  children,
  divider = true,
}: {
  children: string;
  divider?: boolean;
}) => {
  const classes = [styles.textItem, divider ? styles.withDivider : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      <Typography
        as="span"
        variant="text-regular"
        className={styles.textItemLabel}
        style={{ color: "inherit" }}
      >
        {children}
      </Typography>
    </div>
  );
};

export const Showcase: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className={styles.stage}>
      <div className={styles.stack}>
        <ItemList>
          <TextItem>Стадия</TextItem>
          <TextItem>Стадия</TextItem>
          <TextItem divider={false}>Стадия без дивайдера</TextItem>
        </ItemList>

        <ItemList>
          <ItemListItem label="Значение справочника/связи" />
          <ItemListItem label="Значение справочника/связи" />
          <ItemListItem
            label="Значение справочника/связи без дивайдера"
            divider={false}
          />
        </ItemList>
      </div>
    </div>
  ),
};

export const Playground: Story = {
  render: () => (
    <div className={styles.stage}>
      <div className={styles.stack}>
        <ItemList>
          <ItemListItem label="Значение справочника/связи" />
          <ItemListItem label="Значение справочника/связи" />
          <ItemListItem
            label="Значение справочника/связи без дивайдера"
            divider={false}
          />
        </ItemList>
      </div>
    </div>
  ),
};
