"use client";

import { useMemo, useState } from "react";
import { Typography } from "@/shared/ui-kit/typography/typography";
import styles from "./view-mode-calendar.module.css";
import { activeViewMode, initialSelectedDate, tasks } from "./calendar-view.mock";
import { CalendarTimeline } from "./calendar-timeline";
import { CalendarWeekStrip } from "./calendar-week-strip";
import { buildMonthLabel, buildWeekDays } from "./calendar-view.utils";
import { ViewModeSwitcher } from "./view-mode-switcher";

export const ViewModeCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(initialSelectedDate);

  const monthLabel = useMemo(() => buildMonthLabel(selectedDate), [selectedDate]);
  const weekDays = useMemo(() => buildWeekDays(selectedDate), [selectedDate]);

  const shiftWeek = (days: number) => {
    setSelectedDate((prev) => {
      const next = new Date(prev);
      next.setDate(prev.getDate() + days);
      return next;
    });
  };

  return (
    <main className={styles.shell}>
      <div className={styles.phone}>
        <header className={styles.header}>
          <Typography as="h1" variant="headline-bold" className={styles.title}>
            Задачи
          </Typography>
          <ViewModeSwitcher activeMode={activeViewMode} />
        </header>

        <CalendarWeekStrip
          monthLabel={monthLabel}
          weekDays={weekDays}
          onPrevWeek={() => shiftWeek(-7)}
          onNextWeek={() => shiftWeek(7)}
        />
        <CalendarTimeline tasks={tasks} />
      </div>
    </main>
  );
};
