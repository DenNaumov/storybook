import React from 'react';
import styles from './Typography.module.css';

/** Typography variant combining size and weight according to Figma design */
export type TypographyVariant =
    | 'title3-regular'
    | 'title3-semibold'
    | 'title3-bold'
    | 'headline-regular'
    | 'headline-semibold'
    | 'headline-bold'
    | 'text-regular'
    | 'text-medium'
    | 'text-semibold'
    | 'text-bold';

export interface TypographyProps {
    /** The text content to display */
    children?: React.ReactNode;
    /** Typography variant that defines the visual style (size + weight) */
    variant?: TypographyVariant;
    /** Color scheme for the text */
    color?: 'default' | 'primary' | 'secondary' | 'success' | 'error' | 'warning';
    /** Text alignment */
    align?: 'left' | 'center' | 'right';
    /** Truncate text with ellipsis */
    truncate?: boolean;
    /** Prevent text wrapping */
    nowrap?: boolean;
    /** HTML tag to render */
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div' | 'label';
    /** Additional CSS class names */
    className?: string;
    /** Inline styles */
    style?: React.CSSProperties;
}

/** Map variant prop to CSS module class name */
const variantClassMap: Record<TypographyVariant, string> = {
    'title3-regular': styles.title3Regular,
    'title3-semibold': styles.title3Semibold,
    'title3-bold': styles.title3Bold,
    'headline-regular': styles.headlineRegular,
    'headline-semibold': styles.headlineSemibold,
    'headline-bold': styles.headlineBold,
    'text-regular': styles.textRegular,
    'text-medium': styles.textMedium,
    'text-semibold': styles.textSemibold,
    'text-bold': styles.textBold,
};

/** Map color prop to CSS module class name */
const colorClassMap: Record<string, string> = {
    default: styles.colorDefault,
    primary: styles.colorPrimary,
    secondary: styles.colorSecondary,
    success: styles.colorSuccess,
    error: styles.colorError,
    warning: styles.colorWarning,
};

/** Map align prop to CSS module class name */
const alignClassMap: Record<string, string> = {
    left: styles.alignLeft,
    center: styles.alignCenter,
    right: styles.alignRight,
};

/** Typography component for consistent text styling based on Figma design system */
export const Typography = ({
    children,
    variant = 'text-regular',
    color = 'default',
    align = 'left',
    truncate = false,
    nowrap = false,
    as: Component = 'span',
    className = '',
    style,
}: TypographyProps) => {
    const classes = [
        styles.root,
        variantClassMap[variant],
        colorClassMap[color],
        alignClassMap[align],
        truncate && styles.truncate,
        nowrap && styles.nowrap,
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return <Component className={classes} style={style}>{children}</Component>;
};
