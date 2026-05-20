import styles from "./skeleton.module.css";

export interface SkeletonProps {
  width?: number | string;
  height?: number | string;
  borderRadius?: number;
}

export const Skeleton = ({
  width,
  height,
  borderRadius = 12,
}: SkeletonProps) => {
  return (
    <div className={styles.skeleton} style={{ width, height, borderRadius }} />
  );
};
