import { Controller, useFormContext } from "react-hook-form";
import { TextField } from "@/shared/ui-kit/text-field/text-field";
import { Button } from "@/shared/ui-kit/button/button";
import type { ProfileFormData } from "./profile-form.types";
import styles from "./profile-form.module.css";

export const ProfileFormFields = () => {
  const {
    control,
    formState: { isSubmitting },
  } = useFormContext<ProfileFormData>();

  return (
    <>
      <div className={styles.fieldsGroup}>
        <Controller
          name="email"
          control={control}
          rules={{
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          }}
          render={({ field }) => (
            <TextField
              {...field}
              className={styles.textField}
              label="E-mail"
              type="email"
              disabled={isSubmitting}
            />
          )}
        />

        <Controller
          name="lastName"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              {...field}
              className={styles.textField}
              label="Фамилия"
              disabled={isSubmitting}
            />
          )}
        />

        <Controller
          name="firstName"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              {...field}
              className={styles.textField}
              label="Имя"
              disabled={isSubmitting}
            />
          )}
        />

        <Controller
          name="middleName"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              className={styles.textField}
              label="Отчество"
              disabled={isSubmitting}
            />
          )}
        />

        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              className={styles.textField}
              label="Телефон"
              type="tel"
              disabled={isSubmitting}
            />
          )}
        />

        <Controller
          name="position"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              className={styles.textField}
              label="Должность"
              disabled={isSubmitting}
            />
          )}
        />
      </div>

      <div className={styles.submitWrapper}>
        <Button
          type="submit"
          size="m"
          loading={isSubmitting}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Отправка..." : "Отправить"}
        </Button>
      </div>
    </>
  );
};
