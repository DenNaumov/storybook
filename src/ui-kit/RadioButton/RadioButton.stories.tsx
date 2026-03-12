import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { RadioButton } from './RadioButton';
import styles from './RadioButton.stories.module.css';

const meta = {
  title: 'UI Kit/RadioButton',
  component: RadioButton,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof RadioButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Showcase: Story = {
  render: () => (
    <div className={styles.stage}>
      <div className={styles.card}>
        <div className={styles.title}>Radiobutton</div>
        <div className={styles.subtitle}>Компонент радиобаттона</div>
        <div className={styles.divider} />
        <div className={styles.grid}>
          <RadioButton name="demo" />
          <RadioButton name="demo" checked />
          <RadioButton name="demo" disabled />
          <RadioButton name="demo" checked disabled />
        </div>
      </div>
    </div>
  ),
};
