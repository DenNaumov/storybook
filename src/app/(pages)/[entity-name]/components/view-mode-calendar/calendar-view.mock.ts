import type { CalendarDay, TaskItem, ViewMode } from "./calendar-view.types";

export const activeViewMode: ViewMode = "calendar";

export const monthLabel = "Апрель 2026";

export const weekDays: CalendarDay[] = [
  { id: "mon", weekday: "Пн", dayNumber: "1" },
  { id: "tue", weekday: "Вт", dayNumber: "2", isSelected: true },
  { id: "wed", weekday: "Ср", dayNumber: "3" },
  { id: "thu", weekday: "Чт", dayNumber: "4", isToday: true },
  { id: "fri", weekday: "Пт", dayNumber: "5" },
  { id: "sat", weekday: "Сб", dayNumber: "6", isWeekend: true },
  { id: "sun", weekday: "Вс", dayNumber: "7", isWeekend: true },
];

export const tasks: TaskItem[] = [
  {
    id: "task-10",
    time: "10:00",
    title: "Отправить закрывающие документы клиенту",
    dueAt: "02.04.2026 10:00",
    priority: "high",
    stage: { label: "Новая задача", tone: "new" },
  },
  {
    id: "task-12",
    time: "12:00",
    title: "Заключить договор поставки с партнерами",
    dueAt: "02.04.2026 12:00",
    priority: "default",
    tags: [{ label: "Важное", tone: "important" }],
    stage: { label: "В работе", tone: "progress" },
  },
];
