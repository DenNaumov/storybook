import type { ReactNode } from "react";
import styles from "./story-preview-frame.module.css";

interface StoryPreviewFrameProps {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
  headerClassName?: string;
}

const joinClasses = (...classNames: Array<string | undefined>) =>
  classNames.filter(Boolean).join(" ");

export const StoryPreviewFrame = ({
  title,
  description,
  children,
  className,
  headerClassName,
}: StoryPreviewFrameProps) => (
  <div className={joinClasses(styles.previewFrame, className)}>
    <div className={joinClasses(styles.frameHeader, headerClassName)}>
      <div className={styles.frameContent}>
        <h1 className={styles.heading}>{title}</h1>
        {description ? <p className={styles.lead}>{description}</p> : null}
      </div>
      <div className={styles.divider} />
    </div>

    {children}
  </div>
);
