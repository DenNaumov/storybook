import type { HTMLAttributes } from 'react';

import styles from './SvgIcon.module.css';

export interface SvgIconProps extends HTMLAttributes<HTMLSpanElement> {
  src: string;
  size?: number;
  color?: string;
  title?: string;
}

export const SvgIcon = ({
  src,
  size = 20,
  color = 'currentColor',
  title,
  className,
  style,
  ...props
}: SvgIconProps) => {
  const classes = [styles.icon, className].filter(Boolean).join(' ');

  return (
    <span
      className={classes}
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        WebkitMask: `url(${src}) no-repeat center / contain`,
        mask: `url(${src}) no-repeat center / contain`,
        ...style,
      }}
      role={title ? 'img' : undefined}
      aria-label={title}
      {...props}
    />
  );
};
