import dayjs from "dayjs";
import type { TaskItem } from "../../calendar-view.types";

export const groupTasksByHour = (tasks: TaskItem[]) => {
  const groups = tasks.reduce<Record<string, TaskItem[]>>((acc, task) => {
    const hourKey = dayjs(task.finalDate).format("HH:00");

    if (!acc[hourKey]) {
      acc[hourKey] = [];
    }

    acc[hourKey].push(task);
    return acc;
  }, {});

  return Object.entries(groups);
};
