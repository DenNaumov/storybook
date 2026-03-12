import type { Meta, StoryObj } from '@storybook/react';
import { InlineButton } from './InlineButton';
import { ResizableIcon } from '../Icon/IconWrappers';
import { ResizableIcons, type ResizableIconKeys } from '../Icon/packs/resizable';

const resizableIconNames = Object.keys(ResizableIcons) as ResizableIconKeys[];
const resizableIconMapping = resizableIconNames.reduce<Record<ResizableIconKeys, JSX.Element>>(
    (acc, name) => {
        acc[name] = <ResizableIcon icon={name} size={24} />;
        return acc;
    },
    {} as Record<ResizableIconKeys, JSX.Element>
);

const meta: Meta<typeof InlineButton> = {
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
            mapping: resizableIconMapping,
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
type Story = StoryObj<typeof InlineButton>;

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
                <InlineButton variant="surface" icon={resizableIconMapping.CalendarRemove24} label="Сбросить" />
                <InlineButton variant="bezeled" icon={resizableIconMapping.CalendarRemove24} label="Сбросить" />
                <InlineButton variant="primary" icon={resizableIconMapping.CalendarRemove24} label="Сбросить" />
            </div>
        </div>
    ),
};

export const Playground: Story = {
    args: {
        label: 'Сбросить',
        icon: resizableIconMapping.CalendarRemove24,
        variant: 'surface',
        disabled: false,
    },
};
