import type { Meta, StoryObj } from "@storybook/nextjs";
import { Icon16, Icon20, Icon24, Icon28, ResizableIcon } from "./icon-wrappers";
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

export const Pack16_List: StoryObj = {
  render: () => (
    <div className={styles.page}>
      <div className={styles.wrapper}>
        {icons16.map((name) => (
          <div key={name} className={styles.row}>
            <span className={styles.icon}><Icon16 icon={name} /></span>
            <span className={styles.name}>{name}</span>
          </div>
        ))}
      </div>
    </div>
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
    <div className={styles.page}>
      <div className={styles.wrapper}>
        <div className={styles.row}>
          <span className={styles.icon}><Icon16 icon={args.icon} color={args.color} /></span>
          <span className={styles.name}>{args.icon}</span>
        </div>
      </div>
    </div>
  ),
};

export const Pack20_List: StoryObj = {
  render: () => (
    <div className={styles.page}>
      <div className={styles.wrapper}>
        {icons20.map((name) => (
          <div key={name} className={styles.row}>
            <span className={styles.icon}><Icon20 icon={name} /></span>
            <span className={styles.name}>{name}</span>
          </div>
        ))}
      </div>
    </div>
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
    <div className={styles.page}>
      <div className={styles.wrapper}>
        <div className={styles.row}>
          <span className={styles.icon}><Icon20 icon={args.icon} color={args.color} /></span>
          <span className={styles.name}>{args.icon}</span>
        </div>
      </div>
    </div>
  ),
};

export const Pack24_List: StoryObj = {
  render: () => (
    <div className={styles.page}>
      <div className={styles.wrapper}>
        {icons24.map((name) => (
          <div key={name} className={styles.row}>
            <span className={styles.icon}><Icon24 icon={name} /></span>
            <span className={styles.name}>{name}</span>
          </div>
        ))}
      </div>
    </div>
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
    <div className={styles.page}>
      <div className={styles.wrapper}>
        <div className={styles.row}>
          <span className={styles.icon}><Icon24 icon={args.icon} color={args.color} /></span>
          <span className={styles.name}>{args.icon}</span>
        </div>
      </div>
    </div>
  ),
};

export const Pack28_List: StoryObj = {
  render: () => (
    <div className={styles.page}>
      <div className={styles.wrapper}>
        {icons28.map((name) => (
          <div key={name} className={styles.row}>
            <span className={styles.icon}><Icon28 icon={name} /></span>
            <span className={styles.name}>{name}</span>
          </div>
        ))}
      </div>
    </div>
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
    <div className={styles.page}>
      <div className={styles.wrapper}>
        <div className={styles.row}>
          <span className={styles.icon}><Icon28 icon={args.icon} color={args.color} /></span>
          <span className={styles.name}>{args.icon}</span>
        </div>
      </div>
    </div>
  ),
};

export const Resizable_List: StoryObj = {
  render: () => (
    <div className={styles.page}>
      <div className={styles.wrapper}>
        {iconsResizable.map((name) => (
          <div key={name} className={styles.row}>
            <span className={styles.icon}><ResizableIcon icon={name} size={24} className={styles.resizableIcon} /></span>
            <span className={styles.name}>{name}</span>
          </div>
        ))}
      </div>
    </div>
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
    <div className={styles.page}>
      <div className={styles.wrapper}>
        <div className={styles.row}>
          <span className={styles.icon}>
            <ResizableIcon icon={args.icon} size={args.size} color={args.color} className={styles.resizableIcon} />
          </span>
          <span className={styles.name}>{args.icon}</span>
        </div>
      </div>
    </div>
  ),
};
