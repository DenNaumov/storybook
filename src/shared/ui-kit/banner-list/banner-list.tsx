import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";
import { Icon20Icons } from "../icon/packs/20";
import { ResizableIcons } from "../icon/packs/resizable";
import { Typography } from "../typography/typography";
import styles from "./banner-list.module.css";

export interface BannerListProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "title" | "children" | "onToggle"
> {
  title: ReactNode;
  description?: ReactNode;
  details?: ReactNode;
  expanded?: boolean;
  collapsible?: boolean;
  icon?: ReactNode;
  onToggle?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
  toggleAriaLabel?: string;
}

export const BannerList = ({
  title,
  description,
  details,
  expanded = false,
  collapsible,
  icon,
  onToggle,
  toggleAriaLabel = "Переключить баннер",
  className = "",
  ...props
}: BannerListProps) => {
  const isCollapsible = collapsible ?? Boolean(details || onToggle);
  const rootClassName = [
    styles.bannerList,
    isCollapsible ? styles.collapsible : styles.static,
    expanded ? styles.expanded : styles.collapsed,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const headerContent = (
    <>
      <span className={styles.icon} aria-hidden="true">
        {icon ?? (
          <ResizableIcons.InformationCircle
            width={24}
            height={24}
            color="brandMain"
          />
        )}
      </span>

      <div className={styles.content}>
        <Typography
          as="span"
          variant="subheadline2-semibold"
          className={styles.title}
          color="primary"
        >
          {title}
        </Typography>

        {description ? (
          <Typography
            as="span"
            variant="subheadline2-regular"
            className={styles.description}
            color="secondary"
          >
            {description}
          </Typography>
        ) : null}
      </div>

      {isCollapsible ? (
        <span className={styles.chevron} aria-hidden="true">
          {expanded ? (
            <Icon20Icons.ChevronUp
              width={24}
              height={24}
              color="default"
            />
          ) : (
            <Icon20Icons.ChevronDown
              width={24}
              height={24}
              color="default"
            />
          )}
        </span>
      ) : null}
    </>
  );

  return (
    <section className={rootClassName} {...props}>
      {isCollapsible ? (
        <button
          type="button"
          className={styles.toggle}
          aria-expanded={expanded}
          aria-label={toggleAriaLabel}
          onClick={onToggle}
        >
          {headerContent}
        </button>
      ) : (
        <div className={styles.header}>{headerContent}</div>
      )}

      {expanded && details ? (
        <div className={styles.details}>{details}</div>
      ) : null}
    </section>
  );
};
