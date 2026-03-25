import React from "react";
// import Head from "next/head";
import { ProfileForm } from "./components/profile-form";
import styles from "./page.module.css";

export default function ExampleFormPage() {
  return (
    <>
      <div className={styles.container}>
        <ProfileForm />
      </div>
    </>
  );
}
