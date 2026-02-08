import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Typography, TypographyVariant } from './Typography';
import styles from './Typography.stories.module.css';

const meta = {
    title: 'UI Kit/Typography',
    component: Typography,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: [
                'title3-regular', 'title3-semibold', 'title3-bold',
                'headline-regular', 'headline-semibold', 'headline-bold',
                'text-regular', 'text-medium', 'text-semibold', 'text-bold',
                'subheadline1-regular', 'subheadline1-semibold', 'subheadline1-bold',
                'subheadline2-regular', 'subheadline2-semibold', 'subheadline2-bold',
                'caption1-regular', 'caption1-semibold', 'caption1-bold',
                'caption2-regular', 'caption2-semibold', 'caption2-bold',
            ],
            description: 'Typography variant (size + weight)',
        },
        color: {
            control: 'select',
            options: ['default', 'primary', 'secondary', 'success', 'error', 'warning'],
            description: 'Text color',
        },
        align: {
            control: 'radio',
            options: ['left', 'center', 'right'],
            description: 'Text alignment',
        },
        as: {
            control: 'select',
            options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'div', 'label'],
            description: 'HTML element to render',
        },
        truncate: {
            control: 'boolean',
            description: 'Truncate overflowing text with ellipsis',
        },
        nowrap: {
            control: 'boolean',
            description: 'Prevent text from wrapping',
        },
    },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

/* ========================
   HELPERS & COMPONENTS
   ======================== */

interface VariantCardProps {
    variant: TypographyVariant;
    label: string;
    specs: string;
}

const VariantCard = ({ variant, label, specs }: VariantCardProps) => (
    <div className={styles.card}>
        <Typography variant={variant} as="p">{label}</Typography>
        <Typography variant="text-regular" color="secondary" as="p" className={styles.specs}>
            {specs}
        </Typography>
    </div>
);

const Section = ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <div className={className || styles.grid3}>{children}</div>
);

/* ========================
   INDIVIDUAL STORIES
   ======================== */

// Title 3
export const Title3Regular: Story = { args: { children: 'Title 3 · Regular', variant: 'title3-regular' } };
export const Title3Semibold: Story = { args: { children: 'Title 3 · Semibold', variant: 'title3-semibold' } };
export const Title3Bold: Story = { args: { children: 'Title 3 · Bold', variant: 'title3-bold' } };

// Headline
export const HeadlineRegular: Story = { args: { children: 'Headline · Regular', variant: 'headline-regular' } };
export const HeadlineSemibold: Story = { args: { children: 'Headline · Semibold', variant: 'headline-semibold' } };
export const HeadlineBold: Story = { args: { children: 'Headline · Bold', variant: 'headline-bold' } };

// Text
export const TextRegular: Story = { args: { children: 'Text · Regular', variant: 'text-regular' } };
export const TextMedium: Story = { args: { children: 'Text · Medium', variant: 'text-medium' } };
export const TextSemibold: Story = { args: { children: 'Text · Semibold', variant: 'text-semibold' } };
export const TextBold: Story = { args: { children: 'Text · Bold', variant: 'text-bold' } };

// Subheadline 1
export const Subheadline1Regular: Story = { args: { children: 'Subheadline 1 · Regular', variant: 'subheadline1-regular' } };
export const Subheadline1Semibold: Story = { args: { children: 'Subheadline 1 · Semibold', variant: 'subheadline1-semibold' } };
export const Subheadline1Bold: Story = { args: { children: 'Subheadline 1 · Bold', variant: 'subheadline1-bold' } };

// Subheadline 2
export const Subheadline2Regular: Story = { args: { children: 'Subheadline 2 · Regular', variant: 'subheadline2-regular' } };
export const Subheadline2Semibold: Story = { args: { children: 'Subheadline 2 · Semibold', variant: 'subheadline2-semibold' } };
export const Subheadline2Bold: Story = { args: { children: 'Subheadline 2 · Bold', variant: 'subheadline2-bold' } };

// Caption 1
export const Caption1Regular: Story = { args: { children: 'Caption 1 · Regular', variant: 'caption1-regular' } };
export const Caption1Semibold: Story = { args: { children: 'Caption 1 · Semibold', variant: 'caption1-semibold' } };
export const Caption1Bold: Story = { args: { children: 'Caption 1 · Bold', variant: 'caption1-bold' } };

// Caption 2
export const Caption2Regular: Story = { args: { children: 'Caption 2 · Regular', variant: 'caption2-regular' } };
export const Caption2Semibold: Story = { args: { children: 'Caption 2 · Semibold', variant: 'caption2-semibold' } };
export const Caption2Bold: Story = { args: { children: 'Caption 2 · Bold', variant: 'caption2-bold' } };

/* ========================
   VARIANT SHOWCASES
   ======================== */

export const AllTitle3Variants: Story = {
    render: () => (
        <div className={styles.container}>
            <VariantCard variant="title3-regular" label="Title 3 · Regular" specs="font-size: 20px; font-weight: 400;" />
            <VariantCard variant="title3-semibold" label="Title 3 · Semibold" specs="font-size: 20px; font-weight: 600;" />
            <VariantCard variant="title3-bold" label="Title 3 · Bold" specs="font-size: 20px; font-weight: 700;" />
        </div>
    ),
};

