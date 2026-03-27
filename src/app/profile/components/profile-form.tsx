"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useForm, FormProvider } from "react-hook-form";
import { ProfileFormFields } from "./profile-form-fields";
import type { ProfileFormData } from "./profile-form.types";
import styles from "./profile-form.module.css";

export const ProfileForm = () => {
  const router = useRouter();
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
  const {
    handleSubmit,
    reset,
    formState: { dirtyFields },
  } = methods;

  const onSubmit = async (data: ProfileFormData) => {
    const isEmailChanged = Boolean(dirtyFields.email);
    const changedFields: Partial<ProfileFormData> = {};

    for (const key of Object.keys(dirtyFields) as Array<
      keyof ProfileFormData
    >) {
      changedFields[key] = data[key];
    }

    console.log("Form submitted with changed fields:", changedFields);

    // Имитация отправки данных на сервер
    await new Promise((resolve) => setTimeout(resolve, 1500));

    if (isEmailChanged) {
      router.push("/profile/verify");
      return;
    }

    reset(data);
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
