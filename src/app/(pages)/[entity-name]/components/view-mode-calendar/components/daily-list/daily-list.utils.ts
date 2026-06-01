import dayjs from "dayjs";
import type { EntityElementViewModel } from "../../calendar-view.types";

export const groupItemsByHour = (items: EntityElementViewModel[]) => {
  const groups = items.reduce<Record<string, { rawItem: EntityElementViewModel }[]>>((acc, rawItem) => {
    const hourKey = dayjs(rawItem.finalDate).format("HH:00");

    if (!acc[hourKey]) {
      acc[hourKey] = [];
    }

    acc[hourKey].push({ rawItem });
    return acc;
  }, {});

  return Object.entries(groups);
};
