import { Typography } from "@/shared/ui-kit/typography/typography";
import styles from "./view-mode-calendar.module.css";
import { activeViewMode, monthLabel, tasks, weekDays } from "./calendar-view.mock";
import { CalendarTimeline } from "./calendar-timeline";
import { CalendarWeekStrip } from "./calendar-week-strip";
import { ViewModeSwitcher } from "./view-mode-switcher";

export const ViewModeCalendar = () => (
  <main className={styles.shell}>
    <div className={styles.phone}>
      <header className={styles.header}>
        <Typography as="h1" variant="headline-bold" className={styles.title}>
          Задачи
        </Typography>
        <ViewModeSwitcher activeMode={activeViewMode} />
      </header>

      <CalendarWeekStrip monthLabel={monthLabel} weekDays={weekDays} />
      <CalendarTimeline tasks={tasks} />
    </div>
  </main>
);
