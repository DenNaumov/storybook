import dayjs from "dayjs";
import type { EntityElementViewModel } from "@/lib/app/services/entityElementTypes";

export const groupItemsByHour = (items: EntityElementViewModel[]) => {
  const groups = items.reduce<Record<string, EntityElementViewModel[]>>((acc, item) => {
    const hourKey = dayjs(item.rawItem.finalDate).format("HH:00");

    if (!acc[hourKey]) {
      acc[hourKey] = [];
    }

    acc[hourKey].push(item);
    return acc;
  }, {});

  return Object.entries(groups).sort(([hourA], [hourB]) =>
    hourA.localeCompare(hourB),
  );
};
