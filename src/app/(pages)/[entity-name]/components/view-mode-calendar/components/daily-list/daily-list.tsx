import { Typography } from "@/shared/ui-kit/typography/typography";
import type { EntityElementViewModel } from "@/lib/app/services/entityElementTypes";
import styles from "./daily-list.module.css";
import { EntityElementCard } from "../entity-element-card/entity-element-card";
import { groupItemsByHour } from "./daily-list.utils";

interface DailyListProps {
  items: EntityElementViewModel[];
}

export const DailyList = ({ items }: DailyListProps) => {
  const groupedItems = groupItemsByHour(items);

  return (
    <section className={styles.list} aria-label="Задачи на выбранный день">
      {groupedItems.map(([time, hourItems]) => (
        <div className={styles.hourGroup} key={time}>
          <Typography variant="headline-bold">{time}</Typography>
          <div className={styles.cards}>
            {hourItems.map((item) => (
              <EntityElementCard key={item.id} item={item.rawItem} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};
