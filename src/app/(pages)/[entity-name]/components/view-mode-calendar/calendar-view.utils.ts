import type { CalendarDay } from "./calendar-view.types";

const WEEKDAY_LABELS = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"] as const;

const normalizeDate = (value: Date) =>
  new Date(value.getFullYear(), value.getMonth(), value.getDate());

const isSameDay = (left: Date, right: Date) =>
  left.getFullYear() === right.getFullYear() &&
  left.getMonth() === right.getMonth() &&
  left.getDate() === right.getDate();

export const getWeekStartMonday = (date: Date) => {
  const normalized = normalizeDate(date);
  const day = normalized.getDay();
  const distanceToMonday = day === 0 ? 6 : day - 1;

  normalized.setDate(normalized.getDate() - distanceToMonday);
  return normalized;
};

export const buildMonthLabel = (date: Date) => {
  const label = new Intl.DateTimeFormat("ru-RU", {
    month: "long",
    year: "numeric",
  }).format(date);

  return label.charAt(0).toUpperCase() + label.slice(1);
};

export const buildWeekDays = (selectedDate: Date): CalendarDay[] => {
  const weekStart = getWeekStartMonday(selectedDate);
  const today = normalizeDate(new Date());

  return WEEKDAY_LABELS.map((weekday, index) => {
    const dayDate = new Date(weekStart);
    dayDate.setDate(weekStart.getDate() + index);

    const isWeekend = index >= 5;
    return {
      id: dayDate.toISOString(),
      weekday,
      dayNumber: String(dayDate.getDate()),
      isWeekend,
      isSelected: isSameDay(dayDate, selectedDate),
      isToday: isSameDay(dayDate, today),
    };
  });
};
