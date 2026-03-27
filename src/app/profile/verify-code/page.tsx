"use client";

import type { ClipboardEvent } from "react";
import { useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/shared/ui-kit/button/button";
import { Typography } from "@/shared/ui-kit/typography/typography";
import styles from "./page.module.css";

const CODE_LENGTH = 6;

const sanitizeCode = (value: string) =>
  value.replace(/\D/g, "").slice(0, CODE_LENGTH);

export default function ProfileVerifyCodePage() {
  const router = useRouter();
  const pathname = usePathname();
  const [code, setCode] = useState("");
  const normalizedCode = useMemo(() => sanitizeCode(code), [code]);

  const handlePaste = (event: ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault();
    setCode(sanitizeCode(event.clipboardData.getData("text")));
  };

  return (
    <section className={styles.screen}>
      <div className={styles.content}>
        <header className={styles.header}>
          <Typography as="h1" variant="title3-bold" className={styles.title}>
            Введите код из письма
          </Typography>
          <Typography
            as="p"
            variant="title3-regular"
            color="secondary"
            className={styles.description}
          >
            Отправили на mail@mail.ru.
            <br />
            Если во «Входящих» нет, проверьте «Спам».
          </Typography>
        </header>

        <label className={styles.codeInputGroup}>
          <span className={styles.visuallyHidden}>Код из письма</span>
          <input
            className={styles.hiddenCodeInput}
            type="text"
            inputMode="numeric"
            autoComplete="one-time-code"
            value={normalizedCode}
            maxLength={CODE_LENGTH}
            onPaste={handlePaste}
            onChange={(event) => setCode(sanitizeCode(event.target.value))}
          />

          <div
            className={styles.codeRow}
            style={{
              gridTemplateColumns: `repeat(${CODE_LENGTH}, minmax(0, 1fr))`,
            }}
            aria-hidden="true"
          >
            {Array.from({ length: CODE_LENGTH }, (_, index) => {
              const symbol = normalizedCode[index] ?? "";

              return (
                <div key={index} className={styles.codeCell}>
                  <Typography variant="headline-semibold" className={styles.code}>
                    {symbol}
                  </Typography>
                </div>
              );
            })}
          </div>
        </label>
      </div>

      <div className={styles.footer}>
        <Button
          size="m"
          label="Продолжить"
          disabled={normalizedCode.length !== CODE_LENGTH}
          className={styles.primaryAction}
          onClick={() => router.push(pathname.replace(/\/verify-code\/?$/, ""))}
        />
        <Button
          variant="text"
          size="m"
          label="Отправить код повторно"
          className={styles.secondaryAction}
        />
      </div>
    </section>
  );
}
