import { useFormContext } from "react-hook-form";
import { TextField } from "@/ui-kit/text-field/text-field";
import { Button } from "@/ui-kit/button/button";
import type { ProfileFormData } from "./profile-form.types";
import styles from "./profile-form.module.css";

export const ProfileFormFields = () => {
  const {
    register,
    formState: { isSubmitting },
  } = useFormContext<ProfileFormData>();

  return (
    <>
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

      <TextField
        label="Отчество"
        placeholder="Иванович"
        disabled={isSubmitting}
        {...register("middleName")}
      />

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
          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        })}
      />

      <TextField
        label="Должность"
        placeholder="Frontend Developer"
        disabled={isSubmitting}
        {...register("position", { required: true })}
      />

      <Button
        type="submit"
        size="m"
        loading={isSubmitting}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Отправка..." : "Отправить анкету"}
      </Button>
    </>
  );
};
