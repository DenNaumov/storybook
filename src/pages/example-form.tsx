import React from "react";
import Head from "next/head";
import { ProfileForm } from "@/components/profile-form/profile-form";
import styles from "@/styles/example-form.module.css";

export default function ExampleFormPage() {
  return (
    <>
      <Head>
        <title>Онкетная форма сотрудника</title>
      </Head>

      <div className={styles.container}>
        <ProfileForm />
      </div>
    </>
  );
}
