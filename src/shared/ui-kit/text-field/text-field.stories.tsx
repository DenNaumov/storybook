import type { Meta, StoryObj } from "@storybook/nextjs";
import React, { useState } from "react";

import { TextField } from "./text-field";
import styles from "./text-field.stories.module.css";

const meta = {
  title: "UI Kit/TextField",
  component: TextField,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Имитация загрузки
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    }, 1500);
  };

  const isFormValid = email.length > 3 && password.length > 5;

  return (
    <div className={styles.stage}>
      <div className={styles.card}>
        <div className={styles.title}>Вход в аккаунт</div>
        <div className={styles.subtitle}>
          Введите ваши данные для доступа к платформе
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <TextField
            label="Email или телефон"
            placeholder="example@mail.com"
            value={email}
            disabled={isSubmitting}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Пароль"
            placeholder="Введите пароль"
            value={password}
            disabled={isSubmitting}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className={styles.button}
            disabled={!isFormValid || isSubmitting}
          >
            {isSubmitting ? "Вход..." : "Войти"}
          </button>
        </form>

        {success && (
          <div className={styles.successMessage}>
            Вы успешно вошли в систему!
          </div>
        )}
      </div>
    </div>
  );
};

export const LoginExample: Story = {
  render: () => <LoginForm />,
};
