import type { HTMLAttributes } from "react";
import { LoaderIcon24 } from "./loader-icon-24";
import { LoaderIcon28 } from "./loader-icon-28";
import { LoaderIcon32 } from "./loader-icon-32";
import styles from "./loader.module.css";

export type LoaderSize = "small" | "medium" | "large";

export interface LoaderProps extends Omit<
  HTMLAttributes<HTMLSpanElement>,
  "children"
> {
  size?: LoaderSize;
  label?: string;
}

export const Loader = ({
  size = "medium",
  label = "Загрузка",
  ...props
}: LoaderProps) => (
  <span
    className={[styles.loader, styles[`size${capitalize(size)}`]].join(" ")}
    role="status"
    aria-label={label}
    {...props}
  >
    <span className={styles.icon} aria-hidden="true">
      <LoaderGlyph size={size} />
    </span>
  </span>
);

const capitalize = (value: string) =>
  value.charAt(0).toUpperCase() + value.slice(1);

const LoaderGlyph = ({ size }: { size: LoaderSize }) => {
  if (size === "small") {
    return <LoaderIcon24 />;
  }

  if (size === "large") {
    return <LoaderIcon32 />;
  }

  return <LoaderIcon28 />;
};
