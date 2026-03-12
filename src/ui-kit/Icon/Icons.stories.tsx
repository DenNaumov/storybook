import type { Meta, StoryObj } from '@storybook/react';
import { Icon16, Icon20, Icon24, Icon28, ResizableIcon } from './IconWrappers';
import { Icon16Icons, type Icon16IconKeys } from './packs/16';
import { Icon20Icons, type Icon20IconKeys } from './packs/20';
import { Icon24Icons, type Icon24IconKeys } from './packs/24';
import { Icon28Icons, type Icon28IconKeys } from './packs/28';
import { ResizableIcons, type ResizableIconKeys } from './packs/resizable';

const meta: Meta = {
    title: 'UI Kit/Icons',
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'dark',
            values: [{ name: 'dark', value: '#0F0F0F' }],
        },
    },
};

export default meta;

const icons16 = Object.keys(Icon16Icons) as Icon16IconKeys[];
const icons20 = Object.keys(Icon20Icons) as Icon20IconKeys[];
const icons24 = Object.keys(Icon24Icons) as Icon24IconKeys[];
const icons28 = Object.keys(Icon28Icons) as Icon28IconKeys[];
const iconsResizable = Object.keys(ResizableIcons) as ResizableIconKeys[];

const listStyles = {
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap' as const,
        gap: '12px',
        padding: '28px',
        color: '#FFFFFF',
        fontFamily: 'sans-serif',
        backgroundColor: '#0F0F0F',
        borderRadius: '12px',
        width: 'min(1100px, 90vw)',
    },
    row: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '8px 10px',
        borderRadius: '8px',
        backgroundColor: 'rgba(255,255,255,0.04)',
        minWidth: '220px',
        flex: '1 1 220px',
    },
    name: {
        fontSize: '12px',
        opacity: 0.7,
        flex: 1,
        textAlign: 'left' as const,
        whiteSpace: 'nowrap' as const,
        overflow: 'hidden' as const,
        textOverflow: 'ellipsis' as const,
    },
    icon: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '28px',
    },
};

export const Pack16: StoryObj = {
    render: () => (
        <div style={listStyles.wrapper}>
            {icons16.map((name) => (
                <div key={name} style={listStyles.row}>
                    <span style={listStyles.icon}><Icon16 icon={name} /></span>
                    <span style={listStyles.name}>{name}</span>
                </div>
            ))}
        </div>
    ),
};

export const Pack20: StoryObj = {
    render: () => (
        <div style={listStyles.wrapper}>
            {icons20.map((name) => (
                <div key={name} style={listStyles.row}>
                    <span style={listStyles.icon}><Icon20 icon={name} /></span>
                    <span style={listStyles.name}>{name}</span>
                </div>
            ))}
        </div>
    ),
};

export const Pack24: StoryObj = {
    render: () => (
        <div style={listStyles.wrapper}>
            {icons24.map((name) => (
                <div key={name} style={listStyles.row}>
                    <span style={listStyles.icon}><Icon24 icon={name} /></span>
                    <span style={listStyles.name}>{name}</span>
                </div>
            ))}
        </div>
    ),
};

export const Pack28: StoryObj = {
    render: () => (
        <div style={listStyles.wrapper}>
            {icons28.map((name) => (
                <div key={name} style={listStyles.row}>
                    <span style={listStyles.icon}><Icon28 icon={name} /></span>
                    <span style={listStyles.name}>{name}</span>
                </div>
            ))}
        </div>
    ),
};

export const CustomColor: StoryObj = {
    args: {
        color: '#2990FF'
    },
    render: (args: any) => (
        <div style={{ display: 'flex', gap: '20px', padding: '40px', color: args.color }}>
            <Icon16 icon="Check" color={args.color} />
            <Icon16 icon="Cancel" color={args.color} />
            <Icon16 icon="ChevronRight" color={args.color} />
        </div>
    )
};

export const Resizable: StoryObj = {
    render: () => (
        <div style={listStyles.wrapper}>
            {iconsResizable.map((name) => (
                <div key={name} style={listStyles.row}>
                    <span style={listStyles.icon}><ResizableIcon icon={name} size={22} /></span>
                    <span style={listStyles.icon}><ResizableIcon icon={name} size={30} color="#2990FF" /></span>
                    <span style={listStyles.name}>{name}</span>
                </div>
            ))}
        </div>
    )
};
