import { useMemo, useState } from "react";

import { Button } from "../button/button";
import { Icon24Icons } from "../icon";
import { Search } from "../search/search";
import { Typography } from "../typography/typography";
import styles from "./page.module.css";

const DEFAULT_OPTIONS = Array.from({ length: 12 }, (_, index) => ({
  id: index + 1,
  label: `Вариант ${index + 1}`,
}));

const DEFAULT_SELECTED = new Set([2, 4, 5, 6]);

export const Page = () => {
  const [query, setQuery] = useState("");
  const [selectedOptions, setSelectedOptions] = useState(
    () => new Set(DEFAULT_SELECTED),
  );

  const filteredOptions = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return DEFAULT_OPTIONS;
    }

    return DEFAULT_OPTIONS.filter((option) =>
      option.label.toLowerCase().includes(normalizedQuery),
    );
  }, [query]);

  const toggleOption = (id: number) => {
    setSelectedOptions((current) => {
      const next = new Set(current);

      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }

      return next;
    });
  };

  const resetSelection = () => {
    setSelectedOptions(new Set());
  };

  return (
    <main className={styles.stage} aria-label="Выбор вариантов">
      <section className={styles.sheet}>
        <div className={styles.content}>
          <Typography
            as="h1"
            variant="title3-bold"
            className={styles.title}
            style={{ color: "inherit" }}
          >
            Один из
          </Typography>

          <div className={styles.searchField}>
            <Search value={query} onValueChange={setQuery} />
          </div>

          <div className={styles.optionList} role="group" aria-label="Варианты">
            {filteredOptions.map((option) => {
              const checked = selectedOptions.has(option.id);

              return (
                <label className={styles.optionRow} key={option.id}>
                  <Typography
                    as="span"
                    variant="title3-regular"
                    className={styles.optionLabel}
                    style={{ color: "inherit" }}
                  >
                    {option.label}
                  </Typography>
                  <input
                    className={styles.optionInput}
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleOption(option.id)}
                  />
                  <span className={styles.checkbox} aria-hidden="true">
                    {checked ? (
                      <Icon24Icons.Check
                        width={30}
                        height={30}
                        color="#ffffff"
                      />
                    ) : null}
                  </span>
                </label>
              );
            })}
          </div>
        </div>

        <div className={styles.actions}>
          <Button className={styles.selectButton} size="m" label="Выбрать" />
          <Button
            className={styles.resetButton}
            variant="bezeled"
            size="m"
            label="Сбросить"
            type="button"
            onClick={resetSelection}
          />
        </div>
      </section>
    </main>
  );
};
