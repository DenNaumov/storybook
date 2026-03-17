"use client";

import { useEffect } from "react";
import type { CSSProperties, HTMLAttributes } from "react";
import { DotLottieReact, setWasmUrl } from "@lottiefiles/dotlottie-react";
import {
  illustrationSrcMap,
  type IllustrationName,
} from "./illustration.constants";
import styles from "./illustration.module.css";

export interface IllustrationProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "children"
> {
  illustration: IllustrationName;
  size?: number;
  autoplay?: boolean;
  loop?: boolean;
  label?: string;
}

export const Illustration = ({
  illustration,
  size = 184,
  autoplay = true,
  loop = true,
  label,
  className = "",
  style,
  ...props
}: IllustrationProps) => {
  useEffect(() => {
    setWasmUrl("/dotlottie-player.wasm");
  }, []);

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
        autoplay={autoplay}
        loop={loop}
        className={styles.player}
      />
    </div>
  );
};
