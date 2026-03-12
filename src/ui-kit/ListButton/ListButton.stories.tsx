import type { Meta, StoryObj } from '@storybook/react';
import { ListButton } from './ListButton';

const meta: Meta<typeof ListButton> = {
    title: 'UI Kit/ListButton',
    component: ListButton,
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'dark',
            values: [{ name: 'dark', value: '#121212' }],
        },
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ListButton>;

const UserPlusIcon = (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C14.2142e-01 16.9217 0 17.9391 0 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 8V14M17 11H23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const Default: Story = {
    args: {
        label: 'Button_text',
        startIcon: UserPlusIcon,
    },
};

export const AllStates: Story = {
    render: () => (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            width: '320px',
            padding: '24px',
            backgroundColor: '#121212',
            borderRadius: '24px'
        }}>
            {/* With Icon */}
            <ListButton label="Button_text" startIcon={UserPlusIcon} />
            <ListButton label="Button_text" startIcon={UserPlusIcon} disabled />
            <ListButton label="Button_text" startIcon={UserPlusIcon} pressed />

            {/* Without Icon */}
            <ListButton label="Button_text" />
            <ListButton label="Button_text" disabled />
            <ListButton label="Button_text" pressed />
        </div>
    ),
};
