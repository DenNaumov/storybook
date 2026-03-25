import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { ProfileFormFields } from "./profile-form-fields";
import type { ProfileFormData } from "./profile-form.types";
import styles from "./profile-form.module.css";

export const ProfileForm = () => {
  const methods = useForm<ProfileFormData>();
  const { handleSubmit, reset } = methods;

  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (data: ProfileFormData) => {
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
    <div className={styles.card}>
      <FormProvider {...methods}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <ProfileFormFields />
        </form>
      </FormProvider>
    </div>
  );
};
