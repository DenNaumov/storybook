"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { removeLastPathSegment } from "@/shared/lib/routing/pathname";
import { Button } from "@/shared/ui-kit/button/button";
import { ButtonGroup } from "@/shared/ui-kit/button-group/button-group";
import { EmailCodeInput } from "@/shared/ui-kit/email-code-input/email-code-input";
import { Typography } from "@/shared/ui-kit/typography/typography";
import styles from "./page.module.css";

export default function ProfileVerifyCodePage() {
  const router = useRouter();
  const pathname = usePathname();
  const [code, setCode] = useState("");

  return (
    <section className={styles.screen}>
      <div className={styles.content}>
        <header className={styles.header}>
          <Typography
            variant="headline-semibold"
            color="default"
            className={styles.title}
          >
            Введите код из письма
          </Typography>
          <Typography
            variant="subheadline1-regular"
            color="secondary"
            className={styles.description}
          >
            Отправили на mail@mail.ru.
            <br />
            Если во «Входящих» нет, проверьте «Спам».
          </Typography>
        </header>

        <div className={styles.codeInputGroup}>
          <EmailCodeInput digits={code} onDigitsChange={setCode} />
        </div>
      </div>

      <ButtonGroup className={styles.footer}>
        <Button
          size="m"
          label="Продолжить"
          disabled={code.length !== 6}
          onClick={() => router.push(removeLastPathSegment(pathname, "verify-code"))}
        />
        <Button
          variant="text"
          size="m"
          label="Отправить код повторно"
        />
      </ButtonGroup>
    </section>
  );
}
