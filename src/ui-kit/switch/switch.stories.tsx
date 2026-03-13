import type { Meta, StoryObj } from '@storybook/nextjs';

import { Switch } from './switch';
import styles from './switch.stories.module.css';

const meta = {
  title: 'UI Kit/Switch',
  component: Switch,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    invalid: { control: 'boolean' },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Showcase: Story = {
  render: () => (
    <div className={styles.stage}>
      <div className={styles.card}>
        <div className={styles.title}>Switch</div>
        <div className={styles.subtitle}>Компонент свитча</div>
        <div className={styles.divider} />
        <div className={styles.grid}>
          <Switch />
          <Switch checked />
          <Switch disabled />
          <Switch checked disabled />
          <Switch invalid />
          <Switch checked invalid />
          <Switch disabled invalid />
          <Switch checked disabled invalid />
        </div>
      </div>
    </div>
  ),
};
