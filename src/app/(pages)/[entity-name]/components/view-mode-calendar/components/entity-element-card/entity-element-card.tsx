import { Typography } from "@/shared/ui-kit/typography/typography";
import type { EntityObjectType } from "@/lib/app/services/entityElementTypes";
import styles from "./entity-element-card.module.css";

interface EntityElementCardProps {
  item: EntityObjectType;
}

const toneClassMap = {
  new: styles.chipnew,
  progress: styles.chipprogress,
  review: styles.chipreview,
  important: styles.chipimportant,
} as const;

const getToneClass = (tone: unknown) => {
  switch (tone) {
    case "new":
    case "progress":
    case "review":
    case "important":
      return toneClassMap[tone];
    default:
      return "";
  }
};

const PriorityMark = ({ priority }: { priority: unknown }) => (
  <span
    className={priority === "high" ? styles.fireHigh : styles.fireDefault}
    aria-label={priority === "high" ? "Высокий приоритет" : "Обычный приоритет"}
  >
    ♨
  </span>
);

export const EntityElementCard = ({ item }: EntityElementCardProps) => (
  <article className={styles.taskCard}>
    <div className={styles.cardHeader}>
      <Typography
        as="h2"
        variant="headline-regular"
        className={styles.taskTitle}
      >
        {item.name}
      </Typography>
      <PriorityMark priority={item.priority} />
    </div>

    <div className={styles.metaBlock}>
      <Typography variant="subheadline1-regular" color="#a7a7a7">
        Крайний срок
      </Typography>
      <time dateTime={item.finalDate} className={styles.metaValue}>
        <Typography variant="text-regular">{item.dueAt}</Typography>
      </time>
    </div>

    {item.tags ? (
      <div className={styles.metaBlock}>
        <Typography variant="subheadline1-regular" color="#a7a7a7">
          Метки
        </Typography>
        <div className={styles.chipRow}>
          {item.tags.map((tag) => (
            <Typography
              variant="text-regular"
              className={`${styles.chip} ${getToneClass(tag.tone)}`}
              key={tag.label}
            >
              <span className={styles.alertMark} aria-hidden>
                !
              </span>
              {tag.label}
            </Typography>
          ))}
        </div>
      </div>
    ) : null}

    <div className={styles.metaBlock}>
      <Typography variant="subheadline1-regular" color="#a7a7a7">
        Стадия
      </Typography>
        <Typography
          variant="text-regular"
          className={`${styles.chip} ${getToneClass(item.stage.tone)}`}
        >
          {item.stage.label}
        </Typography>
      </div>
  </article>
);
