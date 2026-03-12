import type { Meta, StoryObj } from '@storybook/react';
import { Icon16, Icon20, Icon24, Icon28, ResizableIcon } from './IconWrappers';
import { Icon16Icons, type Icon16IconKeys } from './packs/16';
import { Icon20Icons, type Icon20IconKeys } from './packs/20';
import { Icon24Icons, type Icon24IconKeys } from './packs/24';
import { Icon28Icons, type Icon28IconKeys } from './packs/28';

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

export const Pack16: StoryObj = {
    render: () => (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))',
            gap: '24px',
            padding: '40px',
            color: '#FFFFFF',
            fontFamily: 'sans-serif',
            backgroundColor: '#0F0F0F',
            borderRadius: '12px'
        }}>
            {icons16.map((name) => (
                <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                    <Icon16 icon={name} />
                    <span style={{ fontSize: '10px', opacity: 0.6 }}>{name}</span>
                </div>
            ))}
        </div>
    ),
};

export const Pack20: StoryObj = {
    render: () => (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))',
            gap: '24px',
            padding: '40px',
            color: '#FFFFFF',
            fontFamily: 'sans-serif',
            backgroundColor: '#0F0F0F',
            borderRadius: '12px'
        }}>
            {icons20.map((name) => (
                <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                    <Icon20 icon={name} />
                    <span style={{ fontSize: '10px', opacity: 0.6 }}>{name}</span>
                </div>
            ))}
        </div>
    ),
};

export const Pack24: StoryObj = {
    render: () => (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))',
            gap: '24px',
            padding: '40px',
            color: '#FFFFFF',
            fontFamily: 'sans-serif',
            backgroundColor: '#0F0F0F',
            borderRadius: '12px'
        }}>
            {icons24.map((name) => (
                <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                    <Icon24 icon={name} />
                    <span style={{ fontSize: '10px', opacity: 0.6 }}>{name}</span>
                </div>
            ))}
        </div>
    ),
};

export const Pack28: StoryObj = {
    render: () => (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))',
            gap: '24px',
            padding: '40px',
            color: '#FFFFFF',
            fontFamily: 'sans-serif',
            backgroundColor: '#0F0F0F',
            borderRadius: '12px'
        }}>
            {icons28.map((name) => (
                <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                    <Icon28 icon={name} />
                    <span style={{ fontSize: '10px', opacity: 0.6 }}>{name}</span>
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
        <div style={{ padding: '40px' }}>
            <ResizableIcon size={64} color="#2990FF">
                <path fillRule="evenodd" clipRule="evenodd" d="M14.1827 3.32544C14.6058 3.75935 14.6058 4.46287 14.1827 4.89679L6.59937 12.6746C6.1763 13.1085 5.49037 13.1085 5.0673 12.6746L1.8173 9.34123C1.39423 8.90731 1.39423 8.2038 1.8173 7.76988C2.24037 7.33597 2.9263 7.33597 3.34937 7.76988L5.83333 10.3175L12.6506 3.32544C13.0737 2.89152 13.7596 2.89152 14.1827 3.32544Z" fill="currentColor" />
            </ResizableIcon>
        </div>
    )
};
