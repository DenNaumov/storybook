import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from './IconButton';
import { ResizableIcon } from '../Icon/IconWrappers';
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

const NotificationIcon = (size: number) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6981 21.5547 10.4458 21.3031 10.27 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const Playground: Story = {
    args: {
        icon: 'Add01',
        buttonSize: 'm',
        iconSize: 'm',
        badgeCount: undefined,
    },
    render: (args) => {
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
            <center><IconButton icon={NotificationIcon(24)} buttonSize="m" iconSize="m" badgeCount="9" /></center>
            <div />

            <div style={{ opacity: 0.6 }}>Pressed</div>
            <center><IconButton icon={NotificationIcon(24)} buttonSize="m" iconSize="m" badgeCount="9" pressed /></center>
            <div />

            <div style={{ opacity: 0.6 }}>Disabled</div>
            <center><IconButton icon={NotificationIcon(24)} buttonSize="m" iconSize="m" badgeCount="9" disabled /></center>
            <div />
        </div>
    ),
};
