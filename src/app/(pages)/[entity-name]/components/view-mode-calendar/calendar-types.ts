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
