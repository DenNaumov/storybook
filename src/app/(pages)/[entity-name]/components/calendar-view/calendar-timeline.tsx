import styles from "../../page.module.css";
import { TaskCard } from "./task-card";
import type { TaskItem } from "./calendar-view.types";

interface CalendarTimelineProps {
  tasks: TaskItem[];
}

export const CalendarTimeline = ({ tasks }: CalendarTimelineProps) => (
  <section className={styles.timeline} aria-label="Задачи на выбранный день">
    {tasks.map((task) => (
      <TaskCard key={task.id} task={task} />
    ))}
  </section>
);
