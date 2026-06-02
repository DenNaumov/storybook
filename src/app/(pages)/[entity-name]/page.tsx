"use client";

import { useState } from "react";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import { Button } from "@/shared/ui-kit/button/button";
import { Typography } from "@/shared/ui-kit/typography/typography";
import { ViewModeCalendar } from "./components/view-mode-calendar/view-mode-calendar";
import { activeViewMode } from "./components/view-mode-calendar/calendar-view.mock";
import { ViewModeSwitcher } from "./components/view-mode-switcher/view-mode-switcher";
import styles from "./page.module.css";

export default function EntityListPage() {
  const [selectedDate, setSelectedDate] = useState(() => dayjs());
  const router = useRouter();

  const buildQueryString = (params: Record<string, string | undefined>) => {
    const searchParams = new URLSearchParams();

    Object.entries(params).forEach(([key, value]) => {
      if (value) {
        searchParams.set(key, value);
      }
    });

    return searchParams.toString();
  };

  const handleCreateClick = () => {
    const localNoonTz = selectedDate
      .hour(12)
      .minute(0)
      .second(0)
      .millisecond(0)
      .format("YYYY-MM-DDTHH:mm:ss.SSSZ");

    const query = buildQueryString({
      finalDate: localNoonTz,
    });

    router.push(`create?${query}`);
  };

  return (
    <section className={styles.page}>
      <header className={styles.header}>
        <Typography as="h1" variant="headline-bold">
          Задачи
        </Typography>
        <div className={styles.controls}>
          <Button size="s" label="Добавить задачу" onClick={handleCreateClick} />
          <ViewModeSwitcher activeMode={activeViewMode} />
        </div>
      </header>

      <ViewModeCalendar
        selectedDate={selectedDate}
        onSelectedDateChange={setSelectedDate}
      />
    </section>
  );
}
