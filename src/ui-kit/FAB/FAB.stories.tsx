import type { Meta, StoryObj } from '@storybook/react';
import { FAB } from './FAB';

const meta: Meta<typeof FAB> = {
    title: 'UI Kit/FAB',
    component: FAB,
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'dark',
            values: [
                { name: 'dark', value: '#121212' },
                { name: 'light', value: '#F5F5F7' },
            ],
        },
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'bezeled', 'white'],
        },
        pressed: {
            control: 'boolean',
        },
    },
};

export default meta;
type Story = StoryObj<typeof FAB>;

export const Default: Story = {
    args: {
        variant: 'primary',
    },
};

const PlusIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const AllVariants: Story = {
    render: () => (
        <div style={{
            display: 'grid',
            gridTemplateColumns: '120px 100px 100px 100px',
            gap: '24px 40px',
            alignItems: 'center',
            padding: '60px',
            backgroundColor: '#121212',
            borderRadius: '24px',
            color: '#FFFFFF',
            fontFamily: 'sans-serif'
        }}>
            {/* Header Row */}
            <div />
            <div style={{ textAlign: 'center', opacity: 0.8 }}>Primary</div>
            <div style={{ textAlign: 'center', opacity: 0.8 }}>Bezeled</div>
            <div style={{ textAlign: 'center', opacity: 0.8 }}>White</div>

            {/* Default Stat Row */}
            <div style={{ opacity: 0.8 }}>Default</div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <FAB variant="primary" icon={PlusIcon} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <FAB variant="bezeled" icon={PlusIcon} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <FAB variant="white" icon={PlusIcon} />
            </div>

            {/* Pressed State Row */}
            <div style={{ opacity: 0.8 }}>Pressed</div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <FAB variant="primary" icon={PlusIcon} pressed />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <FAB variant="bezeled" icon={PlusIcon} pressed />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <FAB variant="white" icon={PlusIcon} pressed />
            </div>
        </div>
    ),
};

export const Primary: Story = {
    args: {
        variant: 'primary',
        icon: PlusIcon,
    },
};

export const Bezeled: Story = {
    args: {
        variant: 'bezeled',
        icon: PlusIcon,
    },
};

export const White: Story = {
    args: {
        variant: 'white',
        icon: PlusIcon,
    },
};
