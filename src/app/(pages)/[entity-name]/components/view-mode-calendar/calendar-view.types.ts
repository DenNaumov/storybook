export type ViewMode = "list" | "calendar" | "board";

export interface CalendarDay {
  id: string;
  dateKey: string;
  weekday: string;
  dayNumber: string;
  isWeekend?: boolean;
  isSelected?: boolean;
  isToday?: boolean;
}

export interface MonthGridDay {
  id: string;
  dateKey: string;
  dayNumber: string;
  isWeekend?: boolean;
  isSelected?: boolean;
  isToday?: boolean;
  isOutsideMonth?: boolean;
}

export type TaskPriority = "high" | "default";
export type TaskChipTone = "new" | "progress" | "review" | "important";

export interface TaskChip {
  label: string;
  tone: TaskChipTone;
}

interface EntityObjectType {
  id: string
  name: string
  entityId: string;
  finalDate?: string;
}

export interface EntityElementViewModel {
  id: string;
  title: string;
  rawItem: EntityObjectType
}
