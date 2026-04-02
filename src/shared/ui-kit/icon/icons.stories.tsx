import type { Meta, StoryObj } from "@storybook/nextjs";
import type { ReactNode } from "react";
import { Icon16, Icon20, Icon24, Icon28, ResizableIcon } from ".";
import styles from "./icons.stories.module.css";
import { Icon16Icons, type Icon16IconKeys } from "./packs/16";
import { Icon20Icons, type Icon20IconKeys } from "./packs/20";
import { Icon24Icons, type Icon24IconKeys } from "./packs/24";
import { Icon28Icons, type Icon28IconKeys } from "./packs/28";
import { ResizableIcons, type ResizableIconKeys } from "./packs/resizable";

type FixedPackStoryArgs<TIcon extends string> = {
  icon: TIcon;
  color?: string;
};

type ResizableStoryArgs = {
  icon: ResizableIconKeys;
  size: number;
  color?: string;
};

const meta: Meta = {
  title: "UI Kit/Icons",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

const icons16 = Object.keys(Icon16Icons) as Icon16IconKeys[];
const icons20 = Object.keys(Icon20Icons) as Icon20IconKeys[];
const icons24 = Object.keys(Icon24Icons) as Icon24IconKeys[];
const icons28 = Object.keys(Icon28Icons) as Icon28IconKeys[];
const iconsResizable = Object.keys(ResizableIcons) as ResizableIconKeys[];

const IconStoryLayout = ({ children }: { children: ReactNode }) => (
  <div className={styles.page}>
    <div className={styles.wrapper}>{children}</div>
  </div>
);

const IconStoryRow = ({ label, icon }: { label: string; icon: ReactNode }) => (
  <div className={styles.row}>
    <span className={styles.icon}>{icon}</span>
    <span className={styles.name}>{label}</span>
  </div>
);

export const Pack16_List: StoryObj = {
  render: () => (
    <IconStoryLayout>
      {icons16.map((name) => (
        <IconStoryRow key={name} label={name} icon={<Icon16 icon={name} />} />
      ))}
    </IconStoryLayout>
  ),
};

export const Pack16_Playground: StoryObj<FixedPackStoryArgs<Icon16IconKeys>> = {
  args: {
    icon: icons16[0],
    color: "var(--theme-icon-brand-main)",
  },
  argTypes: {
    icon: { control: "select", options: icons16 },
    color: { control: "color" },
  },
  render: (args: FixedPackStoryArgs<Icon16IconKeys>) => (
    <IconStoryLayout>
      <IconStoryRow
        label={args.icon}
        icon={<Icon16 icon={args.icon} color={args.color} />}
      />
    </IconStoryLayout>
  ),
};

export const Pack20_List: StoryObj = {
  render: () => (
    <IconStoryLayout>
      {icons20.map((name) => (
        <IconStoryRow key={name} label={name} icon={<Icon20 icon={name} />} />
      ))}
    </IconStoryLayout>
  ),
};

export const Pack20_Playground: StoryObj<FixedPackStoryArgs<Icon20IconKeys>> = {
  args: {
    icon: icons20[0],
    color: "var(--theme-icon-brand-main)",
  },
  argTypes: {
    icon: { control: "select", options: icons20 },
    color: { control: "color" },
  },
  render: (args: FixedPackStoryArgs<Icon20IconKeys>) => (
    <IconStoryLayout>
      <IconStoryRow
        label={args.icon}
        icon={<Icon20 icon={args.icon} color={args.color} />}
      />
    </IconStoryLayout>
  ),
};

export const Pack24_List: StoryObj = {
  render: () => (
    <IconStoryLayout>
      {icons24.map((name) => (
        <IconStoryRow key={name} label={name} icon={<Icon24 icon={name} />} />
      ))}
    </IconStoryLayout>
  ),
};

export const Pack24_Playground: StoryObj<FixedPackStoryArgs<Icon24IconKeys>> = {
  args: {
    icon: icons24[0],
    color: "var(--theme-icon-brand-main)",
  },
  argTypes: {
    icon: { control: "select", options: icons24 },
    color: { control: "color" },
  },
  render: (args: FixedPackStoryArgs<Icon24IconKeys>) => (
    <IconStoryLayout>
      <IconStoryRow
        label={args.icon}
        icon={<Icon24 icon={args.icon} color={args.color} />}
      />
    </IconStoryLayout>
  ),
};

export const Pack28_List: StoryObj = {
  render: () => (
    <IconStoryLayout>
      {icons28.map((name) => (
        <IconStoryRow key={name} label={name} icon={<Icon28 icon={name} />} />
      ))}
    </IconStoryLayout>
  ),
};

export const Pack28_Playground: StoryObj<FixedPackStoryArgs<Icon28IconKeys>> = {
  args: {
    icon: icons28[0],
    color: "var(--theme-icon-brand-main)",
  },
  argTypes: {
    icon: { control: "select", options: icons28 },
    color: { control: "color" },
  },
  render: (args: FixedPackStoryArgs<Icon28IconKeys>) => (
    <IconStoryLayout>
      <IconStoryRow
        label={args.icon}
        icon={<Icon28 icon={args.icon} color={args.color} />}
      />
    </IconStoryLayout>
  ),
};

export const Resizable_List: StoryObj = {
  render: () => (
    <IconStoryLayout>
      {iconsResizable.map((name) => (
        <IconStoryRow
          key={name}
          label={name}
          icon={
            <ResizableIcon
              icon={name}
              size={24}
              className={styles.resizableIcon}
            />
          }
        />
      ))}
    </IconStoryLayout>
  ),
};

export const Resizable_Playground: StoryObj<ResizableStoryArgs> = {
  args: {
    icon: "AddCircle28",
    size: 40,
    color: "var(--theme-icon-brand-main)",
  },
  argTypes: {
    icon: {
      control: "select",
      options: iconsResizable,
    },
    size: {
      control: { type: "number", min: 12, max: 96, step: 2 },
    },
    color: { control: "color" },
  },
  render: (args: ResizableStoryArgs) => (
    <IconStoryLayout>
      <IconStoryRow
        label={args.icon}
        icon={
          <ResizableIcon
            icon={args.icon}
            size={args.size}
            color={args.color}
            className={styles.resizableIcon}
          />
        }
      />
    </IconStoryLayout>
  ),
};
