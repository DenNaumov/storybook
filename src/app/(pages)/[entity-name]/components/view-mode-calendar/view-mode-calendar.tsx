"use client";

import { useMemo, useState } from "react";
import dayjs from "dayjs";
import type { Dayjs } from "dayjs";
import { DailyList } from "./components/daily-list/daily-list";
import { CalendarWeekStrip } from "./components/calendar-week-strip/calendar-week-strip";
import {
  buildMonthLabel,
  buildUtcRangeForLocalDay,
  buildWeekDays,
} from "./calendar-view.utils";
import { MonthPickerModal } from "./components/month-picker-modal/month-picker-modal";
import { useFetchEntityElementsFilterTime } from "@/lib/hooks/useFetchEntityElementsFilterTime";
import styles from "./view-mode-calendar.module.css";

interface ViewModeCalendarProps {
  selectedDate: Dayjs;
  onSelectedDateChange: (nextDate: Dayjs) => void;
}

export const ViewModeCalendar = ({
  selectedDate,
  onSelectedDateChange,
}: ViewModeCalendarProps) => {
  const [visibleWeekDate, setVisibleWeekDate] = useState(() => dayjs());
  const [isMonthPickerOpen, setMonthPickerOpen] = useState(false);

  const monthLabel = useMemo(
    () => buildMonthLabel(visibleWeekDate),
    [visibleWeekDate],
  );
  const weekDays = useMemo(
    () => buildWeekDays(visibleWeekDate, selectedDate),
    [selectedDate, visibleWeekDate],
  );
  const selectedDayUtcRange = useMemo(
    () => buildUtcRangeForLocalDay(selectedDate),
    [selectedDate],
  );
  const filteredTasks = useFetchEntityElementsFilterTime({
    entityId: "tasks",
    fromUtc: selectedDayUtcRange.fromUtc,
    toUtc: selectedDayUtcRange.toUtc,
  });

  const shiftWeek = (direction: "prev" | "next") => {
    setVisibleWeekDate((prev) =>
      direction === "prev" ? prev.subtract(1, "week") : prev.add(1, "week"),
    );
  };

  return (
    <section className={styles.container}>
      <CalendarWeekStrip
        monthLabel={monthLabel}
        weekDays={weekDays}
        onPrevWeek={() => shiftWeek("prev")}
        onNextWeek={() => shiftWeek("next")}
        onSelectDay={(dateKey) => {
          const nextSelectedDate = dayjs(dateKey);
          onSelectedDateChange(nextSelectedDate);
          setVisibleWeekDate(nextSelectedDate);
        }}
        onOpenMonthPicker={() => setMonthPickerOpen(true)}
      />
      <DailyList tasks={filteredTasks} />
      {isMonthPickerOpen && (
        <MonthPickerModal
          selectedDate={selectedDate}
          onClose={() => setMonthPickerOpen(false)}
          onSelectDate={(dateKey) => {
            const nextSelectedDate = dayjs(dateKey);
            onSelectedDateChange(nextSelectedDate);
            setVisibleWeekDate(nextSelectedDate);
          }}
        />
      )}
    </section>
  );
};