export const AllHeadlineVariants: Story = {
    render: () => (
        <div className={styles.container}>
            <VariantCard variant="headline-regular" label="Headline · Regular" specs="font-size: 19px; font-weight: 400;" />
            <VariantCard variant="headline-semibold" label="Headline · Semibold" specs="font-size: 19px; font-weight: 600;" />
            <VariantCard variant="headline-bold" label="Headline · Bold" specs="font-size: 19px; font-weight: 700;" />
        </div>
    ),
};

export const AllTextVariants: Story = {
    render: () => (
        <div className={styles.container}>
            <VariantCard variant="text-regular" label="Text · Regular" specs="font-size: 17px; font-weight: 400;" />
            <VariantCard variant="text-medium" label="Text · Medium" specs="font-size: 17px; font-weight: 500;" />
            <VariantCard variant="text-semibold" label="Text · Semibold" specs="font-size: 17px; font-weight: 600;" />
            <VariantCard variant="text-bold" label="Text · Bold" specs="font-size: 17px; font-weight: 700;" />
        </div>
    ),
};

export const FullTypographyShowcase: Story = {
    render: () => (
        <div className={styles.showcase}>
            <Section>
                <VariantCard variant="title3-regular" label="Title 3" specs="20px / 25px\nRegular (400)\n-0.45px" />
                <VariantCard variant="title3-semibold" label="Title 3" specs="20px / 25px\nSemibold (600)\n-0.45px" />
                <VariantCard variant="title3-bold" label="Title 3" specs="20px / 25px\nBold (700)\n-0.45px" />
            </Section>

            <Section>
                <VariantCard variant="headline-regular" label="Headline" specs="19px / 24px\nRegular (400)\n-0.45px" />
                <VariantCard variant="headline-semibold" label="Headline" specs="19px / 24px\nSemibold (600)\n-0.45px" />
                <VariantCard variant="headline-bold" label="Headline" specs="19px / 24px\nBold (700)\n-0.45px" />
            </Section>

            <Section className={styles.grid4}>
                <VariantCard variant="text-regular" label="Text" specs="17px / 22px\nRegular (400)\n-0.4px" />
                <VariantCard variant="text-medium" label="Text" specs="17px / 22px\nMedium (500)\n-0.4px" />
                <VariantCard variant="text-semibold" label="Text" specs="17px / 22px\nSemibold (600)\n-0.4px" />
                <VariantCard variant="text-bold" label="Text" specs="17px / 22px\nBold (700)\n-0.4px" />
            </Section>

            <Section>
                <VariantCard variant="subheadline1-regular" label="Subheadline 1" specs="16px / 21px\nRegular (400)\n-0.23px" />
                <VariantCard variant="subheadline1-semibold" label="Subheadline 1" specs="16px / 21px\nSemibold (600)\n-0.23px" />
                <VariantCard variant="subheadline1-bold" label="Subheadline 1" specs="16px / 21px\nBold (700)\n-0.23px" />
            </Section>

            <Section>
                <VariantCard variant="subheadline2-regular" label="Subheadline 2" specs="15px / 20px\nRegular (400)\n-0.23px" />
                <VariantCard variant="subheadline2-semibold" label="Subheadline 2" specs="15px / 20px\nSemibold (600)\n-0.23px" />
                <VariantCard variant="subheadline2-bold" label="Subheadline 2" specs="15px / 20px\nBold (700)\n-0.23px" />
            </Section>

            <Section>
                <VariantCard variant="caption1-regular" label="Caption 1" specs="13px / 16px\nRegular (400)\n-0.08px" />
                <VariantCard variant="caption1-semibold" label="Caption 1" specs="13px / 16px\nSemibold (600)\n-0.08px" />
                <VariantCard variant="caption1-bold" label="Caption 1" specs="13px / 16px\nBold (700)\n-0.08px" />
            </Section>

            <Section>
                <VariantCard variant="caption2-regular" label="Caption 2" specs="10px / 13px\nRegular (400)\n0.06px" />
                <VariantCard variant="caption2-semibold" label="Caption 2" specs="10px / 13px\nSemibold (600)\n0.06px" />
                <VariantCard variant="caption2-bold" label="Caption 2" specs="10px / 13px\nBold (700)\n0.06px" />
            </Section>
        </div>
    ),
};

export const ColorPalette: Story = {
    render: () => (
        <div className={styles.palette}>
            <Typography variant="headline-semibold" color="default">Default Color (#333333)</Typography>
            <Typography variant="headline-semibold" color="primary">Primary Color (#007AFF)</Typography>
            <Typography variant="headline-semibold" color="secondary">Secondary Color (#8E8E93)</Typography>
            <Typography variant="headline-semibold" color="success">Success Color (#34C759)</Typography>
            <Typography variant="headline-semibold" color="error">Error Color (#FF3B30)</Typography>
            <Typography variant="headline-semibold" color="warning">Warning Color (#FF9500)</Typography>
        </div>
    ),
};

export const TruncatedText: Story = {
    args: {
        children: 'This is a very long text that will be truncated with an ellipsis because it exceeds the available width of its container element',
        variant: 'text-regular',
        truncate: true,
    },
    decorators: [
        (Story) => (
            <div className={styles.truncateWrapper}>
                <Story />
            </div>
        ),
    ],
};
