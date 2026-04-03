"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { appendPathSegment } from "@/shared/lib/routing/pathname";
import { useForm, FormProvider } from "react-hook-form";
import { ProfileFormFields } from "./profile-form-fields";
import { profileFormSchema } from "./profile-form.schema";
import type { ProfileFormData } from "./profile-form.types";
import styles from "./profile-form.module.css";

export const ProfileForm = () => {
  const router = useRouter();
  const pathname = usePathname();
  const methods = useForm<ProfileFormData>({
    resolver: zodResolver(profileFormSchema),
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
    const nextEmail = data.email.trim();
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
      if (!nextEmail) {
        return;
      }

      const verifyPath = appendPathSegment(pathname, "verify");
      const searchParams = new URLSearchParams({ email: nextEmail });

      router.push(`${verifyPath}?${searchParams.toString()}`);
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
