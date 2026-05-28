"use client";

import { useMemo } from "react";
import dayjs from "dayjs";
import { tasks } from "./calendar-view.mock";
import type { TaskItem } from "./calendar-view.types";

interface UseObjectFilterDateParams {
  entityId: string;
  fromUtc: string;
  toUtc: string;
}

export const useObjectFilterDate = ({
  entityId,
  fromUtc,
  toUtc,
}: UseObjectFilterDateParams): TaskItem[] =>
  useMemo(() => {
    const from = dayjs(fromUtc);
    const to = dayjs(toUtc);

    return tasks
      .filter((item) => item.entityId === entityId)
      .filter((item) => {
        const finalDate = dayjs(item.finalDate);
        return (
          finalDate.isAfter(from) ||
          finalDate.isSame(from)
        ) && (
          finalDate.isBefore(to) ||
          finalDate.isSame(to)
        );
      })
      .sort((left, right) => {
        const leftFinalDate = dayjs(left.finalDate);
        const rightFinalDate = dayjs(right.finalDate);

        if (leftFinalDate.isSame(rightFinalDate)) {
          return left.id.localeCompare(right.id);
        }

        return leftFinalDate.isBefore(rightFinalDate) ? -1 : 1;
      });
  }, [entityId, fromUtc, toUtc]);
