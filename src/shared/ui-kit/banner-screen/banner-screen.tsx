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
  actionVariant = "primary",
  onAction,
  className = "",
  ...props
}: BannerScreenProps) => {
  return (
    <section
      className={[styles.bannerScreen, className].filter(Boolean).join(" ")}
      {...props}
    >
      {media && <div className={styles.media}>{media}</div>}

      <div className={styles.body}>
        <Typography
          as="h3"
          variant="headline-semibold"
          align="center"
          className={styles.title}
          color="primary"
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

      {onAction && (
        <div className={styles.action}>
          <Button
            variant={actionVariant}
            size="m"
            label={actionLabel}
            onClick={onAction}
          />
        </div>
      )}
    </section>
  );
};
