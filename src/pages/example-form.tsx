import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Head from "next/head";

import { TextField } from "@/ui-kit/text-field/text-field";
import styles from "@/styles/example-form.module.css";

interface FormData {
  firstName: string;
  lastName: string;
  middleName: string;
  phone: string;
  email: string;
  position: string;
}

export default function ExampleFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();
  
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (data: FormData) => {
    console.log("Form submitted with data:", data);
    
    // Имитация отправки данных на сервер
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSuccess(true);
    reset(); // Очищаем форму
    
    setTimeout(() => {
      setIsSuccess(false);
    }, 5000);
  };

  return (
    <>
      <Head>
        <title>Онкетная форма сотрудника</title>
      </Head>

      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.title}>Анкета сотрудника</div>
          <div className={styles.subtitle}>
            Пожалуйста, заполните ваши контактные данные и должность для добавления в систему.
          </div>

          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            
            <div className={styles.row}>
              <TextField
                className={styles.textField}
                label="Имя"
                placeholder="Иван"
                disabled={isSubmitting}
                {...register("firstName", { required: true })}
              />
              <TextField
                className={styles.textField}
                label="Фамилия"
                placeholder="Иванов"
                disabled={isSubmitting}
                {...register("lastName", { required: true })}
              />
            </div>

            <TextField
              label="Отчество"
              placeholder="Иванович"
              disabled={isSubmitting}
              {...register("middleName")}
            />

            <div className={styles.row}>
              <TextField
                className={styles.textField}
                label="Телефон"
                type="tel"
                placeholder="+7 (999) 000-00-00"
                disabled={isSubmitting}
                {...register("phone", { required: true })}
              />
              <TextField
                className={styles.textField}
                label="Емейл"
                type="email"
                placeholder="ivan@example.com"
                disabled={isSubmitting}
                {...register("email", { 
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                })}
              />
            </div>

            <TextField
              label="Должность"
              placeholder="Frontend Developer"
              disabled={isSubmitting}
              {...register("position", { required: true })}
            />

            <button
              type="submit"
              className={styles.submitBtn}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Отправка..." : "Отправить анкету"}
            </button>
          </form>

          {isSuccess && (
            <div className={styles.successBox}>
              Анкета успешно сохранена!
            </div>
          )}
        </div>
      </div>
    </>
  );
}
