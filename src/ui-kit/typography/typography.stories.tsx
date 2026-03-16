import type { Meta, StoryObj } from "@storybook/nextjs";
import { Typography, TypographyVariant } from "./typography";
import styles from "./typography.stories.module.css";

const meta = {
  title: "UI Kit/Typography",
  component: Typography,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    variant: "text-regular",
    children: "Typography",
  },
  argTypes: {
    variant: {
      control: "select",
      options: [
        "title3-regular",
        "title3-semibold",
        "title3-bold",
        "headline-regular",
        "headline-semibold",
        "headline-bold",
        "text-regular",
        "text-medium",
        "text-semibold",
        "text-bold",
        "subheadline1-regular",
        "subheadline1-semibold",
        "subheadline1-bold",
        "subheadline2-regular",
        "subheadline2-semibold",
        "subheadline2-bold",
        "caption1-regular",
        "caption1-semibold",
        "caption1-bold",
        "caption2-regular",
        "caption2-semibold",
        "caption2-bold",
      ],
      description: "Typography variant (size + weight)",
    },
    color: {
      control: "select",
      options: [
        "default",
        "primary",
        "secondary",
        "success",
        "error",
        "warning",
      ],
      description: "Text color",
    },
    align: {
      control: "radio",
      options: ["left", "center", "right"],
      description: "Text alignment",
    },
    as: {
      control: "select",
      options: [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "p",
        "span",
        "div",
        "label",
      ],
      description: "HTML element to render",
    },
    truncate: {
      control: "boolean",
      description: "Truncate overflowing text with ellipsis",
    },
    nowrap: {
      control: "boolean",
      description: "Prevent text from wrapping",
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

/* ========================
   HELPERS & COMPONENTS
   ======================== */

const variantMetadata: Record<
  string,
  {
    size: string;
    lh: string;
    spacing: string;
    weightLabel: string;
    weightValue: string;
  }
> = {
  "title3-regular": {
    size: "20px",
    lh: "25px",
    spacing: "-0.45px",
    weightLabel: "Regular",
    weightValue: "400",
  },
  "title3-semibold": {
    size: "20px",
    lh: "25px",
    spacing: "-0.45px",
    weightLabel: "Semibold",
    weightValue: "600",
  },
  "title3-bold": {
    size: "20px",
    lh: "25px",
    spacing: "-0.45px",
    weightLabel: "Bold",
    weightValue: "700",
  },
  "headline-regular": {
    size: "19px",
    lh: "24px",
    spacing: "-0.45px",
    weightLabel: "Regular",
    weightValue: "400",
  },
  "headline-semibold": {
    size: "19px",
    lh: "24px",
    spacing: "-0.45px",
    weightLabel: "Semibold",
    weightValue: "600",
  },
  "headline-bold": {
    size: "19px",
    lh: "24px",
    spacing: "-0.45px",
    weightLabel: "Bold",
    weightValue: "700",
  },
  "text-regular": {
    size: "17px",
    lh: "22px",
    spacing: "-0.4px",
    weightLabel: "Regular",
    weightValue: "400",
  },
  "text-medium": {
    size: "17px",
    lh: "22px",
    spacing: "-0.4px",
    weightLabel: "Medium",
    weightValue: "500",
  },
  "text-semibold": {
    size: "17px",
    lh: "22px",
    spacing: "-0.4px",
    weightLabel: "Semibold",
    weightValue: "600",
  },
  "text-bold": {
    size: "17px",
    lh: "22px",
    spacing: "-0.4px",
    weightLabel: "Bold",
    weightValue: "700",
  },
  "subheadline1-regular": {
    size: "16px",
    lh: "21px",
    spacing: "-0.23px",
    weightLabel: "Regular",
    weightValue: "400",
  },
  "subheadline1-semibold": {
    size: "16px",
    lh: "21px",
    spacing: "-0.23px",
    weightLabel: "Semibold",
    weightValue: "600",
  },
  "subheadline1-bold": {
    size: "16px",
    lh: "21px",
    spacing: "-0.23px",
    weightLabel: "Bold",
    weightValue: "700",
  },
  "subheadline2-regular": {
    size: "15px",
    lh: "20px",
    spacing: "-0.23px",
    weightLabel: "Regular",
    weightValue: "400",
  },
  "subheadline2-semibold": {
    size: "15px",
    lh: "20px",
    spacing: "-0.23px",
    weightLabel: "Semibold",
    weightValue: "600",
  },
  "subheadline2-bold": {
    size: "15px",
    lh: "20px",
    spacing: "-0.23px",
    weightLabel: "Bold",
    weightValue: "700",
  },
  "caption1-regular": {
    size: "13px",
    lh: "16px",
    spacing: "-0.08px",
    weightLabel: "Regular",
    weightValue: "400",
  },
  "caption1-semibold": {
    size: "13px",
    lh: "16px",
    spacing: "-0.08px",
    weightLabel: "Semibold",
    weightValue: "600",
  },
  "caption1-bold": {
    size: "13px",
    lh: "16px",
    spacing: "-0.08px",
    weightLabel: "Bold",
    weightValue: "700",
  },
  "caption2-regular": {
    size: "10px",
    lh: "13px",
    spacing: "0.06px",
    weightLabel: "Regular",
    weightValue: "400",
  },
  "caption2-semibold": {
    size: "10px",
    lh: "13px",
    spacing: "0.06px",
    weightLabel: "Semibold",
    weightValue: "600",
  },
  "caption2-bold": {
    size: "10px",
    lh: "13px",
    spacing: "0.06px",
    weightLabel: "Bold",
    weightValue: "700",
  },
};

interface VariantCardProps {
  variant: TypographyVariant;
  label?: string;
  specs?: string;
}

const VariantCard = ({ variant, label, specs }: VariantCardProps) => {
  const meta = variantMetadata[variant];

  // Format name: 'subheadline1' -> 'Subheadline 1'
  const namePart = variant.split("-")[0];
  const formattedName = namePart
    .replace(/(\d+)/, " $1")
    .replace(/^\w/, (c) => c.toUpperCase());

  const displayLabel = label || `${formattedName} ${meta?.weightLabel || ""}`;
  const displaySpecs =
    specs ||
    (meta
      ? `${meta.size} / ${meta.lh}\n${meta.weightLabel} (${meta.weightValue})\n${meta.spacing}`
      : "");

  return (
    <div className={styles.card}>
      <Typography variant={variant} as="p">
        {displayLabel}
      </Typography>
      <Typography
        variant="caption1-regular"
        color="secondary"
        as="p"
        className={styles.specs}
      >
        {displaySpecs}
      </Typography>
    </div>
  );
};

const Section = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={className || styles.grid3}>{children}</div>;

/* ========================
   INDIVIDUAL STORIES
   ======================== */

// Title 3
export const Title3Regular: Story = {
  args: { children: "Title 3 · Regular", variant: "title3-regular" },
};
export const Title3Semibold: Story = {
  args: { children: "Title 3 · Semibold", variant: "title3-semibold" },
};
export const Title3Bold: Story = {
  args: { children: "Title 3 · Bold", variant: "title3-bold" },
};

// Headline
export const HeadlineRegular: Story = {
  args: { children: "Headline · Regular", variant: "headline-regular" },
};
export const HeadlineSemibold: Story = {
  args: { children: "Headline · Semibold", variant: "headline-semibold" },
};
export const HeadlineBold: Story = {
  args: { children: "Headline · Bold", variant: "headline-bold" },
};

// Text
export const TextRegular: Story = {
  args: { children: "Text · Regular", variant: "text-regular" },
};
export const TextMedium: Story = {
  args: { children: "Text · Medium", variant: "text-medium" },
};
export const TextSemibold: Story = {
  args: { children: "Text · Semibold", variant: "text-semibold" },
};
export const TextBold: Story = {
  args: { children: "Text · Bold", variant: "text-bold" },
};

// Subheadline 1
export const Subheadline1Regular: Story = {
  args: {
    children: "Subheadline 1 · Regular",
    variant: "subheadline1-regular",
  },
};
export const Subheadline1Semibold: Story = {
  args: {
    children: "Subheadline 1 · Semibold",
    variant: "subheadline1-semibold",
  },
};
export const Subheadline1Bold: Story = {
  args: { children: "Subheadline 1 · Bold", variant: "subheadline1-bold" },
};

// Subheadline 2
export const Subheadline2Regular: Story = {
  args: {
    children: "Subheadline 2 · Regular",
    variant: "subheadline2-regular",
  },
};
export const Subheadline2Semibold: Story = {
  args: {
    children: "Subheadline 2 · Semibold",
    variant: "subheadline2-semibold",
  },
};
export const Subheadline2Bold: Story = {
  args: { children: "Subheadline 2 · Bold", variant: "subheadline2-bold" },
};

// Caption 1
export const Caption1Regular: Story = {
  args: { children: "Caption 1 · Regular", variant: "caption1-regular" },
};
export const Caption1Semibold: Story = {
  args: { children: "Caption 1 · Semibold", variant: "caption1-semibold" },
};
export const Caption1Bold: Story = {
  args: { children: "Caption 1 · Bold", variant: "caption1-bold" },
};

// Caption 2
export const Caption2Regular: Story = {
  args: { children: "Caption 2 · Regular", variant: "caption2-regular" },
};
export const Caption2Semibold: Story = {
  args: { children: "Caption 2 · Semibold", variant: "caption2-semibold" },
};
export const Caption2Bold: Story = {
  args: { children: "Caption 2 · Bold", variant: "caption2-bold" },
};

/* ========================
   VARIANT SHOWCASES
   ======================== */

export const AllTitle3Variants: Story = {
  render: () => (
    <div className={styles.container}>
      <Section>
        <VariantCard variant="title3-regular" />
        <VariantCard variant="title3-semibold" />
        <VariantCard variant="title3-bold" />
      </Section>
    </div>
  ),
};

export const AllHeadlineVariants: Story = {
  render: () => (
    <div className={styles.container}>
      <Section>
        <VariantCard variant="headline-regular" />
        <VariantCard variant="headline-semibold" />
        <VariantCard variant="headline-bold" />
      </Section>
    </div>
  ),
};

export const AllTextVariants: Story = {
  render: () => (
    <div className={styles.container}>
      <Section className={styles.grid4}>
        <VariantCard variant="text-regular" />
        <VariantCard variant="text-medium" />
        <VariantCard variant="text-semibold" />
        <VariantCard variant="text-bold" />
      </Section>
    </div>
  ),
};

export const AllSubheadline1Variants: Story = {
  render: () => (
    <div className={styles.container}>
      <Section>
        <VariantCard variant="subheadline1-regular" />
        <VariantCard variant="subheadline1-semibold" />
        <VariantCard variant="subheadline1-bold" />
      </Section>
    </div>
  ),
};

export const AllSubheadline2Variants: Story = {
  render: () => (
    <div className={styles.container}>
      <Section>
        <VariantCard variant="subheadline2-regular" />
        <VariantCard variant="subheadline2-semibold" />
        <VariantCard variant="subheadline2-bold" />
      </Section>
    </div>
  ),
};

export const AllCaption1Variants: Story = {
  render: () => (
    <div className={styles.container}>
      <Section>
        <VariantCard variant="caption1-regular" />
        <VariantCard variant="caption1-semibold" />
        <VariantCard variant="caption1-bold" />
      </Section>
    </div>
  ),
};

export const AllCaption2Variants: Story = {
  render: () => (
    <div className={styles.container}>
      <Section>
        <VariantCard variant="caption2-regular" />
        <VariantCard variant="caption2-semibold" />
        <VariantCard variant="caption2-bold" />
      </Section>
    </div>
  ),
};

export const FullTypographyShowcase: Story = {
  render: () => (
    <div className={styles.showcase}>
      <Section>
        <VariantCard variant="title3-regular" label="Title 3" />
        <VariantCard variant="title3-semibold" label="Title 3" />
        <VariantCard variant="title3-bold" label="Title 3" />
      </Section>

      <Section>
        <VariantCard variant="headline-regular" label="Headline" />
        <VariantCard variant="headline-semibold" label="Headline" />
        <VariantCard variant="headline-bold" label="Headline" />
      </Section>

      <Section className={styles.grid4}>
        <VariantCard variant="text-regular" label="Text" />
        <VariantCard variant="text-medium" label="Text" />
        <VariantCard variant="text-semibold" label="Text" />
        <VariantCard variant="text-bold" label="Text" />
      </Section>

      <Section>
        <VariantCard variant="subheadline1-regular" label="Subheadline 1" />
        <VariantCard variant="subheadline1-semibold" label="Subheadline 1" />
        <VariantCard variant="subheadline1-bold" label="Subheadline 1" />
      </Section>

      <Section>
        <VariantCard variant="subheadline2-regular" label="Subheadline 2" />
        <VariantCard variant="subheadline2-semibold" label="Subheadline 2" />
        <VariantCard variant="subheadline2-bold" label="Subheadline 2" />
      </Section>

      <Section>
        <VariantCard variant="caption1-regular" label="Caption 1" />
        <VariantCard variant="caption1-semibold" label="Caption 1" />
        <VariantCard variant="caption1-bold" label="Caption 1" />
      </Section>

      <Section>
        <VariantCard variant="caption2-regular" label="Caption 2" />
        <VariantCard variant="caption2-semibold" label="Caption 2" />
        <VariantCard variant="caption2-bold" label="Caption 2" />
      </Section>
    </div>
  ),
};

export const TruncatedText: Story = {
  args: {
    children:
      "This is a very long text that will be truncated with an ellipsis because it exceeds the available width of its container element",
    variant: "text-regular",
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
