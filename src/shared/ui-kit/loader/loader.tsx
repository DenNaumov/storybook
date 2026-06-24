import type { HTMLAttributes } from "react";
import LoaderIconSmall from "./assets/loader_24.svg";
import LoaderIconMedium from "./assets/loader_28.svg";
import LoaderIconLarge from "./assets/loader_32.svg";
import styles from "./loader.module.css";

export type LoaderSize = "small" | "medium" | "large";

export interface LoaderProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "children"
> {
  size?: LoaderSize;
}

const sizeMap: Record<LoaderSize, string> = {
  small: styles.sizeSmall,
  medium: styles.sizeMedium,
  large: styles.sizeLarge,
};

export const Loader = ({
  size = "medium",
  className = "",
  ...props
}: LoaderProps) => (
  <div
    className={[styles.container, className].filter(Boolean).join(" ")}
    {...props}
  >
    <span
      className={[styles.loader, sizeMap[size]].join(" ")}
      role="status"
      aria-label="Загрузка"
    >
      <span className={styles.icon} aria-hidden="true">
        <LoaderGlyph size={size} />
      </span>
    </span>
  </div>
);

const LoaderGlyph = ({ size }: { size: LoaderSize }) => {
  if (size === "small") {
    return <LoaderIconSmall />;
  }

  if (size === "large") {
    return <LoaderIconLarge />;
  }

  return <LoaderIconMedium />;
};
