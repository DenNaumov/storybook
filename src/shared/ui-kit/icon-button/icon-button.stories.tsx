import type { Meta, StoryObj } from "@storybook/nextjs";
import type { ComponentType } from "react";
import { ResizableIcons } from "../icon";
import { IconButton, type SvgIconComponent } from "./icon-button";
import styles from "./icon-button.stories.module.css";

const AddIcon = ResizableIcons.Add01;
const HomeIcon = ResizableIcons.Home28;

type IconButtonStoryArgs = Omit<
  React.ComponentProps<typeof IconButton>,
  "icon"
> & {
  iconName: "Add01" | "Home28";
};

const iconMap: Record<IconButtonStoryArgs["iconName"], SvgIconComponent> = {
  Add01: AddIcon,
  Home28: HomeIcon,
};

const meta: Meta<IconButtonStoryArgs> = {
  title: "UI Kit/Buttons/IconButton",
  component: IconButton as unknown as ComponentType<IconButtonStoryArgs>,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    iconName: "Add01",
    buttonSize: "m",
    iconSize: "m",
    badgeCount: undefined,
  },
  argTypes: {
    buttonSize: {
      control: "select",
      options: ["s", "m"],
    },
    iconSize: {
      control: "select",
      options: ["s", "m"],
    },
    iconName: {
      control: "select",
      options: ["Add01", "Home28"],
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

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: ({ iconName, ...args }) => {
    return (
      <div className={styles.stage}>
        <div className={styles.surface}>
          <div />
          <div className={styles.headerCell}>Playground</div>
          <div className={styles.centered}>
            <IconButton {...args} icon={iconMap[iconName]} />
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
          <IconButton icon={AddIcon} buttonSize="m" iconSize="m" />
        </div>
        <div className={styles.centered}>
          <IconButton icon={AddIcon} buttonSize="s" iconSize="m" />
        </div>

        <div className={styles.rowLabel}>Pressed</div>
        <div className={styles.centered}>
          <IconButton icon={AddIcon} buttonSize="m" iconSize="m" pressed />
        </div>
        <div className={styles.centered}>
          <IconButton icon={AddIcon} buttonSize="s" iconSize="m" pressed />
        </div>

        <div className={styles.rowLabel}>Disabled</div>
        <div className={styles.centered}>
          <IconButton icon={AddIcon} buttonSize="m" iconSize="m" disabled />
        </div>
        <div className={styles.centered}>
          <IconButton icon={AddIcon} buttonSize="s" iconSize="m" disabled />
        </div>

        <div className={styles.sectionLabelWide}>IconSize=S</div>

        <div className={styles.rowLabel}>Default</div>
        <div className={styles.centered}>
          <IconButton icon={AddIcon} buttonSize="m" iconSize="s" />
        </div>
        <div className={styles.centered}>
          <IconButton icon={AddIcon} buttonSize="s" iconSize="s" />
        </div>

        <div className={styles.rowLabel}>Pressed</div>
        <div className={styles.centered}>
          <IconButton icon={AddIcon} buttonSize="m" iconSize="s" pressed />
        </div>
        <div className={styles.centered}>
          <IconButton icon={AddIcon} buttonSize="s" iconSize="s" pressed />
        </div>

        <div className={styles.rowLabel}>Disabled</div>
        <div className={styles.centered}>
          <IconButton icon={AddIcon} buttonSize="m" iconSize="s" disabled />
        </div>
        <div className={styles.centered}>
          <IconButton icon={AddIcon} buttonSize="s" iconSize="s" disabled />
        </div>

        <div className={styles.sectionLabelWide}>Badge=Yes</div>

        <div className={styles.rowLabel}>Default</div>
        <div className={styles.centered}>
          <IconButton
            icon={HomeIcon}
            buttonSize="m"
            iconSize="m"
            badgeCount="9"
          />
        </div>
        <div />

        <div className={styles.rowLabel}>Pressed</div>
        <div className={styles.centered}>
          <IconButton
            icon={HomeIcon}
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
            icon={HomeIcon}
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
