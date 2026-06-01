import dayjs from "dayjs";
import { tasks } from "../../calendar-view.mock";

export const groupItemsByHour = (items: typeof tasks) => {
  const groups = items.reduce<Record<string, Array<(typeof tasks)[number]>>>((acc, item) => {
    const hourKey = dayjs(item.rawItem.finalDate).format("HH:00");

    if (!acc[hourKey]) {
      acc[hourKey] = [];
    }

    acc[hourKey].push(item);
    return acc;
  }, {});

  return Object.entries(groups).sort(([left], [right]) =>
    left.localeCompare(right),
  );
};
