import type { Meta, StoryObj } from "@storybook/nextjs";

import { Typography } from "../typography/typography";
import { Checkbox } from "./checkbox";
import styles from "./checkbox.stories.module.css";

const meta = {
  title: "UI Kit/Checkbox",
  component: Checkbox,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
  argTypes: {
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
    indeterminate: { control: "boolean" },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Showcase: Story = {
  render: () => (
    <div className={styles.stage}>
      <div className={styles.card}>
        <Typography
          as="h1"
          variant="title3-bold"
          color="brandMain"
          className={styles.title}
        >
          Checkbox
        </Typography>
        <Typography
          as="p"
          variant="text-regular"
          color="secondary"
          className={styles.subtitle}
        >
          Компонент чекбокса
        </Typography>
        <div className={styles.divider} />
        <div className={styles.grid}>
          <Checkbox ariaLabel="Не выбран" />
          <Checkbox checked ariaLabel="Выбран" />
          <Checkbox indeterminate ariaLabel="Частично выбран" />
          <Checkbox disabled ariaLabel="Не выбран, недоступен" />
          <Checkbox checked disabled ariaLabel="Выбран, недоступен" />
          <Checkbox
            indeterminate
            disabled
            ariaLabel="Частично выбран, недоступен"
          />
        </div>
      </div>
    </div>
  ),
};
