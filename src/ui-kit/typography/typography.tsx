import React from "react";
import styles from "./typography.module.css";

/** Typography variant combining size and weight according to Figma design */
export type TypographyVariant =
  | "title3-regular"
  | "title3-semibold"
  | "title3-bold"
  | "headline-regular"
  | "headline-semibold"
  | "headline-bold"
  | "text-regular"
  | "text-medium"
  | "text-semibold"
  | "text-bold"
  | "subheadline1-regular"
  | "subheadline1-semibold"
  | "subheadline1-bold"
  | "subheadline2-regular"
  | "subheadline2-semibold"
  | "subheadline2-bold"
  | "caption1-regular"
  | "caption1-semibold"
  | "caption1-bold"
  | "caption2-regular"
  | "caption2-semibold"
  | "caption2-bold";

export interface TypographyProps {
  children?: React.ReactNode;
  variant: TypographyVariant;
  color?: string;
  align?: "left" | "center" | "right";
  truncate?: boolean;
  nowrap?: boolean;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div" | "label";
  className?: string;
  style?: React.CSSProperties;
}

const variantClassMap: Record<TypographyVariant, string> = {
  "title3-regular": styles.title3Regular,
  "title3-semibold": styles.title3Semibold,
  "title3-bold": styles.title3Bold,
  "headline-regular": styles.headlineRegular,
  "headline-semibold": styles.headlineSemibold,
  "headline-bold": styles.headlineBold,
  "text-regular": styles.textRegular,
  "text-medium": styles.textMedium,
  "text-semibold": styles.textSemibold,
  "text-bold": styles.textBold,
  "subheadline1-regular": styles.subheadline1Regular,
  "subheadline1-semibold": styles.subheadline1Semibold,
  "subheadline1-bold": styles.subheadline1Bold,
  "subheadline2-regular": styles.subheadline2Regular,
  "subheadline2-semibold": styles.subheadline2Semibold,
  "subheadline2-bold": styles.subheadline2Bold,
  "caption1-regular": styles.caption1Regular,
  "caption1-semibold": styles.caption1Semibold,
  "caption1-bold": styles.caption1Bold,
  "caption2-regular": styles.caption2Regular,
  "caption2-semibold": styles.caption2Semibold,
  "caption2-bold": styles.caption2Bold,
};

const colorValueMap: Record<string, string> = {
  default: "var(--theme-text-primary)",
  primary: "var(--theme-text-brand-main)",
  secondary: "var(--theme-text-secondary)",
  success: "var(--theme-icon-success)",
  error: "var(--theme-text-error)",
  warning: "#ff9500",
};

const alignClassMap: Record<string, string> = {
  left: styles.alignLeft,
  center: styles.alignCenter,
  right: styles.alignRight,
};

export const Typography = ({
  children,
  variant,
  color = "default",
  align = "left",
  truncate = false,
  nowrap = false,
  as: Component = "span",
  className = "",
  style,
}: TypographyProps) => {
  const classes = [
    styles.root,
    variantClassMap[variant],
    alignClassMap[align],
    truncate && styles.truncate,
    nowrap && styles.nowrap,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const textColor = colorValueMap[color] || color;

  return (
    <Component className={classes} style={{ color: textColor, ...style }}>
      {children}
    </Component>
  );
};
