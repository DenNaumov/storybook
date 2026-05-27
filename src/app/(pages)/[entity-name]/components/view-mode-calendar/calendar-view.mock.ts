import dayjs from "dayjs";
import type { TaskItem, ViewMode } from "./calendar-view.types";

export const activeViewMode: ViewMode = "calendar";
export const initialSelectedDate = dayjs("2026-04-02");

export const tasks: TaskItem[] = [
  {
    id: "task-10",
    time: "10:00",
    scheduledAt: "2026-04-02T10:00:00",
    title: "Отправить закрывающие документы клиенту",
    dueAt: "02.04.2026 10:00",
    priority: "high",
    stage: { label: "Новая задача", tone: "new" },
  },
  {
    id: "task-12",
    time: "12:00",
    scheduledAt: "2026-04-02T12:00:00",
    title: "Заключить договор поставки с партнерами",
    dueAt: "02.04.2026 12:00",
    priority: "default",
    tags: [{ label: "Важное", tone: "important" }],
    stage: { label: "В работе", tone: "progress" },
  },
  {
    id: "task-09-next-day",
    time: "09:00",
    scheduledAt: "2026-04-03T09:00:00",
    title: "Согласовать этап отгрузки с логистикой",
    dueAt: "03.04.2026 09:00",
    priority: "default",
    stage: { label: "На согласовании", tone: "review" },
  },
];
