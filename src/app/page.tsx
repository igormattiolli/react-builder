"use client";
import styles from "./page.module.css";
import DynamicForm from "../components/dynamic-form";
import FormToBuildDynamicForm from "../components/form-to-build-dynamic-form";
import { useState } from "react";
import { Property } from "../components/dynamic-form/build-form/InputForm";

export default function Home() {
  const [inputs, setInputs] = useState<Property[]>([]);
  return (
    <main className={styles.main}>
      <div className={styles["form-box"]}>
        <FormToBuildDynamicForm setNewInputs={setInputs} />
      </div>
      <div className={styles["form-dynamic"]}>
        <h2>New Form</h2>
        <DynamicForm currentInputs={inputs} />
      </div>
    </main>
  );
}
