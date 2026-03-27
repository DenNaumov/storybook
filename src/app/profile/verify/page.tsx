"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/shared/ui-kit/button/button";
import { InputMaster } from "@/shared/ui-kit/input-master/input-master";
import { ResizableIcon } from "@/shared/ui-kit/icon/icon-wrappers";
import { Typography } from "@/shared/ui-kit/typography/typography";
import styles from "./page.module.css";

export default function ProfileVerifyPage() {
  const router = useRouter();
  const pathname = usePathname();
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <section className={styles.screen}>
      <div className={styles.content}>
        <header className={styles.header}>
          <Typography as="h1" variant="title3-bold" className={styles.title}>
            Проверка для защиты аккаунта
          </Typography>
          <Typography
            as="p"
            variant="title3-regular"
            color="secondary"
            className={styles.description}
          >
            Для смены email введите ваш текущий пароль от приложения
          </Typography>
        </header>

        <div className={styles.passwordField}>
          <InputMaster
            label="Пароль"
            type={passwordVisible ? "text" : "password"}
            value={password}
            onValueChange={setPassword}
            autoComplete="current-password"
          />
          <button
            type="button"
            className={styles.visibilityButton}
            onClick={() => setPasswordVisible((current) => !current)}
            aria-label={passwordVisible ? "Скрыть пароль" : "Показать пароль"}
            aria-pressed={passwordVisible}
          >
            <ResizableIcon
              icon={passwordVisible ? "ViewOffSlash" : "View"}
              size={24}
            />
          </button>
        </div>
      </div>

      <div className={styles.footer}>
        <Button
          size="m"
          label="Продолжить"
          disabled={password.trim().length === 0}
          className={styles.primaryAction}
          onClick={() =>
            router.push(pathname.replace(/\/verify\/?$/, "/verify-code"))
          }
        />
      </div>
    </section>
  );
}
