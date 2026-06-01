import { Typography } from "@/shared/ui-kit/typography/typography";
import styles from "./entity-element-card.module.css";
import type { TaskChip, TaskItem } from "../../calendar-view.types";

interface EntityElementCardProps {
  item: TaskItem;
}

const toneClassMap: Record<TaskChip["tone"], string> = {
  new: styles.chipnew,
  progress: styles.chipprogress,
  review: styles.chipreview,
  important: styles.chipimportant,
};

const PriorityMark = ({ priority }: { priority: TaskItem["priority"] }) => (
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
        {item.title}
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
              className={`${styles.chip} ${toneClassMap[tag.tone]}`}
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
          className={`${styles.chip} ${toneClassMap[item.stage.tone]}`}
        >
          {item.stage.label}
        </Typography>
      </div>
  </article>
);
