import type { Meta, StoryObj } from "@storybook/nextjs";
import type { ComponentProps } from "react";

import { Icon24 } from "../icon";
import { Icon24Icons, type Icon24IconKeys } from "../icon/packs/24";
import { Button } from "./button";
import styles from "./button.stories.module.css";

type ButtonStoryArgs = Omit<ComponentProps<typeof Button>, "startIcon" | "endIcon"> & {
  startIcon?: ComponentProps<typeof Button>["startIcon"];
  endIcon?: ComponentProps<typeof Button>["endIcon"];
  leftIcon?: Icon24IconKeys | "Нет";
  rightIcon?: Icon24IconKeys | "Нет";
};

const meta: Meta<ButtonStoryArgs> = {
  title: "UI Kit/Button",
  component: Button,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    variant: "primary",
    size: "m",
    label: "Сохранить",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "bezeled", "outlined", "text"],
    },
    primary: { control: false, table: { disable: true } },
    size: {
      control: "select",
      options: ["s", "m"],
    },
    loading: { control: false, table: { disable: true } },
    pressed: { control: false, table: { disable: true } },
    disabled: { control: false, table: { disable: true } },
    startIcon: { control: false, table: { disable: true } },
    endIcon: { control: false, table: { disable: true } },
    children: { control: false, table: { disable: true } },
    onClick: { control: false, table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<ButtonStoryArgs>;

const icon24Options = Object.keys(Icon24Icons) as Icon24IconKeys[];

const Icon24Preview = ({ name }: { name: Icon24IconKeys }) => <Icon24 icon={name} />;
const defaultIcon = icon24Options[0];

const StateRow = ({
  state,
  size,
}: {
  state: "default" | "pressed" | "disabled" | "loading";
  size: "s" | "m";
}) => {
  const commonProps = {
    size,
    label: "Сохранить",
    startIcon: defaultIcon ? <Icon24Preview name={defaultIcon} /> : undefined,
    endIcon: defaultIcon ? <Icon24Preview name={defaultIcon} /> : undefined,
  };

  return (
    <>
      <div className={styles.rowLabel}>{state}</div>
      <Button
        variant="primary"
        {...commonProps}
        pressed={state === "pressed"}
        disabled={state === "disabled"}
        loading={state === "loading"}
      />
      <Button
        variant="bezeled"
        {...commonProps}
        pressed={state === "pressed"}
        disabled={state === "disabled"}
        loading={state === "loading"}
      />
      <Button
        variant="outlined"
        {...commonProps}
        pressed={state === "pressed"}
        disabled={state === "disabled"}
        loading={state === "loading"}
      />
      <Button
        variant="text"
        {...commonProps}
        pressed={state === "pressed"}
        disabled={state === "disabled"}
        loading={state === "loading"}
      />
    </>
  );
};

export const Showcase: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className={styles.stage}>
      <div className={styles.header}>
        <div className={styles.title}>Button</div>
      </div>

      <div className={styles.sectionTitle}>Size = M</div>
      <div className={styles.grid}>
        <div className={styles.gridHead} />
        <div className={styles.gridHead}>Primary</div>
        <div className={styles.gridHead}>Bezeled</div>
        <div className={styles.gridHead}>Outlined</div>
        <div className={styles.gridHead}>Text</div>

        <StateRow state="default" size="m" />
        <StateRow state="pressed" size="m" />
        <StateRow state="disabled" size="m" />
        <StateRow state="loading" size="m" />
      </div>

      <div className={styles.sectionTitle}>Size = S</div>
      <div className={styles.grid}>
        <div className={styles.gridHead} />
        <div className={styles.gridHead}>Primary</div>
        <div className={styles.gridHead}>Bezeled</div>
        <div className={styles.gridHead}>Outlined</div>
        <div className={styles.gridHead}>Text</div>

        <StateRow state="default" size="s" />
        <StateRow state="pressed" size="s" />
        <StateRow state="disabled" size="s" />
        <StateRow state="loading" size="s" />
      </div>
    </div>
  ),
};

export const Playground: Story = {
  args: {
    variant: "primary",
    size: "s",
    label: "Сохранить",
    leftIcon: "Нет",
    rightIcon: "Нет",
    startIcon: null,
    loading: false,
    disabled: false,
  },
  argTypes: {
    leftIcon: {
      control: "select",
      options: ["Нет", ...icon24Options],
      name: "Left icon",
      mapping: { Нет: undefined },
    },
    rightIcon: {
      control: "select",
      options: ["Нет", ...icon24Options],
      name: "Right icon",
      mapping: { Нет: undefined },
    },
  },
  render: (args: ButtonStoryArgs) => (
    <div className={styles.stage}>
      <div className={styles.playgroundGrid}>
        <div className={styles.gridHead}>default</div>
        <div className={styles.gridHead}>pressed</div>
        <div className={styles.gridHead}>disabled</div>
        <div className={styles.gridHead}>loading</div>

        <Button
          variant={args.variant}
          size={args.size}
          label={args.label}
          startIcon={
            args.leftIcon && args.leftIcon !== "Нет" ? (
              <Icon24Preview name={args.leftIcon} />
            ) : undefined
          }
          endIcon={
            args.rightIcon && args.rightIcon !== "Нет" ? (
              <Icon24Preview name={args.rightIcon} />
            ) : undefined
          }
        />
        <Button
          variant={args.variant}
          size={args.size}
          label={args.label}
          pressed
          startIcon={
            args.leftIcon && args.leftIcon !== "Нет" ? (
              <Icon24Preview name={args.leftIcon} />
            ) : undefined
          }
          endIcon={
            args.rightIcon && args.rightIcon !== "Нет" ? (
              <Icon24Preview name={args.rightIcon} />
            ) : undefined
          }
        />
        <Button
          variant={args.variant}
          size={args.size}
          label={args.label}
          disabled
          startIcon={
            args.leftIcon && args.leftIcon !== "Нет" ? (
              <Icon24Preview name={args.leftIcon} />
            ) : undefined
          }
          endIcon={
            args.rightIcon && args.rightIcon !== "Нет" ? (
              <Icon24Preview name={args.rightIcon} />
            ) : undefined
          }
        />
        <Button
          variant={args.variant}
          size={args.size}
          label={args.label}
          loading
          startIcon={
            args.leftIcon && args.leftIcon !== "Нет" ? (
              <Icon24Preview name={args.leftIcon} />
            ) : undefined
          }
          endIcon={
            args.rightIcon && args.rightIcon !== "Нет" ? (
              <Icon24Preview name={args.rightIcon} />
            ) : undefined
          }
        />
      </div>
    </div>
  ),
};
