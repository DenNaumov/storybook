import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Button } from './Button';
import styles from './Button.stories.module.css';

const meta = {
  title: 'UI Kit/Button',
  component: Button,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
    variant: 'primary',
    size: 'm',
    label: 'Сохранить',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'bezeled', 'outlined', 'text'],
    },
    size: {
      control: 'select',
      options: ['s', 'm'],
    },
    loading: { control: 'boolean' },
    pressed: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const Plus = () => <span className={styles.plus}>+</span>;

const StateRow = ({
  state,
  size,
}: {
  state: 'default' | 'pressed' | 'disabled' | 'loading';
  size: 's' | 'm';
}) => {
  const commonProps = {
    size,
    label: 'Сохранить',
    startIcon: <Plus />,
    endIcon: <Plus />,
  };

  return (
    <>
      <div className={styles.rowLabel}>{state}</div>
      <Button variant="primary" {...commonProps} pressed={state === 'pressed'} disabled={state === 'disabled'} loading={state === 'loading'} />
      <Button variant="bezeled" {...commonProps} pressed={state === 'pressed'} disabled={state === 'disabled'} loading={state === 'loading'} />
      <Button variant="outlined" {...commonProps} pressed={state === 'pressed'} disabled={state === 'disabled'} loading={state === 'loading'} />
      <Button variant="text" {...commonProps} pressed={state === 'pressed'} disabled={state === 'disabled'} loading={state === 'loading'} />
    </>
  );
};

export const Showcase: Story = {
  render: () => (
    <div className={styles.stage}>
      <div className={styles.header}>
        <div className={styles.title}>Button</div>
        <div className={styles.chips}>
          <span className={styles.chip}>Primary</span>
          <span className={styles.chip}>Bezeled</span>
          <span className={styles.chip}>Outlined</span>
          <span className={styles.chip}>Text</span>
        </div>
      </div>

      <div className={styles.sectionTitle}>Size = M</div>
      <div className={styles.grid}>
        <div className={styles.gridHead} />
        <div className={styles.gridHead}>Primary</div>
        <div className={styles.gridHead}>Bezeled</div>
        <div className={styles.gridHead}>Outlined</div>
        <div className={styles.gridHead}>Text</div>

        <StateRow state="default" size="m" />
        <StateRow state="pressed" size="m" />
        <StateRow state="disabled" size="m" />
        <StateRow state="loading" size="m" />
      </div>

      <div className={styles.sectionTitle}>Size = S</div>
      <div className={styles.grid}>
        <div className={styles.gridHead} />
        <div className={styles.gridHead}>Primary</div>
        <div className={styles.gridHead}>Bezeled</div>
        <div className={styles.gridHead}>Outlined</div>
        <div className={styles.gridHead}>Text</div>

        <StateRow state="default" size="s" />
        <StateRow state="pressed" size="s" />
        <StateRow state="disabled" size="s" />
        <StateRow state="loading" size="s" />
      </div>
    </div>
  ),
};
