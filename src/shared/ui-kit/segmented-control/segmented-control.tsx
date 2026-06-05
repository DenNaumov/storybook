import { useState } from "react";
import type {
  ButtonHTMLAttributes,
  HTMLAttributes,
  MouseEventHandler,
  ReactNode,
} from "react";
import { Typography } from "../typography/typography";
import styles from "./segmented-control.module.css";

export interface SegmentedControlItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
  label?: string;
  children?: ReactNode;
}

export interface SegmentedControlItemConfig extends Omit<
  SegmentedControlItemProps,
  "children" | "onClick" | "key"
> {
  key: string;
  label: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface SegmentedControlProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "children" | "defaultValue" | "onChange"
> {
  children?: ReactNode;
  fullWidth?: boolean;
  items?: SegmentedControlItemConfig[];
  defaultValue?: string;
  onChange?: (
    key: string,
    item: SegmentedControlItemConfig,
    index: number,
  ) => void;
}

export const SegmentedControl = ({
  children,
  fullWidth = false,
  items,
  defaultValue,
  onChange,
  className,
  role = "radiogroup",
  ...props
}: SegmentedControlProps) => {
  const [selectedKey, setSelectedKey] = useState(
    () =>
      defaultValue ??
      items?.find((item) => item.selected)?.key ??
      items?.[0]?.key,
  );
  const classes = [
    styles.segmentedControl,
    fullWidth ? styles.fullWidth : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} role={role} {...props}>
      {items
        ? items.map((item, index) => {
            const { label, key, onClick, ...itemProps } = item;

            return (
              <SegmentedControlItem
                key={key}
                label={label}
                onClick={(event) => {
                  onClick?.(event);

                  if (event.defaultPrevented) {
                    return;
                  }

                  setSelectedKey(key);
                  onChange?.(key, item, index);
                }}
                {...itemProps}
                selected={selectedKey === key}
              />
            );
          })
        : children}
    </div>
  );
};

export const SegmentedControlItem = ({
  selected = false,
  label,
  children,
  disabled,
  type = "button",
  className,
  ...props
}: SegmentedControlItemProps) => {
  const content = children ?? label;
  const classes = [
    styles.item,
    selected ? styles.selected : "",
    disabled ? styles.disabled : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      className={classes}
      type={type}
      role="radio"
      aria-checked={selected}
      disabled={disabled}
      {...props}
    >
      <Typography
        as="span"
        variant="caption1-regular"
        className={styles.label}
        style={{ color: "inherit" }}
      >
        {content}
      </Typography>
    </button>
  );
};
