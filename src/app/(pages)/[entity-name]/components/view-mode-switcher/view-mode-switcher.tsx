import type { ViewMode } from "../view-mode-calendar/calendar-view.types";
import styles from "./view-mode-switcher.module.css";

interface ViewModeSwitcherProps {
  activeMode: ViewMode;
}

const viewModes: Array<{ mode: ViewMode; label: string; icon: string }> = [
  { mode: "list", label: "Список", icon: "≡" },
  { mode: "calendar", label: "Календарь", icon: "◉" },
  { mode: "board", label: "Колонки", icon: "▥" },
];

export const ViewModeSwitcher = ({ activeMode }: ViewModeSwitcherProps) => (
  <nav className={styles.viewSwitcher} aria-label="Вид сущностей">
    {viewModes.map((item) => (
      <button
        className={`${styles.viewButton} ${
          item.mode === activeMode ? styles.viewButtonActive : ""
        }`}
        type="button"
        aria-label={item.label}
        aria-pressed={item.mode === activeMode}
        key={item.mode}
      >
        <span aria-hidden>{item.icon}</span>
      </button>
    ))}
  </nav>
);
