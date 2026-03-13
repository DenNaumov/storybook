import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs';
import { FAB } from './fab';
import { ResizableIcon } from '../icon/icon-wrappers';
import { ResizableIcons, type ResizableIconKeys } from '../icon/packs/resizable';

const resizableIconNames = Object.keys(ResizableIcons) as ResizableIconKeys[];

type FABStoryArgs = Omit<ComponentProps<typeof FAB>, 'icon'> & {
  icon?: ResizableIconKeys | 'Нет';
};

const meta: Meta<FABStoryArgs> = {
  title: 'UI Kit/FAB',
  component: FAB,
  parameters: {
    layout: 'fullscreen',
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

const stageStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  minHeight: '100vh',
  padding: '48px 56px 80px',
  backgroundColor: 'var(--theme-bg-tabbar)',
} as const;

const surfaceStyle = {
  display: 'grid',
  gridTemplateColumns: '120px 100px 100px 100px',
  gap: '24px 40px',
  alignItems: 'center',
  padding: '40px',
  backgroundColor: 'var(--theme-bg-brand-light)',
  border: '1px solid var(--theme-border-default)',
  borderRadius: '24px',
  color: 'var(--theme-text-primary)',
  fontFamily: 'sans-serif',
} as const;

const mutedLabelStyle = {
  textAlign: 'center',
  color: 'var(--theme-text-secondary)',
} as const;

const rowLabelStyle = {
  color: 'var(--theme-text-secondary)',
} as const;

const centeredStyle = {
  display: 'flex',
  justifyContent: 'center',
} as const;

export const Showcase: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={stageStyle}>
      <div style={surfaceStyle}>
        <div />
        <div style={mutedLabelStyle}>Primary</div>
        <div style={mutedLabelStyle}>Bezeled</div>
        <div style={mutedLabelStyle}>White</div>

        <div style={rowLabelStyle}>Default</div>
        <div style={centeredStyle}>
          <FAB variant="primary" icon={renderIcon('Add01')} />
        </div>
        <div style={centeredStyle}>
          <FAB variant="bezeled" icon={renderIcon('Add01')} />
        </div>
        <div style={centeredStyle}>
          <FAB variant="white" icon={renderIcon('Add01')} />
        </div>

        <div style={rowLabelStyle}>Pressed</div>
        <div style={centeredStyle}>
          <FAB variant="primary" icon={renderIcon('Add01')} pressed />
        </div>
        <div style={centeredStyle}>
          <FAB variant="bezeled" icon={renderIcon('Add01')} pressed />
        </div>
        <div style={centeredStyle}>
          <FAB variant="white" icon={renderIcon('Add01')} pressed />
        </div>
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
  render: (args: FABStoryArgs) => {
    const { icon, ...fabArgs } = args;
    return (
      <div style={stageStyle}>
        <div style={surfaceStyle}>
          <div />
          <div style={mutedLabelStyle}>Playground</div>
          <div />
          <div style={centeredStyle}>
            <FAB {...fabArgs} icon={renderIcon(icon)} />
          </div>
        </div>
      </div>
    );
  },
};
