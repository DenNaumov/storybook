import type { TaskItem, ViewMode } from "./calendar-view.types";

export const activeViewMode: ViewMode = "calendar";
export const initialSelectedDate = new Date(2026, 3, 2);

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
