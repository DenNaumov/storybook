import type { HTMLAttributes } from "react";
import { resolveSvgComponent } from "../icon/icon-wrappers";
import LoaderIcon24Svg from "./loader_24.svg";
import LoaderIcon28Svg from "./loader_28.svg";
import LoaderIcon32Svg from "./loader_32.svg";
import styles from "./loader.module.css";

// Resolve SVG components at the module level to satisfy the linter.
const LoaderIconSmall = resolveSvgComponent(LoaderIcon24Svg);
const LoaderIconMedium = resolveSvgComponent(LoaderIcon28Svg);
const LoaderIconLarge = resolveSvgComponent(LoaderIcon32Svg);

export type LoaderSize = "small" | "medium" | "large";

export interface LoaderProps extends Omit<
  HTMLAttributes<HTMLSpanElement>,
  "children"
> {
  size?: LoaderSize;
}

const sizeMap: Record<LoaderSize, string> = {
  small: styles.sizeSmall,
  medium: styles.sizeMedium,
  large: styles.sizeLarge,
};

export const Loader = ({ size = "medium", ...props }: LoaderProps) => (
  <span
    className={[styles.loader, sizeMap[size]].join(" ")}
    role="status"
    aria-label="Загрузка"
    {...props}
  >
    <span className={styles.icon} aria-hidden="true">
      <LoaderGlyph size={size} />
    </span>
  </span>
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
