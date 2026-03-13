import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs';
import { ListButton } from './list-button';
import { Icon28 } from '../icon/icon-wrappers';
import { Icon28Icons, type Icon28IconKeys } from '../icon/packs/28';

const icon28Names = Object.keys(Icon28Icons) as Icon28IconKeys[];

type ListButtonStoryArgs = Omit<ComponentProps<typeof ListButton>, 'startIcon'> & {
  startIcon?: Icon28IconKeys | 'Нет';
};

const meta: Meta<ListButtonStoryArgs> = {
  title: 'UI Kit/ListButton',
  component: ListButton,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#121212' }],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    startIcon: {
      control: 'select',
      options: ['Нет', ...icon28Names],
    },
    pressed: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<ListButtonStoryArgs>;

const renderIcon = (icon?: Icon28IconKeys | 'Нет') => (
  icon && icon !== 'Нет' ? <Icon28 icon={icon} size={28} /> : undefined
);

export const Showcase: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      width: '320px',
      padding: '24px',
      backgroundColor: '#121212',
      borderRadius: '24px'
    }}>
      {/* With Icon */}
      <ListButton label="Button_text" startIcon={renderIcon('PersonAdd')} />
      <ListButton label="Button_text" startIcon={renderIcon('PersonAdd')} disabled />
      <ListButton label="Button_text" startIcon={renderIcon('PersonAdd')} pressed />

      {/* Without Icon */}
      <ListButton label="Button_text" />
      <ListButton label="Button_text" disabled />
      <ListButton label="Button_text" pressed />
    </div>
  ),
};

export const Playground: Story = {
  args: {
    label: 'Button_text',
    startIcon: 'PersonAdd',
    pressed: false,
    disabled: false,
  },
  render: (args: ListButtonStoryArgs) => {
    const { startIcon, ...listButtonArgs } = args;
    return <ListButton {...listButtonArgs} startIcon={renderIcon(startIcon)} />;
  },
};
