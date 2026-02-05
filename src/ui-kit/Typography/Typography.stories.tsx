import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Typography } from './Typography';

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
                'title3-regular',
                'title3-semibold',
                'title3-bold',
                'headline-regular',
                'headline-semibold',
                'headline-bold',
                'text-regular',
                'text-medium',
                'text-semibold',
                'text-bold',
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
   TITLE 3 VARIANTS
   ======================== */

export const Title3Regular: Story = {
    args: {
        children: 'Title 3 · Regular',
        variant: 'title3-regular',
    },
};

export const Title3Semibold: Story = {
    args: {
        children: 'Title 3 · Semibold',
        variant: 'title3-semibold',
    },
};

export const Title3Bold: Story = {
    args: {
        children: 'Title 3 · Bold',
        variant: 'title3-bold',
    },
};

/* ========================
   HEADLINE VARIANTS
   ======================== */

export const HeadlineRegular: Story = {
    args: {
        children: 'Headline · Regular',
        variant: 'headline-regular',
    },
};

export const HeadlineSemibold: Story = {
    args: {
        children: 'Headline · Semibold',
        variant: 'headline-semibold',
    },
};

export const HeadlineBold: Story = {
    args: {
        children: 'Headline · Bold',
        variant: 'headline-bold',
    },
};

/* ========================
   TEXT VARIANTS
   ======================== */

export const TextRegular: Story = {
    args: {
        children: 'Text · Regular',
        variant: 'text-regular',
    },
};

export const TextMedium: Story = {
    args: {
        children: 'Text · Medium',
        variant: 'text-medium',
    },
};

export const TextSemibold: Story = {
    args: {
        children: 'Text · Semibold',
        variant: 'text-semibold',
    },
};

export const TextBold: Story = {
    args: {
        children: 'Text · Bold',
        variant: 'text-bold',
    },
};

/* ========================
   COLOR VARIANTS
   ======================== */

export const ColorPrimary: Story = {
    args: {
        children: 'Primary Color',
        variant: 'headline-semibold',
        color: 'primary',
    },
};

export const ColorSecondary: Story = {
    args: {
        children: 'Secondary Color',
        variant: 'headline-semibold',
        color: 'secondary',
    },
};

export const ColorSuccess: Story = {
    args: {
        children: 'Success Color',
        variant: 'text-medium',
        color: 'success',
    },
};

export const ColorError: Story = {
    args: {
        children: 'Error Color',
        variant: 'text-medium',
        color: 'error',
    },
};

/* ========================
   ALL VARIANTS SHOWCASE
   ======================== */

export const AllTitle3Variants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '24px', background: '#fff', borderRadius: '12px', border: '1px dashed #ccc' }}>
            <div>
                <Typography variant="title3-regular" as="p">Title 3 · Regular</Typography>
                <Typography variant="text-regular" color="secondary" as="p">
                    font-family: "SF Pro"; font-size: 20px; font-weight: 400; line-height: 25px; letter-spacing: -0.45px;
                </Typography>
            </div>
            <div>
                <Typography variant="title3-semibold" as="p">Title 3 · Semibold</Typography>
                <Typography variant="text-regular" color="secondary" as="p">
                    font-family: "SF Pro"; font-size: 20px; font-weight: 600; line-height: 25px; letter-spacing: -0.45px;
                </Typography>
            </div>
            <div>
                <Typography variant="title3-bold" as="p">Title 3 · Bold</Typography>
                <Typography variant="text-regular" color="secondary" as="p">
                    font-family: "SF Pro"; font-size: 20px; font-weight: 700; line-height: 25px; letter-spacing: -0.45px;
                </Typography>
            </div>
        </div>
    ),
};

export const AllHeadlineVariants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '24px', background: '#fff', borderRadius: '12px', border: '1px dashed #ccc' }}>
            <div>
                <Typography variant="headline-regular" as="p">Headline · Regular</Typography>
                <Typography variant="text-regular" color="secondary" as="p">
                    font-family: "SF Pro"; font-size: 19px; font-weight: 400; line-height: 24px; letter-spacing: -0.45px;
                </Typography>
            </div>
            <div>
                <Typography variant="headline-semibold" as="p">Headline · Semibold</Typography>
                <Typography variant="text-regular" color="secondary" as="p">
                    font-family: "SF Pro"; font-size: 19px; font-weight: 600; line-height: 24px; letter-spacing: -0.45px;
                </Typography>
            </div>
            <div>
                <Typography variant="headline-bold" as="p">Headline · Bold</Typography>
                <Typography variant="text-regular" color="secondary" as="p">
                    font-family: "SF Pro"; font-size: 19px; font-weight: 700; line-height: 24px; letter-spacing: -0.45px;
                </Typography>
            </div>
        </div>
    ),
};

export const AllTextVariants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '24px', background: '#fff', borderRadius: '12px', border: '1px dashed #ccc' }}>
            <div>
                <Typography variant="text-regular" as="p">Text · Regular</Typography>
                <Typography variant="text-regular" color="secondary" as="p">
                    font-family: "SF Pro"; font-size: 17px; font-weight: 400; line-height: 22px; letter-spacing: -0.4px;
                </Typography>
            </div>
            <div>
                <Typography variant="text-medium" as="p">Text · Medium</Typography>
                <Typography variant="text-regular" color="secondary" as="p">
                    font-family: "SF Pro"; font-size: 17px; font-weight: 500; line-height: 22px; letter-spacing: -0.4px;
                </Typography>
            </div>
            <div>
                <Typography variant="text-semibold" as="p">Text · Semibold</Typography>
                <Typography variant="text-regular" color="secondary" as="p">
                    font-family: "SF Pro"; font-size: 17px; font-weight: 600; line-height: 22px; letter-spacing: -0.4px;
                </Typography>
            </div>
            <div>
                <Typography variant="text-bold" as="p">Text · Bold</Typography>
                <Typography variant="text-regular" color="secondary" as="p">
                    font-family: "SF Pro"; font-size: 17px; font-weight: 700; line-height: 22px; letter-spacing: -0.4px;
                </Typography>
            </div>
        </div>
    ),
};

