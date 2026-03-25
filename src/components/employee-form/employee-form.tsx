import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { EmployeeFormFields } from "./employee-form-fields";
import type { EmployeeFormData } from "./employee-form.types";
import styles from "@/styles/example-form.module.css";

export const EmployeeForm = () => {
  const methods = useForm<EmployeeFormData>();
  const { handleSubmit, reset } = methods;

  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (data: EmployeeFormData) => {
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
          <EmployeeFormFields />
        </form>
      </FormProvider>
    </div>
  );
};
