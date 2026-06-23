import type { HTMLAttributes, ReactNode } from "react";

import styles from "./item-list.module.css";

export interface ItemListProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const ItemList = ({ children, className, ...props }: ItemListProps) => {
  const classes = [styles.itemList, className].filter(Boolean).join(" ");

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
