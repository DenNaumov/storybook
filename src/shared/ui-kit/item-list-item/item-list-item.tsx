import type { ChangeEventHandler, ReactNode } from "react";

import { Checkbox } from "../checkbox/checkbox";
import { Typography } from "../typography/typography";
import styles from "./item-list-item.module.css";

export interface ItemListItemProps {
  children?: ReactNode;
  label?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  divider?: boolean;
  name?: string;
  id?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export const ItemListItem = ({
  children,
  label,
  checked,
  defaultChecked,
  disabled = false,
  divider = true,
  name,
  id,
  onChange,
}: ItemListItemProps) => {
  const classes = [
    styles.item,
    divider ? styles.withDivider : "",
    disabled ? styles.disabled : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <label className={classes}>
      <Typography
        as="span"
        variant="text-regular"
        className={styles.label}
        style={{ color: "inherit" }}
      >
        {label ?? children}
      </Typography>
      <Checkbox
        className={styles.checkbox}
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        name={name}
        id={id}
        onChange={onChange}
      />
    </label>
  );
};
