import dayjs from "dayjs";
import type { TaskItem } from "../../calendar-view.types";

export interface GroupedHourItem {
  rawItem: TaskItem;
}

export const groupTasksByHour = (tasks: TaskItem[]) => {
  const groups = tasks.reduce<Record<string, GroupedHourItem[]>>((acc, rawItem) => {
    const hourKey = dayjs(rawItem.finalDate).format("HH:00");

    if (!acc[hourKey]) {
      acc[hourKey] = [];
    }

    acc[hourKey].push({ rawItem });
    return acc;
  }, {});

  return Object.entries(groups);
};
