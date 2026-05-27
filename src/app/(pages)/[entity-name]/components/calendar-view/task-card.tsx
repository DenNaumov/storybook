import { Typography } from "@/shared/ui-kit/typography/typography";
import styles from "./view-mode-calendar.module.css";
import type { TaskChip, TaskItem } from "./calendar-view.types";

interface TaskCardProps {
  task: TaskItem;
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

export const TaskCard = ({ task }: TaskCardProps) => (
  <article className={styles.taskGroup}>
    <Typography as="time" variant="headline-bold" className={styles.time}>
      {task.time}
    </Typography>
    <div className={styles.taskCard}>
      <div className={styles.cardHeader}>
        <Typography as="h2" variant="headline-regular" className={styles.taskTitle}>
          {task.title}
        </Typography>
        <PriorityMark priority={task.priority} />
      </div>

      <div className={styles.metaBlock}>
        <Typography as="span" variant="subheadline1-regular" className={styles.metaLabel}>
          Крайний срок
        </Typography>
        <Typography as="time" variant="text-regular" className={styles.metaValue}>
          {task.dueAt}
        </Typography>
      </div>

      {task.tags ? (
        <div className={styles.metaBlock}>
          <Typography as="span" variant="subheadline1-regular" className={styles.metaLabel}>
            Метки
          </Typography>
          <div className={styles.chipRow}>
            {task.tags.map((tag) => (
              <Typography
                as="span"
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
        <Typography as="span" variant="subheadline1-regular" className={styles.metaLabel}>
          Стадия
        </Typography>
        <Typography
          as="span"
          variant="text-regular"
          className={`${styles.chip} ${toneClassMap[task.stage.tone]}`}
        >
          {task.stage.label}
        </Typography>
      </div>
    </div>
  </article>
);
