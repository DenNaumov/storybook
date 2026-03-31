import type { InputHTMLAttributes } from "react";
import {
  useController,
  useFormContext,
  type FieldPath,
  type RegisterOptions,
} from "react-hook-form";
import { TextLine } from "@/shared/ui-kit/text-line/text-line";
import { Button } from "@/shared/ui-kit/button/button";
import type { ProfileFormData } from "./profile-form.types";
import styles from "./profile-form.module.css";

interface ProfileFormFieldProps {
  name: FieldPath<ProfileFormData>;
  label: string;
  type?: InputHTMLAttributes<HTMLInputElement>["type"];
  rules?: RegisterOptions<ProfileFormData, FieldPath<ProfileFormData>>;
}

const ProfileFormField = ({
  name,
  label,
  type,
  rules,
}: ProfileFormFieldProps) => {
  const {
    control,
    formState: { isSubmitting },
  } = useFormContext<ProfileFormData>();
  const { field } = useController<ProfileFormData>({ name, control, rules });
  const {
    name: fieldName,
    value: fieldValue,
    onBlur: handleBlur,
    onChange: handleValueChange,
    ref: fieldRef,
  } = field;
  const isRequired = Boolean(rules?.required);
  const fieldLabel = isRequired ? `${label} *` : label;

  return (
    <TextLine
      label={fieldLabel}
      type={type}
      name={fieldName}
      value={fieldValue}
      onBlur={handleBlur}
      onValueChange={handleValueChange}
      ref={fieldRef}
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
        <ProfileFormField
          name="email"
          label="E-mail"
          type="email"
          rules={{
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          }}
        />

        <ProfileFormField
          name="lastName"
          label="Фамилия"
          rules={{ required: true }}
        />

        <ProfileFormField
          name="firstName"
          label="Имя"
          rules={{ required: true }}
        />

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
