import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FAB } from './FAB';
import { ResizableIcon } from '../Icon/IconWrappers';
import { ResizableIcons, type ResizableIconKeys } from '../Icon/packs/resizable';

const resizableIconNames = Object.keys(ResizableIcons) as ResizableIconKeys[];

type FABStoryArgs = Omit<ComponentProps<typeof FAB>, 'icon'> & {
  icon?: ResizableIconKeys | 'Нет';
};

const meta: Meta<FABStoryArgs> = {
  title: 'UI Kit/FAB',
  component: FAB,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#121212' },
        { name: 'light', value: '#F5F5F7' },
      ],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'bezeled', 'white'],
    },
    icon: {
      control: 'select',
      options: ['Нет', ...resizableIconNames],
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
type Story = StoryObj<FABStoryArgs>;

const renderIcon = (icon?: ResizableIconKeys | 'Нет') => (
  icon && icon !== 'Нет' ? <ResizableIcon icon={icon} size={24} /> : undefined
);

export const Showcase: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '120px 100px 100px 100px',
      gap: '24px 40px',
      alignItems: 'center',
      padding: '60px',
      backgroundColor: '#121212',
      borderRadius: '24px',
      color: '#FFFFFF',
      fontFamily: 'sans-serif'
    }}>
      {/* Header Row */}
      <div />
      <div style={{ textAlign: 'center', opacity: 0.8 }}>Primary</div>
      <div style={{ textAlign: 'center', opacity: 0.8 }}>Bezeled</div>
      <div style={{ textAlign: 'center', opacity: 0.8 }}>White</div>

      {/* Default Stat Row */}
      <div style={{ opacity: 0.8 }}>Default</div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <FAB variant="primary" icon={renderIcon('Add01')} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <FAB variant="bezeled" icon={renderIcon('Add01')} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <FAB variant="white" icon={renderIcon('Add01')} />
      </div>

      {/* Pressed State Row */}
      <div style={{ opacity: 0.8 }}>Pressed</div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <FAB variant="primary" icon={renderIcon('Add01')} pressed />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <FAB variant="bezeled" icon={renderIcon('Add01')} pressed />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <FAB variant="white" icon={renderIcon('Add01')} pressed />
      </div>
    </div>
  ),
};

export const Playground: Story = {
  args: {
    variant: 'primary',
    icon: 'Add01',
    pressed: false,
    disabled: false,
  },
  render: ({ icon, ...args }) => (
    <FAB {...args} icon={renderIcon(icon)} />
  ),
};
