import type { Meta, StoryObj } from "@storybook/nextjs";
import type { ReactNode } from "react";
import styles from "./icons.stories.module.css";
import type { ThemeIconColor } from "./theme-icon-color";
import { Icon16Icons, type Icon16IconKeys } from "./packs/16";
import { Icon20Icons, type Icon20IconKeys } from "./packs/20";
import { Icon24Icons, type Icon24IconKeys } from "./packs/24";
import { Icon28Icons, type Icon28IconKeys } from "./packs/28";
import { ResizableIcons, type ResizableIconKeys } from "./packs/resizable";

const themeIconColors = [
  "default",
  "disabled",
  "onMain",
  "error",
  "success",
  "brandMain",
  "info",
] as const satisfies readonly ThemeIconColor[];

type FixedPackStoryArgs<TIcon extends string> = {
  icon: TIcon;
  color?: ThemeIconColor;
};

type ResizableStoryArgs = {
  icon: ResizableIconKeys;
  size: number;
  color?: ThemeIconColor;
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

const renderPack16Icon = (icon: Icon16IconKeys, color?: ThemeIconColor) => {
  const Icon = Icon16Icons[icon];

  return <Icon width={16} height={16} color={color} />;
};

const renderPack20Icon = (icon: Icon20IconKeys, color?: ThemeIconColor) => {
  const Icon = Icon20Icons[icon];

  return <Icon width={20} height={20} color={color} />;
};

const renderPack24Icon = (icon: Icon24IconKeys, color?: ThemeIconColor) => {
  const Icon = Icon24Icons[icon];

  return <Icon width={24} height={24} color={color} />;
};

const renderPack28Icon = (icon: Icon28IconKeys, color?: ThemeIconColor) => {
  const Icon = Icon28Icons[icon];

  return <Icon width={28} height={28} color={color} />;
};

const renderResizableIcon = (
  icon: ResizableIconKeys,
  size: number,
  color?: ThemeIconColor,
  className?: string,
) => {
  const Icon = ResizableIcons[icon];

  return (
    <Icon width={size} height={size} color={color} className={className} />
  );
};

export const Pack16_List: StoryObj = {
  render: () => (
    <IconStoryLayout>
      {icons16.map((name) => (
        <IconStoryRow key={name} label={name} icon={renderPack16Icon(name)} />
      ))}
    </IconStoryLayout>
  ),
};

export const Pack16_Playground: StoryObj<FixedPackStoryArgs<Icon16IconKeys>> = {
  args: {
    icon: icons16[0],
    color: "brandMain",
  },
  argTypes: {
    icon: { control: "select", options: icons16 },
    color: {
      control: "select",
      options: themeIconColors,
      description:
        "Icon theme token: default, disabled, onMain, error, success, brandMain, info",
    },
  },
  render: (args: FixedPackStoryArgs<Icon16IconKeys>) => (
    <IconStoryLayout>
      <IconStoryRow
        label={args.icon}
        icon={renderPack16Icon(args.icon, args.color)}
      />
    </IconStoryLayout>
  ),
};

export const Pack20_List: StoryObj = {
  render: () => (
    <IconStoryLayout>
      {icons20.map((name) => (
        <IconStoryRow key={name} label={name} icon={renderPack20Icon(name)} />
      ))}
    </IconStoryLayout>
  ),
};

export const Pack20_Playground: StoryObj<FixedPackStoryArgs<Icon20IconKeys>> = {
  args: {
    icon: icons20[0],
    color: "brandMain",
  },
  argTypes: {
    icon: { control: "select", options: icons20 },
    color: {
      control: "select",
      options: themeIconColors,
      description:
        "Icon theme token: default, disabled, onMain, error, success, brandMain, info",
    },
  },
  render: (args: FixedPackStoryArgs<Icon20IconKeys>) => (
    <IconStoryLayout>
      <IconStoryRow
        label={args.icon}
        icon={renderPack20Icon(args.icon, args.color)}
      />
    </IconStoryLayout>
  ),
};

export const Pack24_List: StoryObj = {
  render: () => (
    <IconStoryLayout>
      {icons24.map((name) => (
        <IconStoryRow key={name} label={name} icon={renderPack24Icon(name)} />
      ))}
    </IconStoryLayout>
  ),
};

export const Pack24_Playground: StoryObj<FixedPackStoryArgs<Icon24IconKeys>> = {
  args: {
    icon: icons24[0],
    color: "brandMain",
  },
  argTypes: {
    icon: { control: "select", options: icons24 },
    color: {
      control: "select",
      options: themeIconColors,
      description:
        "Icon theme token: default, disabled, onMain, error, success, brandMain, info",
    },
  },
  render: (args: FixedPackStoryArgs<Icon24IconKeys>) => (
    <IconStoryLayout>
      <IconStoryRow
        label={args.icon}
        icon={renderPack24Icon(args.icon, args.color)}
      />
    </IconStoryLayout>
  ),
};

export const Pack28_List: StoryObj = {
  render: () => (
    <IconStoryLayout>
      {icons28.map((name) => (
        <IconStoryRow key={name} label={name} icon={renderPack28Icon(name)} />
      ))}
    </IconStoryLayout>
  ),
};

export const Pack28_Playground: StoryObj<FixedPackStoryArgs<Icon28IconKeys>> = {
  args: {
    icon: icons28[0],
    color: "brandMain",
  },
  argTypes: {
    icon: { control: "select", options: icons28 },
    color: {
      control: "select",
      options: themeIconColors,
      description:
        "Icon theme token: default, disabled, onMain, error, success, brandMain, info",
    },
  },
  render: (args: FixedPackStoryArgs<Icon28IconKeys>) => (
    <IconStoryLayout>
      <IconStoryRow
        label={args.icon}
        icon={renderPack28Icon(args.icon, args.color)}
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
          icon={renderResizableIcon(name, 24, undefined, styles.resizableIcon)}
        />
      ))}
    </IconStoryLayout>
  ),
};

export const Resizable_Playground: StoryObj<ResizableStoryArgs> = {
  args: {
    icon: "AddCircle28",
    size: 40,
    color: "brandMain",
  },
  argTypes: {
    icon: {
      control: "select",
      options: iconsResizable,
    },
    size: {
      control: { type: "number", min: 12, max: 96, step: 2 },
    },
    color: {
      control: "select",
      options: themeIconColors,
      description:
        "Icon theme token: default, disabled, onMain, error, success, brandMain, info",
    },
  },
  render: (args: ResizableStoryArgs) => (
    <IconStoryLayout>
      <IconStoryRow
        label={args.icon}
        icon={renderResizableIcon(
          args.icon,
          args.size,
          args.color,
          styles.resizableIcon,
        )}
      />
    </IconStoryLayout>
  ),
};
