import { z } from "zod";
import type { FieldPath } from "react-hook-form";

export const profileFormSchema = z.object({
  firstName: z.string().trim().min(1, "Укажите имя"),
  lastName: z.string().trim().min(1, "Укажите фамилию"),
  middleName: z.string(),
  phone: z.string(),
  email: z
    .string()
    .trim()
    .min(1, "Укажите e-mail")
    .email("Укажите корректный e-mail"),
  position: z.string(),
});

export type ProfileFormData = z.infer<typeof profileFormSchema>;

export const isProfileFormFieldRequired = (
  fieldName: FieldPath<ProfileFormData>,
) => !profileFormSchema.shape[fieldName].safeParse("").success;
