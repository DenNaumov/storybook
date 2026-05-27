"use client";

import { useMemo, useState } from "react";
import dayjs from "dayjs";
import { initialSelectedDate, tasks } from "./calendar-view.mock";
import { CalendarTimeline } from "./calendar-timeline";
import { CalendarWeekStrip } from "./calendar-week-strip";
import { buildMonthLabel, buildWeekDays } from "./calendar-view.utils";

export const ViewModeCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(initialSelectedDate);

  const monthLabel = useMemo(() => buildMonthLabel(selectedDate), [selectedDate]);
  const weekDays = useMemo(() => buildWeekDays(selectedDate), [selectedDate]);
  const filteredTasks = useMemo(
    () =>
      tasks.filter((task) =>
        dayjs(task.scheduledAt).isSame(selectedDate.startOf("day"), "day"),
      ),
    [selectedDate],
  );

  const shiftWeek = (days: number) => {
    setSelectedDate((prev) => prev.add(days, "day"));
  };

  return (
    <>
      <CalendarWeekStrip
        monthLabel={monthLabel}
        weekDays={weekDays}
        onPrevWeek={() => shiftWeek(-7)}
        onNextWeek={() => shiftWeek(7)}
        onSelectDay={(dateKey) => setSelectedDate(dayjs(dateKey))}
      />
      <CalendarTimeline tasks={filteredTasks} />
    </>
  );
};
