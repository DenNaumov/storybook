import type { Meta, StoryObj } from '@storybook/react';
import { InlineButton } from './InlineButton';
import { ResizableIcon } from '../Icon/IconWrappers';

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
        disabled: {
            control: 'boolean',
        },
    },
};

export default meta;
type Story = StoryObj<typeof InlineButton>;

const CalendarRemoveIcon = <ResizableIcon icon="CalendarRemove24" size={24} />;

export const Default: Story = {
    args: {
        label: 'Сбросить',
        icon: CalendarRemoveIcon,
        variant: 'surface',
    },
};

export const Showcase: Story = {
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
                <InlineButton variant="surface" icon={CalendarRemoveIcon} label="Сбросить" />
                <InlineButton variant="bezeled" icon={CalendarRemoveIcon} label="Сбросить" />
                <InlineButton variant="primary" icon={CalendarRemoveIcon} label="Сбросить" />
            </div>
        </div>
    ),
};
