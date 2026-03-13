import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { InlineButton } from './inline-button';
import { ResizableIcon } from '../icon/icon-wrappers';
import { ResizableIcons, type ResizableIconKeys } from '../icon/packs/resizable';

const resizableIconNames = Object.keys(ResizableIcons) as ResizableIconKeys[];

type InlineButtonStoryArgs = Omit<ComponentProps<typeof InlineButton>, 'icon'> & {
  icon: ResizableIconKeys;
};

const meta: Meta<InlineButtonStoryArgs> = {
  title: 'UI Kit/InlineButton',
  component: InlineButton,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#0F0F0F' }],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['surface', 'bezeled', 'primary'],
    },
    icon: {
      control: 'select',
      options: resizableIconNames,
    },
    className: {
      table: { disable: true },
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<InlineButtonStoryArgs>;

const renderIcon = (icon: ResizableIconKeys) => (
  <ResizableIcon icon={icon} size={24} />
);

export const Showcase: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '45px',
      padding: '40px',
      backgroundColor: '#0F0F0F',
      borderRadius: '24px',
      alignItems: 'center'
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '45px' }}>
        <InlineButton variant="surface" icon={renderIcon('CalendarRemove24')} label="Сбросить" />
        <InlineButton variant="bezeled" icon={renderIcon('CalendarRemove24')} label="Сбросить" />
        <InlineButton variant="primary" icon={renderIcon('CalendarRemove24')} label="Сбросить" />
      </div>
    </div>
  ),
};

export const Playground: Story = {
  args: {
    label: 'Сбросить',
    icon: 'CalendarRemove24',
    variant: 'surface',
    disabled: false,
  },
  render: (args: InlineButtonStoryArgs) => {
    const { icon, ...inlineButtonArgs } = args;
    return <InlineButton {...inlineButtonArgs} icon={renderIcon(icon)} />;
  },
};
