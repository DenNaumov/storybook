import type { ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs";
import { FAB } from "./fab";
import { ResizableIcon } from "../icon/icon-wrappers";
import { ResizableIcons, type ResizableIconKeys } from "../icon/packs/resizable";
import styles from "./fab.stories.module.css";

const resizableIconNames = Object.keys(ResizableIcons) as ResizableIconKeys[];

type FABStoryArgs = Omit<ComponentProps<typeof FAB>, "icon"> & {
  icon?: ResizableIconKeys | "Нет";
};

const meta: Meta<FABStoryArgs> = {
  title: "UI Kit/FAB",
  component: FAB,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "bezeled", "white"],
    },
    icon: {
      control: "select",
      options: ["Нет", ...resizableIconNames],
    },
    pressed: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<FABStoryArgs>;

const renderIcon = (icon?: ResizableIconKeys | "Нет") => (
  icon && icon !== "Нет" ? <ResizableIcon icon={icon} size={24} /> : undefined
);

export const Showcase: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className={styles.stage}>
      <div className={styles.surface}>
        <div />
        <div className={styles.headerCell}>Primary</div>
        <div className={styles.headerCell}>Bezeled</div>
        <div className={styles.headerCell}>White</div>

        <div className={styles.rowLabel}>Default</div>
        <div className={styles.centered}>
          <FAB variant="primary" icon={renderIcon("Add01")} />
        </div>
        <div className={styles.centered}>
          <FAB variant="bezeled" icon={renderIcon("Add01")} />
        </div>
        <div className={styles.centered}>
          <FAB variant="white" icon={renderIcon("Add01")} />
        </div>

        <div className={styles.rowLabel}>Pressed</div>
        <div className={styles.centered}>
          <FAB variant="primary" icon={renderIcon("Add01")} pressed />
        </div>
        <div className={styles.centered}>
          <FAB variant="bezeled" icon={renderIcon("Add01")} pressed />
        </div>
        <div className={styles.centered}>
          <FAB variant="white" icon={renderIcon("Add01")} pressed />
        </div>
      </div>
    </div>
  ),
};

export const Playground: Story = {
  args: {
    variant: "primary",
    icon: "Add01",
    pressed: false,
    disabled: false,
  },
  render: (args: FABStoryArgs) => {
    const { icon, ...fabArgs } = args;
    return (
      <div className={styles.stage}>
        <div className={styles.surface}>
          <div />
          <div className={styles.headerCell}>Playground</div>
          <div />
          <div className={styles.centered}>
            <FAB {...fabArgs} icon={renderIcon(icon)} />
          </div>
        </div>
      </div>
    );
  },
};
