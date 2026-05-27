import { useMemo, useState } from "react";
import { type Dayjs } from "dayjs";
import { Icon24Icons } from "@/shared/ui-kit/icon";
import { IconButton } from "@/shared/ui-kit/icon-button/icon-button";
import { Typography } from "@/shared/ui-kit/typography/typography";
import styles from "./view-mode-calendar.module.css";
import { buildMonthGridDays, buildMonthLabel } from "./calendar-view.utils";

interface MonthPickerModalProps {
  selectedDate: Dayjs;
  onClose: () => void;
  onSelectDate: (dateKey: string) => void;
}

const weekdayHeaders = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"] as const;

export const MonthPickerModal = ({
  selectedDate,
  onClose,
  onSelectDate,
}: MonthPickerModalProps) => {
  const [visibleMonth, setVisibleMonth] = useState(selectedDate.startOf("month"));

  const monthLabel = useMemo(() => buildMonthLabel(visibleMonth), [visibleMonth]);
  const monthDays = useMemo(
    () => buildMonthGridDays(visibleMonth, selectedDate),
    [selectedDate, visibleMonth],
  );

  return (
    <div className={styles.modalOverlay} role="dialog" aria-modal="true" aria-label="Выбор даты">
      <div className={styles.modalSurface}>
        <header className={styles.modalHeader}>
          <Typography as="h2" variant="headline-bold" className={styles.modalTitle}>
            Выберите дату
          </Typography>
          <button className={styles.modalCloseButton} type="button" onClick={onClose}>
            ×
          </button>
        </header>

        <section className={styles.modalCalendarCard}>
          <div className={styles.modalMonthTopline}>
            <IconButton
              className={styles.modalMonthNavButton}
              buttonSize="m"
              iconSize="m"
              icon={Icon24Icons.ChevronLeft}
              aria-label="Предыдущий месяц"
              onClick={() => setVisibleMonth((prev) => prev.subtract(1, "month"))}
            />
            <Typography as="p" variant="title3-bold" className={styles.modalMonthLabel}>
              {monthLabel}
            </Typography>
            <IconButton
              className={styles.modalMonthNavButton}
              buttonSize="m"
              iconSize="m"
              icon={Icon24Icons.ChevronRight}
              aria-label="Следующий месяц"
              onClick={() => setVisibleMonth((prev) => prev.add(1, "month"))}
            />
          </div>

          <ol className={styles.modalWeekdayRow}>
            {weekdayHeaders.map((weekday, index) => (
              <li key={weekday}>
                <Typography
                  as="span"
                  variant="subheadline2-regular"
                  className={index >= 5 ? styles.weekend : styles.weekday}
                >
                  {weekday}
                </Typography>
              </li>
            ))}
          </ol>

          <ol className={styles.modalMonthGrid}>
            {monthDays.map((day) => (
              <li
                className={[
                  styles.modalDayCell,
                  day.isSelected ? styles.daySelected : "",
                  day.isToday ? styles.dayToday : "",
                ].join(" ")}
                key={day.id}
              >
                <button
                  className={styles.modalDayButton}
                  type="button"
                  aria-pressed={day.isSelected}
                  onClick={() => {
                    onSelectDate(day.dateKey);
                    onClose();
                  }}
                >
                  <Typography
                    as="span"
                    variant="headline-regular"
                    className={day.isOutsideMonth ? styles.modalOutsideMonthDay : ""}
                  >
                    {day.dayNumber}
                  </Typography>
                </button>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </div>
  );
};
