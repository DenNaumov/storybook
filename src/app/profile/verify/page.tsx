"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { replaceLastPathSegment } from "@/shared/lib/routing/pathname";
import { Button } from "@/shared/ui-kit/button/button";
import { ButtonGroup } from "@/shared/ui-kit/button-group/button-group";
import { PasswordField } from "@/shared/ui-kit/password-field/password-field";
import { Typography } from "@/shared/ui-kit/typography/typography";
import { useState } from "react";
import styles from "./page.module.css";

export default function ProfileVerifyPage() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [password, setPassword] = useState("");
  const email = searchParams.get("email") ?? "";

  const handleContinueClick = () => {
    if (!email) {
      return;
    }

    const verifyCodePath = replaceLastPathSegment(
      pathname,
      "verify",
      "verify-code",
    );

    const nextSearchParams = new URLSearchParams({ email });
    router.push(`${verifyCodePath}?${nextSearchParams.toString()}`);
  };

  return (
    <section className={styles.screen}>
      <div className={styles.content}>
        <header className={styles.header}>
          <Typography
            variant="headline-semibold"
            color="default"
            className={styles.title}
          >
            Проверка для защиты аккаунта
          </Typography>
          <Typography
            variant="subheadline1-regular"
            color="secondary"
            className={styles.description}
          >
            {email
              ? `Для смены email на ${email} введите ваш текущий пароль от приложения`
              : "Для смены email введите ваш текущий пароль от приложения"}
          </Typography>
        </header>

        <div className={styles.passwordField}>
          <PasswordField
            label="Пароль"
            value={password}
            onValueChange={setPassword}
            autoComplete="current-password"
          />
        </div>
      </div>

      <ButtonGroup className={styles.footer}>
        <Button
          size="m"
          label="Продолжить"
          disabled={!email || password.trim().length === 0}
          onClick={handleContinueClick}
        />
      </ButtonGroup>
    </section>
  );
}