export const FullTypographyShowcase: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '32px', maxWidth: '800px' }}>
            {/* Title 3 Section */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
                <div style={{ padding: '16px', border: '1px dashed #1890ff', borderRadius: '8px' }}>
                    <Typography variant="title3-regular" as="h3">Title 3 · Regular</Typography>
                    <Typography variant="text-regular" color="secondary" as="p" style={{ marginTop: '8px' }}>
                        font-size: 20px;<br />
                        font-weight: 400;<br />
                        line-height: 25px;<br />
                        letter-spacing: -0.45px;
                    </Typography>
                </div>
                <div style={{ padding: '16px', border: '1px dashed #1890ff', borderRadius: '8px' }}>
                    <Typography variant="title3-semibold" as="h3">Title 3 · Semibold</Typography>
                    <Typography variant="text-regular" color="secondary" as="p" style={{ marginTop: '8px' }}>
                        font-size: 20px;<br />
                        font-weight: 600;<br />
                        line-height: 25px;<br />
                        letter-spacing: -0.45px;
                    </Typography>
                </div>
                <div style={{ padding: '16px', border: '1px dashed #1890ff', borderRadius: '8px' }}>
                    <Typography variant="title3-bold" as="h3">Title 3 · Bold</Typography>
                    <Typography variant="text-regular" color="secondary" as="p" style={{ marginTop: '8px' }}>
                        font-size: 20px;<br />
                        font-weight: 700;<br />
                        line-height: 25px;<br />
                        letter-spacing: -0.45px;
                    </Typography>
                </div>
            </div>

            {/* Headline Section */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
                <div style={{ padding: '16px', border: '1px dashed #1890ff', borderRadius: '8px' }}>
                    <Typography variant="headline-regular" as="h4">Headline · Regular</Typography>
                    <Typography variant="text-regular" color="secondary" as="p" style={{ marginTop: '8px' }}>
                        font-size: 19px;<br />
                        font-weight: 400;<br />
                        line-height: 24px;<br />
                        letter-spacing: -0.45px;
                    </Typography>
                </div>
                <div style={{ padding: '16px', border: '1px dashed #1890ff', borderRadius: '8px' }}>
                    <Typography variant="headline-semibold" as="h4">Headline · Semibold</Typography>
                    <Typography variant="text-regular" color="secondary" as="p" style={{ marginTop: '8px' }}>
                        font-size: 19px;<br />
                        font-weight: 600;<br />
                        line-height: 24px;<br />
                        letter-spacing: -0.45px;
                    </Typography>
                </div>
                <div style={{ padding: '16px', border: '1px dashed #1890ff', borderRadius: '8px' }}>
                    <Typography variant="headline-bold" as="h4">Headline · Bold</Typography>
                    <Typography variant="text-regular" color="secondary" as="p" style={{ marginTop: '8px' }}>
                        font-size: 19px;<br />
                        font-weight: 700;<br />
                        line-height: 24px;<br />
                        letter-spacing: -0.45px;
                    </Typography>
                </div>
            </div>

            {/* Text Section */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
                <div style={{ padding: '16px', border: '1px dashed #1890ff', borderRadius: '8px' }}>
                    <Typography variant="text-regular" as="p">Text · Regular</Typography>
                    <Typography variant="text-regular" color="secondary" as="p" style={{ marginTop: '8px' }}>
                        font-size: 17px;<br />
                        font-weight: 400;<br />
                        line-height: 22px;<br />
                        letter-spacing: -0.4px;
                    </Typography>
                </div>
                <div style={{ padding: '16px', border: '1px dashed #1890ff', borderRadius: '8px' }}>
                    <Typography variant="text-medium" as="p">Text · Medium</Typography>
                    <Typography variant="text-regular" color="secondary" as="p" style={{ marginTop: '8px' }}>
                        font-size: 17px;<br />
                        font-weight: 500;<br />
                        line-height: 22px;<br />
                        letter-spacing: -0.4px;
                    </Typography>
                </div>
                <div style={{ padding: '16px', border: '1px dashed #1890ff', borderRadius: '8px' }}>
                    <Typography variant="text-semibold" as="p">Text · Semibold</Typography>
                    <Typography variant="text-regular" color="secondary" as="p" style={{ marginTop: '8px' }}>
                        font-size: 17px;<br />
                        font-weight: 600;<br />
                        line-height: 22px;<br />
                        letter-spacing: -0.4px;
                    </Typography>
                </div>
                <div style={{ padding: '16px', border: '1px dashed #1890ff', borderRadius: '8px' }}>
                    <Typography variant="text-bold" as="p">Text · Bold</Typography>
                    <Typography variant="text-regular" color="secondary" as="p" style={{ marginTop: '8px' }}>
                        font-size: 17px;<br />
                        font-weight: 700;<br />
                        line-height: 22px;<br />
                        letter-spacing: -0.4px;
                    </Typography>
                </div>
            </div>
        </div>
    ),
};

export const ColorPalette: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '24px' }}>
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
            <div style={{ width: '300px' }}>
                <Story />
            </div>
        ),
    ],
};
