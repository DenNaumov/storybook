import React, { useState } from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import Head from "next/head";

import { TextField } from "@/ui-kit/text-field/text-field";
import { Button } from "@/ui-kit/button/button";
import styles from "@/styles/example-form.module.css";

interface FormData {
  firstName: string;
  lastName: string;
  middleName: string;
  phone: string;
  email: string;
  position: string;
}

const EmployeeFormFields = () => {
  const { register, formState: { isSubmitting } } = useFormContext<FormData>();

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
          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
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

export default function ExampleFormPage() {
  const methods = useForm<FormData>();
  const { handleSubmit, reset } = methods;
  
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

          <FormProvider {...methods}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
              <EmployeeFormFields />
            </form>
          </FormProvider>

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
