import { Icon24Icons } from "@/shared/ui-kit/icon";
import { IconButton } from "@/shared/ui-kit/icon-button/icon-button";
import { Typography } from "@/shared/ui-kit/typography/typography";
import styles from "./view-mode-calendar.module.css";
import type { CalendarDay } from "./calendar-view.types";

interface CalendarWeekStripProps {
  monthLabel: string;
  weekDays: CalendarDay[];
  onPrevWeek: () => void;
  onNextWeek: () => void;
  onSelectDay: (dateKey: string) => void;
  onOpenMonthPicker: () => void;
}

export const CalendarWeekStrip = ({
  monthLabel,
  weekDays,
  onPrevWeek,
  onNextWeek,
  onSelectDay,
  onOpenMonthPicker,
}: CalendarWeekStripProps) => (
  <section className={styles.calendarCard} aria-label="Неделя">
    <div className={styles.calendarTopline}>
      <button className={styles.monthButton} type="button" onClick={onOpenMonthPicker}>
        <Typography as="span" variant="title3-bold" className={styles.monthLabel}>
          {monthLabel}
        </Typography>
        <span aria-hidden>▾</span>
      </button>
      <div className={styles.monthNav}>
        <IconButton
          className={styles.navButton}
          buttonSize="m"
          iconSize="m"
          icon={Icon24Icons.ChevronLeft}
          aria-label="Предыдущая неделя"
          onClick={onPrevWeek}
        />
        <IconButton
          className={styles.navButton}
          buttonSize="m"
          iconSize="m"
          icon={Icon24Icons.ChevronRight}
          aria-label="Следующая неделя"
          onClick={onNextWeek}
        />
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
