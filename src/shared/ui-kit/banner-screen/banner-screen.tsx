import type { HTMLAttributes, ReactNode } from "react";
import { Button, type ButtonVariant } from "../button/button";
import { Typography } from "../typography/typography";
import styles from "./banner-screen.module.css";

export interface BannerScreenProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "title" | "children"
> {
  title: ReactNode;
  description?: ReactNode;
  media?: ReactNode;
  actionLabel?: string;
  onAction?: () => void;
  actionVariant?: ButtonVariant;
}

export const BannerScreen = ({
  title,
  description,
  media,
  actionLabel,
  onAction,
  actionVariant = "primary",
  className = "",
  ...props
}: BannerScreenProps) => {
  return (
    <section
      className={[styles.bannerScreen, className].filter(Boolean).join(" ")}
      {...props}
    >
      {media ? <div className={styles.media}>{media}</div> : null}

      <div className={styles.body}>
        <Typography
          as="h3"
          variant="headline-semibold"
          align="center"
          className={styles.title}
          style={{ color: "var(--theme-text-primary)" }}
        >
          {title}
        </Typography>

        {description ? (
          <Typography
            as="p"
            variant="subheadline1-regular"
            align="center"
            className={styles.description}
            color="secondary"
          >
            {description}
          </Typography>
        ) : null}
      </div>

      {actionLabel ? (
        <div className={styles.action}>
          <Button
            variant={actionVariant}
            size="m"
            label={actionLabel}
            onClick={onAction}
          />
        </div>
      ) : null}
    </section>
  );
};
