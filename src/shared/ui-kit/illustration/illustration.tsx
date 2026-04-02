"use client";

import type { CSSProperties, HTMLAttributes } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { configureDotLottieWasmUrl } from "@/shared/utils";
import {
  illustrationSrcMap,
  type IllustrationName,
} from "./illustration.constants";
import styles from "./illustration.module.css";

configureDotLottieWasmUrl();

export interface IllustrationProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "children"
> {
  illustration: IllustrationName;
  size?: number;
  label?: string;
}

export const Illustration = ({
  illustration,
  size = 184,
  label,
  className = "",
  style,
  ...props
}: IllustrationProps) => {
  const rootStyle = {
    width: size,
    height: size,
    ...style,
  } satisfies CSSProperties;

  return (
    <div
      className={[styles.illustration, className].filter(Boolean).join(" ")}
      style={rootStyle}
      aria-hidden={label ? undefined : "true"}
      aria-label={label}
      {...props}
    >
      <DotLottieReact
        src={illustrationSrcMap[illustration]}
        autoplay
        loop
        className={styles.player}
      />
    </div>
  );
};
