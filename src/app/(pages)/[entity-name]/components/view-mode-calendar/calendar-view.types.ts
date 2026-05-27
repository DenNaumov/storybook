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

export type TaskPriority = "high" | "default";
export type TaskChipTone = "new" | "progress" | "review" | "important";

export interface TaskChip {
  label: string;
  tone: TaskChipTone;
}

export interface TaskItem {
  id: string;
  time: string;
  scheduledAt: string;
  title: string;
  dueAt: string;
  priority: TaskPriority;
  tags?: TaskChip[];
  stage: TaskChip;
}
