import type { Meta, StoryObj } from '@storybook/react';
import { InlineButton } from './InlineButton';

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

const CalendarIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 2V5M16 2V5M3 9H21M5 4H19C20.1046 4 21 4.89543 21 6V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V6C3 4.89543 3.89543 4 5 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 14L10 18M10 14L14 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const Default: Story = {
    args: {
        label: 'Сбросить',
        icon: CalendarIcon,
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
                <InlineButton variant="surface" icon={CalendarIcon} label="Сбросить" />
                <InlineButton variant="bezeled" icon={CalendarIcon} label="Сбросить" />
                <InlineButton variant="primary" icon={CalendarIcon} label="Сбросить" />
            </div>
        </div>
    ),
};
