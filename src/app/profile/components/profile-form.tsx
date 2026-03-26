"use client";

import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { ProfileFormFields } from "./profile-form-fields";
import type { ProfileFormData } from "./profile-form.types";
import styles from "./profile-form.module.css";

export const ProfileForm = () => {
  const methods = useForm<ProfileFormData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      middleName: "",
      phone: "",
      email: "",
      position: "",
    },
  });
  const { handleSubmit, reset } = methods;

  const onSubmit = async (data: ProfileFormData) => {
    console.log("Form submitted with data:", data);

    // Имитация отправки данных на сервер
    await new Promise((resolve) => setTimeout(resolve, 1500));

    reset(); // Очищаем форму
  };

  return (
    <section className={styles.panel}>
      <header className={styles.header}>
        <h1 className={styles.title}>Личные данные</h1>
      </header>

      <FormProvider {...methods}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <ProfileFormFields />
        </form>
      </FormProvider>
    </section>
  );
};
