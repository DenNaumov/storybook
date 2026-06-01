import { Typography } from "@/shared/ui-kit/typography/typography";
import styles from "./daily-list.module.css";
import { EntityElementCard } from "../entity-element-card/entity-element-card";
import type { EntityElementViewModel } from "../../calendar-view.types";
import { groupItemsByHour } from "./daily-list.utils";

interface DailyListProps {
  items: EntityElementViewModel[];
}

export const DailyList = ({ items }: DailyListProps) => {
  const groupedItems = groupItemsByHour(items);

  return (
    <section className={styles.timeline} aria-label="Задачи на выбранный день">
      {groupedItems.map(([time, hourItems]) => (
        <div className={styles.hourGroup} key={time}>
          <div className={styles.hourTime}>
            <Typography variant="headline-bold">{time}</Typography>
          </div>
          <div className={styles.cards}>
            {hourItems.map((item) => (
              <EntityElementCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};
