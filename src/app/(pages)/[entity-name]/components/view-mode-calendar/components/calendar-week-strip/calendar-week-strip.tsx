import { Icon20Icons, Icon24Icons } from "@/shared/ui-kit/icon";
import { IconButton } from "@/shared/ui-kit/icon-button/icon-button";
import { Typography } from "@/shared/ui-kit/typography/typography";
import styles from "./calendar-week-strip.module.css";
import type { CalendarDay } from "../../calendar-view.types";

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
      <button
        className={styles.monthButton}
        type="button"
        onClick={onOpenMonthPicker}
      >
        <Typography variant="title3-bold">{monthLabel}</Typography>
        <Icon20Icons.ChevronDown aria-hidden width={20} height={20} />
      </button>
      <div className={styles.monthNav}>
        <div className={styles.navButtonWrap}>
          <IconButton
            buttonSize="m"
            iconSize="m"
            icon={Icon24Icons.ChevronLeft}
            aria-label="Предыдущая неделя"
            onClick={onPrevWeek}
          />
        </div>
        <div className={styles.navButtonWrap}>
          <IconButton
            buttonSize="m"
            iconSize="m"
            icon={Icon24Icons.ChevronRight}
            aria-label="Следующая неделя"
            onClick={onNextWeek}
          />
        </div>
      </div>
    </div>

    <ol className={styles.dayGrid}>
      {weekDays.map((item) => (
        <li className={styles.day} key={item.id}>
          <button
            className={styles.dayButton}
            type="button"
            onClick={() => onSelectDay(item.dateKey)}
            aria-pressed={item.isSelected}
          >
            <Typography
              variant="subheadline2-regular"
              className={item.isWeekend ? styles.weekend : styles.weekday}
              color={item.isWeekend ? "#ff3b3b" : "#adadad"}
            >
              {item.weekday}
            </Typography>
            <Typography
              variant="headline-regular"
              className={[
                styles.dayNumber,
                item.isSelected ? styles.dayNumberSelected : "",
                item.isToday ? styles.dayNumberToday : "",
              ].join(" ")}
            >
              {item.dayNumber}
            </Typography>
          </button>
        </li>
      ))}
    </ol>
  </section>
);
