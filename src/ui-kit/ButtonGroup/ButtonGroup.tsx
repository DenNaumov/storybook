import type { ReactNode, HTMLAttributes } from 'react';
import styles from './ButtonGroup.module.css';

export type ButtonGroupDirection = 'vertical' | 'horizontal' | 'inline' | 'chips';

export interface ButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
    /** Layout direction */
    direction?: ButtonGroupDirection;
    /** Add padding around the group (8px 16px) */
    withSpacing?: boolean;
    /** Gap between items (default 12px based on spec) */
    gap?: 12 | 0;
    /** Group contents (Buttons) */
    children: ReactNode;
    /** Optional additional class names */
    className?: string;
}

/**
 * ButtonGroup component to layout multiple buttons.
 * Supports Figma specs for Vertical, Horizontal, Inline, and Chips layouts.
 */
export const ButtonGroup = ({
    direction = 'vertical',
    withSpacing = false,
    gap = 12,
    children,
    className,
    ...props
}: ButtonGroupProps) => {
    const classes = [
        styles.buttonGroup,
        direction === 'inline' ? styles.inlineHorizontal :
            direction === 'chips' ? styles.chipsHorizontal :
                styles[direction],
        withSpacing ? styles.withSpacing : '',
        gap === 12 ? styles.gap12 : '',
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <div className={classes} {...props}>
            {children}
        </div>
    );
};
