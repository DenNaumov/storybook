import dayjs, { type Dayjs } from "dayjs";
import "dayjs/locale/ru";
import type { CalendarDay } from "./calendar-view.types";

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

export const buildWeekDays = (selectedDate: Dayjs): CalendarDay[] => {
  const weekStart = getWeekStartMonday(selectedDate);
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
