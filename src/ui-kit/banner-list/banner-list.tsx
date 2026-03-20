import type {
  ButtonHTMLAttributes,
  HTMLAttributes,
  ReactNode,
} from "react";
import { Icon20, ResizableIcon } from "../icon/icon-wrappers";
import { Typography } from "../typography/typography";
import styles from "./banner-list.module.css";

export interface BannerListProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "title" | "children"
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
  const headerContent = (
    <>
      <span className={styles.icon} aria-hidden="true">
        {icon ?? (
          <ResizableIcon
            icon="InformationCircle"
            size={24}
            color="var(--theme-text-brand-main)"
          />
        )}
      </span>

      <div className={styles.content}>
        <Typography
          as="span"
          variant="subheadline1-semibold"
          className={styles.title}
          style={{ color: "var(--theme-text-primary)" }}
        >
          {title}
        </Typography>

        {description ? (
          <Typography
            as="span"
            variant="subheadline1-regular"
            className={styles.description}
            color="secondary"
          >
            {description}
          </Typography>
        ) : null}
      </div>

      {isCollapsible ? (
        <span className={styles.chevron} aria-hidden="true">
          <Icon20
            icon={expanded ? "ChevronUp" : "ChevronDown"}
            size={20}
            color="var(--theme-text-secondary)"
          />
        </span>
      ) : null}
    </>
  );

  return (
    <section
      className={[styles.bannerList, className].filter(Boolean).join(" ")}
      {...props}
    >
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

      {expanded && details ? <div className={styles.details}>{details}</div> : null}
    </section>
  );
};
