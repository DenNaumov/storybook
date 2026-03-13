import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs';
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
    layout: 'fullscreen',
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

const stageStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  minHeight: '100vh',
  padding: '48px 56px 80px',
  backgroundColor: 'var(--theme-bg-tabbar)',
} as const;

const surfaceStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '45px',
  padding: '40px',
  backgroundColor: 'var(--theme-bg-brand-light)',
  border: '1px solid var(--theme-border-default)',
  borderRadius: '24px',
  alignItems: 'center',
} as const;

const stackStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '45px',
} as const;

export const Showcase: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={stageStyle}>
      <div style={surfaceStyle}>
        <div style={stackStyle}>
          <InlineButton variant="surface" icon={renderIcon('CalendarRemove24')} label="Сбросить" />
          <InlineButton variant="bezeled" icon={renderIcon('CalendarRemove24')} label="Сбросить" />
          <InlineButton variant="primary" icon={renderIcon('CalendarRemove24')} label="Сбросить" />
        </div>
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
    return (
      <div style={stageStyle}>
        <div style={surfaceStyle}>
          <InlineButton {...inlineButtonArgs} icon={renderIcon(icon)} />
        </div>
      </div>
    );
  },
};
