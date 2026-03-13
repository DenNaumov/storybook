import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from './IconButton';
import { Icon24, ResizableIcon } from '../Icon/IconWrappers';
import { ResizableIcons, type ResizableIconKeys } from '../Icon/packs/resizable';

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
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#121212' }],
    },
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
    className: {
      table: { disable: true },
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
      <IconButton
        {...iconButtonArgs}
        icon={<ResizableIcon icon={icon} size={size} />}
      />
    );
  },
};

export const Showcase: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '120px 100px 100px',
      gap: '32px 60px',
      alignItems: 'center',
      padding: '40px',
      backgroundColor: '#121212',
      borderRadius: '24px',
      color: '#FFFFFF',
      fontFamily: 'sans-serif'
    }}>
      {/* Column Headers */}
      <div />
      <div style={{ textAlign: 'center', opacity: 0.6, fontSize: '12px' }}>ButtonSize=M</div>
      <div style={{ textAlign: 'center', opacity: 0.6, fontSize: '12px' }}>ButtonSize=S</div>

      {/* Row: IconSize=M */}
      <div style={{ gridColumn: '1 / 4', textAlign: 'center', margin: '16px 0', opacity: 0.8 }}>IconSize=M</div>

      <div style={{ opacity: 0.6 }}>Default</div>
      <center><IconButton icon={<ResizableIcon icon="Add01" size={24} />} buttonSize="m" iconSize="m" /></center>
      <center><IconButton icon={<ResizableIcon icon="Add01" size={24} />} buttonSize="s" iconSize="m" /></center>

      <div style={{ opacity: 0.6 }}>Pressed</div>
      <center><IconButton icon={<ResizableIcon icon="Add01" size={24} />} buttonSize="m" iconSize="m" pressed /></center>
      <center><IconButton icon={<ResizableIcon icon="Add01" size={24} />} buttonSize="s" iconSize="m" pressed /></center>

      <div style={{ opacity: 0.6 }}>Disabled</div>
      <center><IconButton icon={<ResizableIcon icon="Add01" size={24} />} buttonSize="m" iconSize="m" disabled /></center>
      <center><IconButton icon={<ResizableIcon icon="Add01" size={24} />} buttonSize="s" iconSize="m" disabled /></center>

      {/* Row: IconSize=S */}
      <div style={{ gridColumn: '1 / 4', textAlign: 'center', margin: '32px 0 16px', opacity: 0.8 }}>IconSize=S</div>

      <div style={{ opacity: 0.6 }}>Default</div>
      <center><IconButton icon={<ResizableIcon icon="Add01" size={20} />} buttonSize="m" iconSize="s" /></center>
      <center><IconButton icon={<ResizableIcon icon="Add01" size={20} />} buttonSize="s" iconSize="s" /></center>

      <div style={{ opacity: 0.6 }}>Pressed</div>
      <center><IconButton icon={<ResizableIcon icon="Add01" size={20} />} buttonSize="m" iconSize="s" pressed /></center>
      <center><IconButton icon={<ResizableIcon icon="Add01" size={20} />} buttonSize="s" iconSize="s" pressed /></center>

      <div style={{ opacity: 0.6 }}>Disabled</div>
      <center><IconButton icon={<ResizableIcon icon="Add01" size={20} />} buttonSize="m" iconSize="s" disabled /></center>
      <center><IconButton icon={<ResizableIcon icon="Add01" size={20} />} buttonSize="s" iconSize="s" disabled /></center>

      {/* Row: Badge */}
      <div style={{ gridColumn: '1 / 4', textAlign: 'center', margin: '32px 0 16px', opacity: 0.8 }}>Badge=Yes</div>

      <div style={{ opacity: 0.6 }}>Default</div>
      <center><IconButton icon={NotificationsIcon} buttonSize="m" iconSize="m" badgeCount="9" /></center>
      <div />

      <div style={{ opacity: 0.6 }}>Pressed</div>
      <center><IconButton icon={NotificationsIcon} buttonSize="m" iconSize="m" badgeCount="9" pressed /></center>
      <div />

      <div style={{ opacity: 0.6 }}>Disabled</div>
      <center><IconButton icon={NotificationsIcon} buttonSize="m" iconSize="m" badgeCount="9" disabled /></center>
      <div />
    </div>
  ),
};
