import React from "react";
import Head from "next/head";
import { EmployeeForm } from "@/components/employee-form/employee-form";
import styles from "@/styles/example-form.module.css";

export default function ExampleFormPage() {
  return (
    <>
      <Head>
        <title>Онкетная форма сотрудника</title>
      </Head>

      <div className={styles.container}>
        <EmployeeForm />
      </div>
    </>
  );
}
