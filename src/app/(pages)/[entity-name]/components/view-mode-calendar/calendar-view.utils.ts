import dayjs, { type Dayjs } from "dayjs";
import "dayjs/locale/ru";
import type { CalendarDay, MonthGridDay } from "./calendar-view.types";

const WEEKDAY_LABELS = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"] as const;

export const getWeekStartMonday = (date: Dayjs) => {
  const normalized = date.startOf("day");
  const day = normalized.day();
  const distanceToMonday = day === 0 ? 6 : day - 1;

  return normalized.subtract(distanceToMonday, "day");
};

export const buildMonthLabel = (date: Dayjs) => {
  const label = date.locale("ru").format("MMMM YYYY");

  return label.charAt(0).toUpperCase() + label.slice(1);
};

export const buildMonthGridDays = (
  visibleMonth: Dayjs,
  selectedDate: Dayjs,
): MonthGridDay[] => {
  const monthStart = visibleMonth.startOf("month");
  const gridStart = getWeekStartMonday(monthStart);
  const today = dayjs().startOf("day");

  return Array.from({ length: 42 }, (_, index) => {
    const dayDate = gridStart.add(index, "day");
    const dayOfWeekIndex = index % 7;

    return {
      id: dayDate.format("YYYY-MM-DD"),
      dateKey: dayDate.format("YYYY-MM-DD"),
      dayNumber: String(dayDate.date()),
      isWeekend: dayOfWeekIndex >= 5,
      isSelected: dayDate.isSame(selectedDate, "day"),
      isToday: dayDate.isSame(today, "day"),
      isOutsideMonth: !dayDate.isSame(visibleMonth, "month"),
    };
  });
};

export const buildWeekDays = (
  weekAnchorDate: Dayjs,
  selectedDate: Dayjs,
): CalendarDay[] => {
  const weekStart = getWeekStartMonday(weekAnchorDate);
  const today = dayjs().startOf("day");

  return WEEKDAY_LABELS.map((weekday, index) => {
    const dayDate = weekStart.add(index, "day");

    const isWeekend = index >= 5;
    return {
      id: dayDate.format("YYYY-MM-DD"),
      dateKey: dayDate.format("YYYY-MM-DD"),
      weekday,
      dayNumber: String(dayDate.date()),
      isWeekend,
      isSelected: dayDate.isSame(selectedDate, "day"),
      isToday: dayDate.isSame(today, "day"),
    };
  });
};
