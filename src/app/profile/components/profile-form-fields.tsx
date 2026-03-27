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
  disabled: boolean;
  type?: InputHTMLAttributes<HTMLInputElement>["type"];
  rules?: RegisterOptions<ProfileFormData, FieldPath<ProfileFormData>>;
}

const ProfileFormField = ({
  name,
  label,
  disabled,
  type,
  rules,
}: ProfileFormFieldProps) => {
  const { control } = useFormContext<ProfileFormData>();
  const { field } = useController<ProfileFormData>({ name, control, rules });
  const isRequired = Boolean(rules?.required);
  const fieldLabel = isRequired ? `${label} *` : label;

  return (
    <TextLine {...field} label={fieldLabel} type={type} disabled={disabled} />
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
          disabled={isSubmitting}
          rules={{
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          }}
        />

        <ProfileFormField
          name="lastName"
          label="Фамилия"
          disabled={isSubmitting}
          rules={{ required: true }}
        />

        <ProfileFormField
          name="firstName"
          label="Имя"
          disabled={isSubmitting}
          rules={{ required: true }}
        />

        <ProfileFormField
          name="middleName"
          label="Отчество"
          disabled={isSubmitting}
        />

        <ProfileFormField
          name="phone"
          label="Телефон"
          type="tel"
          disabled={isSubmitting}
        />

        <ProfileFormField
          name="position"
          label="Должность"
          disabled={isSubmitting}
        />
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
