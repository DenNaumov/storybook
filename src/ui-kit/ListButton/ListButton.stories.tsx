import type { Meta, StoryObj } from '@storybook/react';
import { ListButton } from './ListButton';
import { Icon28 } from '../Icon/IconWrappers';
import { Icon28Icons, type Icon28IconKeys } from '../Icon/packs/28';

const icon28Names = Object.keys(Icon28Icons) as Icon28IconKeys[];
const icon28Mapping = icon28Names.reduce<Record<Icon28IconKeys, JSX.Element>>(
  (acc, name) => {
    acc[name] = <Icon28 icon={name} size={28} />;
    return acc;
  },
  {} as Record<Icon28IconKeys, JSX.Element>
);

const meta: Meta<typeof ListButton> = {
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
      mapping: { 'Нет': undefined, ...icon28Mapping },
    },
    className: {
      table: { disable: true },
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
type Story = StoryObj<typeof ListButton>;

const PersonAddIcon = icon28Mapping.PersonAdd;

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
      <ListButton label="Button_text" startIcon={PersonAddIcon} />
      <ListButton label="Button_text" startIcon={PersonAddIcon} disabled />
      <ListButton label="Button_text" startIcon={PersonAddIcon} pressed />

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
    startIcon: PersonAddIcon,
    pressed: false,
    disabled: false,
  },
};
