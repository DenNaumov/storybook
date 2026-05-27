import { Typography } from "@/shared/ui-kit/typography/typography";
import styles from "./view-mode-calendar.module.css";
import type { CalendarDay } from "./calendar-view.types";

interface CalendarWeekStripProps {
  monthLabel: string;
  weekDays: CalendarDay[];
  onPrevWeek: () => void;
  onNextWeek: () => void;
  onSelectDay: (dateKey: string) => void;
}

export const CalendarWeekStrip = ({
  monthLabel,
  weekDays,
  onPrevWeek,
  onNextWeek,
  onSelectDay,
}: CalendarWeekStripProps) => (
  <section className={styles.calendarCard} aria-label="Неделя">
    <div className={styles.calendarTopline}>
      <button className={styles.monthButton} type="button">
        <Typography as="span" variant="title3-bold" className={styles.monthLabel}>
          {monthLabel}
        </Typography>
        <span aria-hidden>▾</span>
      </button>
      <div className={styles.monthNav}>
        <button
          className={styles.navButton}
          type="button"
          aria-label="Предыдущая неделя"
          onClick={onPrevWeek}
        >
          <span aria-hidden>‹</span>
        </button>
        <button
          className={styles.navButton}
          type="button"
          aria-label="Следующая неделя"
          onClick={onNextWeek}
        >
          <span aria-hidden>›</span>
        </button>
      </div>
    </div>

    <ol className={styles.dayGrid}>
      {weekDays.map((item) => (
        <li
          className={[
            styles.day,
            item.isSelected ? styles.daySelected : "",
            item.isToday ? styles.dayToday : "",
          ].join(" ")}
          key={item.id}
        >
          <button
            className={styles.dayButton}
            type="button"
            onClick={() => onSelectDay(item.dateKey)}
            aria-pressed={item.isSelected}
          >
            <Typography
              as="span"
              variant="subheadline2-regular"
              className={item.isWeekend ? styles.weekend : styles.weekday}
            >
              {item.weekday}
            </Typography>
            <Typography as="span" variant="headline-regular">
              {item.dayNumber}
            </Typography>
          </button>
        </li>
      ))}
    </ol>
  </section>
);
