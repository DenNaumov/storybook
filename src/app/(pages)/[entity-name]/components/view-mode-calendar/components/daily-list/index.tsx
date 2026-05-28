import styles from "../../view-mode-calendar.module.css";
import { TaskCard } from "../task-card";
import type { TaskItem } from "../../calendar-view.types";

interface DailyListProps {
  tasks: TaskItem[];
}

export const DailyList = ({ tasks }: DailyListProps) => (
  <section className={styles.timeline} aria-label="Задачи на выбранный день">
    {tasks.map((task) => (
      <TaskCard key={task.id} task={task} />
    ))}
  </section>
);
