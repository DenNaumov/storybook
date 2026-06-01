"use client";

import { useMemo } from "react";
import dayjs from "dayjs";
import { tasks } from "@/app/(pages)/[entity-name]/components/view-mode-calendar/calendar-view.mock";

interface UseObjectFilterDateParams {
  entityId: string;
  fromUtc: string;
  toUtc: string;
}

export const useFetchEntityElementsFilterTime = ({
  entityId,
  fromUtc,
  toUtc,
}: UseObjectFilterDateParams) =>
  useMemo(() => {
    const from = dayjs(fromUtc);
    const to = dayjs(toUtc);

    return tasks
      .filter((item) => item.rawItem.entityId === entityId)
      .filter((item) => {
        const finalDate = dayjs(item.rawItem.finalDate);
        return (
          finalDate.isAfter(from) ||
          finalDate.isSame(from)
        ) && (
          finalDate.isBefore(to) ||
          finalDate.isSame(to)
        );
      })
      .sort((left, right) => {
        const leftFinalDate = dayjs(left.rawItem.finalDate);
        const rightFinalDate = dayjs(right.rawItem.finalDate);

        if (leftFinalDate.isSame(rightFinalDate)) {
          return left.id.localeCompare(right.id);
        }

        return leftFinalDate.isBefore(rightFinalDate) ? -1 : 1;
      });
  }, [entityId, fromUtc, toUtc]);
