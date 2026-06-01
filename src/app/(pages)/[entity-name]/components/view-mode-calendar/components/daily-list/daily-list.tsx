import { Typography } from "@/shared/ui-kit/typography/typography";
import styles from "./daily-list.module.css";
import { EntityElementCard } from "../entity-element-card/entity-element-card";
import type { TaskItem } from "../../calendar-view.types";
import { groupTasksByHour } from "./daily-list.utils";

interface DailyListProps {
  tasks: TaskItem[];
}

export const DailyList = ({ tasks }: DailyListProps) => {
  const groupedTasks = groupTasksByHour(tasks);

  return (
    <section className={styles.timeline} aria-label="Задачи на выбранный день">
      {groupedTasks.map(([time, items]) => (
        <div className={styles.hourGroup} key={time}>
          <div className={styles.hourTime}>
            <Typography variant="headline-bold">{time}</Typography>
          </div>
          <div className={styles.cards}>
            {items.map((item) => (
              <EntityElementCard key={item.rawItem.id} item={item.rawItem} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};
