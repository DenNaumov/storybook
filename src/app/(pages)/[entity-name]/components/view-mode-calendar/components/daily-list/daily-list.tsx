import styles from "./daily-list.module.css";
import { TaskCard } from "../task-card/task-card";
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
