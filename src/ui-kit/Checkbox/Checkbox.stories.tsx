import type { Meta, StoryObj } from '@storybook/nextjs';

import { Checkbox } from './Checkbox';
import styles from './Checkbox.stories.module.css';

const meta = {
  title: 'UI Kit/Checkbox',
  component: Checkbox,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Showcase: Story = {
  render: () => (
    <div className={styles.stage}>
      <div className={styles.card}>
        <div className={styles.title}>Checkbox</div>
        <div className={styles.subtitle}>Компонент чекбокса</div>
        <div className={styles.divider} />
        <div className={styles.grid}>
          <Checkbox />
          <Checkbox checked />
          <Checkbox indeterminate />
          <Checkbox disabled />
          <Checkbox checked disabled />
          <Checkbox indeterminate disabled />
        </div>
      </div>
    </div>
  ),
};
