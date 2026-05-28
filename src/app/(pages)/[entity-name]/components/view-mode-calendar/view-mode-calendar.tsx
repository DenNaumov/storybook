"use client";

import { useMemo, useState } from "react";
import dayjs from "dayjs";
import { tasks } from "./calendar-view.mock";
import { DailyList } from "./components/daily-list/daily-list";
import { CalendarWeekStrip } from "./components/calendar-week-strip/calendar-week-strip";
import { buildMonthLabel, buildWeekDays } from "./calendar-view.utils";
import { MonthPickerModal } from "./components/month-picker-modal/month-picker-modal";

export const ViewModeCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(() => dayjs());
  const [visibleWeekDate, setVisibleWeekDate] = useState(() => dayjs());
  const [isMonthPickerOpen, setMonthPickerOpen] = useState(false);

  const monthLabel = useMemo(() => buildMonthLabel(visibleWeekDate), [visibleWeekDate]);
  const weekDays = useMemo(
    () => buildWeekDays(visibleWeekDate, selectedDate),
    [selectedDate, visibleWeekDate],
  );
  const filteredTasks = useMemo(
    () =>
      tasks.filter((task) =>
        dayjs(task.scheduledAt).isSame(selectedDate.startOf("day"), "day"),
      ),
    [selectedDate],
  );

  const shiftWeek = (direction: "prev" | "next") => {
    setVisibleWeekDate((prev) =>
      direction === "prev" ? prev.subtract(1, "week") : prev.add(1, "week"),
    );
  };

  return (
    <>
      <CalendarWeekStrip
        monthLabel={monthLabel}
        weekDays={weekDays}
        onPrevWeek={() => shiftWeek("prev")}
        onNextWeek={() => shiftWeek("next")}
        onSelectDay={(dateKey) => {
          const nextSelectedDate = dayjs(dateKey);
          setSelectedDate(nextSelectedDate);
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
            setSelectedDate(nextSelectedDate);
            setVisibleWeekDate(nextSelectedDate);
          }}
        />
      )}
    </>
  );
};
