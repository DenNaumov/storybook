import { Typography } from "@/shared/ui-kit/typography/typography";
import { ViewModeCalendar } from "./components/view-mode-calendar/view-mode-calendar";
import { activeViewMode } from "./components/view-mode-calendar/calendar-view.mock";
import { ViewModeSwitcher } from "./components/view-mode-switcher/view-mode-switcher";
import styles from "./components/view-mode-calendar/view-mode-calendar.module.css";

export default function EntityListPage() {
  return (
    <>
      <header className={styles.header}>
        <Typography as="h1" variant="headline-bold">
          Задачи
        </Typography>
        <ViewModeSwitcher activeMode={activeViewMode} />
      </header>

      <ViewModeCalendar />
    </>
  );
}
