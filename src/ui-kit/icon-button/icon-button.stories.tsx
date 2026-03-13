import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs';
import { IconButton } from './icon-button';
import { Icon24, ResizableIcon } from '../icon/icon-wrappers';
import { ResizableIcons, type ResizableIconKeys } from '../icon/packs/resizable';

const resizableIconNames = Object.keys(ResizableIcons) as ResizableIconKeys[];

const iconSizeToPixels: Record<'s' | 'm', number> = {
  s: 20,
  m: 24,
};

type IconButtonStoryArgs = Omit<ComponentProps<typeof IconButton>, 'icon'> & {
  icon: ResizableIconKeys;
};

const meta: Meta<IconButtonStoryArgs> = {
  title: 'UI Kit/IconButton',
  component: IconButton,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    buttonSize: {
      control: 'select',
      options: ['s', 'm'],
    },
    iconSize: {
      control: 'select',
      options: ['s', 'm'],
    },
    icon: {
      control: 'select',
      options: resizableIconNames,
    },
    badgeCount: {
      control: 'text',
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
type Story = StoryObj<IconButtonStoryArgs>;

const NotificationsIcon = <Icon24 icon="Notifications" size={24} />;

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
  gridTemplateColumns: '120px 100px 100px',
  gap: '32px 60px',
  alignItems: 'center',
  padding: '40px',
  backgroundColor: 'var(--theme-bg-brand-light)',
  border: '1px solid var(--theme-border-default)',
  borderRadius: '24px',
  color: 'var(--theme-text-primary)',
  fontFamily: 'sans-serif',
} as const;

const headerCellStyle = {
  textAlign: 'center',
  color: 'var(--theme-text-secondary)',
  fontSize: '12px',
} as const;

const sectionLabelStyle = {
  gridColumn: '1 / 4',
  textAlign: 'center',
  margin: '16px 0',
  color: 'var(--theme-text-secondary)',
} as const;

const sectionLabelWideStyle = {
  gridColumn: '1 / 4',
  textAlign: 'center',
  margin: '32px 0 16px',
  color: 'var(--theme-text-secondary)',
} as const;

const rowLabelStyle = {
  color: 'var(--theme-text-secondary)',
} as const;

const centeredStyle = {
  display: 'flex',
  justifyContent: 'center',
} as const;

export const Playground: Story = {
  args: {
    icon: 'Add01',
    buttonSize: 'm',
    iconSize: 'm',
    badgeCount: undefined,
  },
  render: (args: IconButtonStoryArgs) => {
    const { icon, ...iconButtonArgs } = args;
    const size = iconSizeToPixels[args.iconSize ?? 'm'];
    return (
      <div style={stageStyle}>
        <div style={surfaceStyle}>
          <div />
          <div style={headerCellStyle}>Playground</div>
          <div style={centeredStyle}>
            <IconButton
              {...iconButtonArgs}
              icon={<ResizableIcon icon={icon} size={size} />}
            />
          </div>
        </div>
      </div>
    );
  },
};

export const Showcase: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={stageStyle}>
      <div style={surfaceStyle}>
        <div />
        <div style={headerCellStyle}>ButtonSize=M</div>
        <div style={headerCellStyle}>ButtonSize=S</div>

        <div style={sectionLabelStyle}>IconSize=M</div>

        <div style={rowLabelStyle}>Default</div>
        <div style={centeredStyle}><IconButton icon={<ResizableIcon icon="Add01" size={24} />} buttonSize="m" iconSize="m" /></div>
        <div style={centeredStyle}><IconButton icon={<ResizableIcon icon="Add01" size={24} />} buttonSize="s" iconSize="m" /></div>

        <div style={rowLabelStyle}>Pressed</div>
        <div style={centeredStyle}><IconButton icon={<ResizableIcon icon="Add01" size={24} />} buttonSize="m" iconSize="m" pressed /></div>
        <div style={centeredStyle}><IconButton icon={<ResizableIcon icon="Add01" size={24} />} buttonSize="s" iconSize="m" pressed /></div>

        <div style={rowLabelStyle}>Disabled</div>
        <div style={centeredStyle}><IconButton icon={<ResizableIcon icon="Add01" size={24} />} buttonSize="m" iconSize="m" disabled /></div>
        <div style={centeredStyle}><IconButton icon={<ResizableIcon icon="Add01" size={24} />} buttonSize="s" iconSize="m" disabled /></div>

        <div style={sectionLabelWideStyle}>IconSize=S</div>

        <div style={rowLabelStyle}>Default</div>
        <div style={centeredStyle}><IconButton icon={<ResizableIcon icon="Add01" size={20} />} buttonSize="m" iconSize="s" /></div>
        <div style={centeredStyle}><IconButton icon={<ResizableIcon icon="Add01" size={20} />} buttonSize="s" iconSize="s" /></div>

        <div style={rowLabelStyle}>Pressed</div>
        <div style={centeredStyle}><IconButton icon={<ResizableIcon icon="Add01" size={20} />} buttonSize="m" iconSize="s" pressed /></div>
        <div style={centeredStyle}><IconButton icon={<ResizableIcon icon="Add01" size={20} />} buttonSize="s" iconSize="s" pressed /></div>

        <div style={rowLabelStyle}>Disabled</div>
        <div style={centeredStyle}><IconButton icon={<ResizableIcon icon="Add01" size={20} />} buttonSize="m" iconSize="s" disabled /></div>
        <div style={centeredStyle}><IconButton icon={<ResizableIcon icon="Add01" size={20} />} buttonSize="s" iconSize="s" disabled /></div>

        <div style={sectionLabelWideStyle}>Badge=Yes</div>

        <div style={rowLabelStyle}>Default</div>
        <div style={centeredStyle}><IconButton icon={NotificationsIcon} buttonSize="m" iconSize="m" badgeCount="9" /></div>
        <div />

        <div style={rowLabelStyle}>Pressed</div>
        <div style={centeredStyle}><IconButton icon={NotificationsIcon} buttonSize="m" iconSize="m" badgeCount="9" pressed /></div>
        <div />

        <div style={rowLabelStyle}>Disabled</div>
        <div style={centeredStyle}><IconButton icon={NotificationsIcon} buttonSize="m" iconSize="m" badgeCount="9" disabled /></div>
        <div />
      </div>
    </div>
  ),
};
