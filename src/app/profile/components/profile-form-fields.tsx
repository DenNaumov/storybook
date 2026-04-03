import type { InputHTMLAttributes } from "react";
import {
  useController,
  useFormContext,
  type FieldPath,
} from "react-hook-form";
import { TextLine } from "@/shared/ui-kit/text-line/text-line";
import { Button } from "@/shared/ui-kit/button/button";
import type { ProfileFormData } from "./profile-form.types";
import styles from "./profile-form.module.css";

const requiredFieldNames: Array<FieldPath<ProfileFormData>> = [
  "email",
  "lastName",
  "firstName",
];

interface ProfileFormFieldProps {
  name: FieldPath<ProfileFormData>;
  label: string;
  type?: InputHTMLAttributes<HTMLInputElement>["type"];
}

const ProfileFormField = ({ name, label, type }: ProfileFormFieldProps) => {
  const {
    control,
    formState: { isSubmitting },
  } = useFormContext<ProfileFormData>();
  const { field, fieldState } = useController<ProfileFormData>({
    name,
    control,
  });
  const {
    name: fieldName,
    value: fieldValue,
    onBlur: handleBlur,
    onChange: handleValueChange,
    ref: fieldRef,
  } = field;
  const isRequired = requiredFieldNames.includes(name);
  const fieldLabel = isRequired ? `${label} *` : label;

  return (
    <TextLine
      label={fieldLabel}
      type={type}
      name={fieldName}
      value={fieldValue}
      onBlur={handleBlur}
      onChange={handleValueChange}
      ref={fieldRef}
      error={Boolean(fieldState.error)}
      disabled={isSubmitting}
    />
  );
};

export const ProfileFormFields = () => {
  const {
    formState: { isSubmitting },
  } = useFormContext<ProfileFormData>();

  return (
    <>
      <div className={styles.fieldsGroup}>
        <ProfileFormField name="email" label="E-mail" type="email" />

        <ProfileFormField name="lastName" label="Фамилия" />

        <ProfileFormField name="firstName" label="Имя" />

        <ProfileFormField name="middleName" label="Отчество" />

        <ProfileFormField name="phone" label="Телефон" type="tel" />

        <ProfileFormField name="position" label="Должность" />
      </div>

      <div className={styles.submitWrapper}>
        <Button
          type="submit"
          size="m"
          loading={isSubmitting}
          disabled={isSubmitting}
        >
          Сохранить
        </Button>
      </div>
    </>
  );
};
