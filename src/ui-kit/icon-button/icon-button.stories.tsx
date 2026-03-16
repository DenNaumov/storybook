import type { ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs";
import { IconButton } from "./icon-button";
import { Icon24, ResizableIcon } from "../icon/icon-wrappers";
import {
  ResizableIcons,
  type ResizableIconKeys,
} from "../icon/packs/resizable";
import styles from "./icon-button.stories.module.css";

const resizableIconNames = Object.keys(ResizableIcons) as ResizableIconKeys[];

const iconSizeToPixels: Record<"s" | "m", number> = {
  s: 20,
  m: 24,
};

type IconButtonStoryArgs = Omit<ComponentProps<typeof IconButton>, "icon"> & {
  icon: ResizableIconKeys;
};

const meta: Meta<IconButtonStoryArgs> = {
  title: "UI Kit/IconButton",
  component: IconButton,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    buttonSize: {
      control: "select",
      options: ["s", "m"],
    },
    iconSize: {
      control: "select",
      options: ["s", "m"],
    },
    icon: {
      control: "select",
      options: resizableIconNames,
    },
    badgeCount: {
      control: "text",
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
type Story = StoryObj<IconButtonStoryArgs>;

const NotificationsIcon = <Icon24 icon="Notifications" size={24} />;

export const Playground: Story = {
  args: {
    icon: "Add01",
    buttonSize: "m",
    iconSize: "m",
    badgeCount: undefined,
  },
  render: (args: IconButtonStoryArgs) => {
    const { icon, ...iconButtonArgs } = args;
    const size = iconSizeToPixels[args.iconSize ?? "m"];
    return (
      <div className={styles.stage}>
        <div className={styles.surface}>
          <div />
          <div className={styles.headerCell}>Playground</div>
          <div className={styles.centered}>
            <IconButton
              {...iconButtonArgs}
              icon={<ResizableIcon icon={icon} size={size} />}
            />
          </div>
        </div>
      </div>
    );
  },
};

export const Showcase: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className={styles.stage}>
      <div className={styles.surface}>
        <div />
        <div className={styles.headerCell}>ButtonSize=M</div>
        <div className={styles.headerCell}>ButtonSize=S</div>

        <div className={styles.sectionLabel}>IconSize=M</div>

        <div className={styles.rowLabel}>Default</div>
        <div className={styles.centered}>
          <IconButton
            icon={<ResizableIcon icon="Add01" size={24} />}
            buttonSize="m"
            iconSize="m"
          />
        </div>
        <div className={styles.centered}>
          <IconButton
            icon={<ResizableIcon icon="Add01" size={24} />}
            buttonSize="s"
            iconSize="m"
          />
        </div>

        <div className={styles.rowLabel}>Pressed</div>
        <div className={styles.centered}>
          <IconButton
            icon={<ResizableIcon icon="Add01" size={24} />}
            buttonSize="m"
            iconSize="m"
            pressed
          />
        </div>
        <div className={styles.centered}>
          <IconButton
            icon={<ResizableIcon icon="Add01" size={24} />}
            buttonSize="s"
            iconSize="m"
            pressed
          />
        </div>

        <div className={styles.rowLabel}>Disabled</div>
        <div className={styles.centered}>
          <IconButton
            icon={<ResizableIcon icon="Add01" size={24} />}
            buttonSize="m"
            iconSize="m"
            disabled
          />
        </div>
        <div className={styles.centered}>
          <IconButton
            icon={<ResizableIcon icon="Add01" size={24} />}
            buttonSize="s"
            iconSize="m"
            disabled
          />
        </div>

        <div className={styles.sectionLabelWide}>IconSize=S</div>

        <div className={styles.rowLabel}>Default</div>
        <div className={styles.centered}>
          <IconButton
            icon={<ResizableIcon icon="Add01" size={20} />}
            buttonSize="m"
            iconSize="s"
          />
        </div>
        <div className={styles.centered}>
          <IconButton
            icon={<ResizableIcon icon="Add01" size={20} />}
            buttonSize="s"
            iconSize="s"
          />
        </div>

        <div className={styles.rowLabel}>Pressed</div>
        <div className={styles.centered}>
          <IconButton
            icon={<ResizableIcon icon="Add01" size={20} />}
            buttonSize="m"
            iconSize="s"
            pressed
          />
        </div>
        <div className={styles.centered}>
          <IconButton
            icon={<ResizableIcon icon="Add01" size={20} />}
            buttonSize="s"
            iconSize="s"
            pressed
          />
        </div>

        <div className={styles.rowLabel}>Disabled</div>
        <div className={styles.centered}>
          <IconButton
            icon={<ResizableIcon icon="Add01" size={20} />}
            buttonSize="m"
            iconSize="s"
            disabled
          />
        </div>
        <div className={styles.centered}>
          <IconButton
            icon={<ResizableIcon icon="Add01" size={20} />}
            buttonSize="s"
            iconSize="s"
            disabled
          />
        </div>

        <div className={styles.sectionLabelWide}>Badge=Yes</div>

        <div className={styles.rowLabel}>Default</div>
        <div className={styles.centered}>
          <IconButton
            icon={NotificationsIcon}
            buttonSize="m"
            iconSize="m"
            badgeCount="9"
          />
        </div>
        <div />

        <div className={styles.rowLabel}>Pressed</div>
        <div className={styles.centered}>
          <IconButton
            icon={NotificationsIcon}
            buttonSize="m"
            iconSize="m"
            badgeCount="9"
            pressed
          />
        </div>
        <div />

        <div className={styles.rowLabel}>Disabled</div>
        <div className={styles.centered}>
          <IconButton
            icon={NotificationsIcon}
            buttonSize="m"
            iconSize="m"
            badgeCount="9"
            disabled
          />
        </div>
        <div />
      </div>
    </div>
  ),
};
