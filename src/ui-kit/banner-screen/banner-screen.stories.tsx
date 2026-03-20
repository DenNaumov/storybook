import type { ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs";
import { Icon28 } from "../icon/icon-wrappers";
import { Illustration } from "../illustration/illustration";
import { BannerScreen } from "./banner-screen";
import styles from "./banner-screen.stories.module.css";

type BannerScreenStoryArgs = ComponentProps<typeof BannerScreen>;

const noop = () => undefined;

const meta: Meta<BannerScreenStoryArgs> = {
  title: "UI Kit/Feedback/BannerScreen",
  component: BannerScreen,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    actionLabel: { control: "text" },
    media: { control: false },
    onAction: { control: false },
  },
};

export default meta;
type Story = StoryObj<BannerScreenStoryArgs>;

export const Playground: Story = {
  args: {
    title: "Список пуст",
    description: "В списке нет значений",
    actionLabel: "Создать",
    media: <Illustration illustration="EmptyListNoAdd" size={184} />,
  },
  render: (args) => (
    <div className={styles.stage}>
      <div className={styles.phoneFrame}>
        <BannerScreen {...args} />
      </div>
    </div>
  ),
};

export const Showcase: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className={styles.stage}>
      <div className={styles.layout}>
        <div className={styles.previewColumn}>
          <div className={styles.sectionTitle}>
            <Icon28
              icon="FancyIcon"
              size={28}
              color="currentColor"
              aria-hidden="true"
            />
            <span>BannerScreen</span>
          </div>

          <div className={styles.phoneFrame}>
            <BannerScreen
              title="Список пуст"
              description="В списке нет значений"
              actionLabel="Создать"
              media={<Illustration illustration="EmptyListNoAdd" size={184} />}
              onAction={noop}
            />
          </div>
        </div>

        <div className={styles.examplesColumn}>
          <div className={styles.sectionTitle}>BannerScreen</div>

          <div className={styles.phoneFrame}>
            <div className={styles.examplesStack}>
              <BannerScreen
                title="Список пуст"
                description="В списке нет значений"
                actionLabel="Создать"
                media={<Illustration illustration="EmptyListNoAdd" size={184} />}
                onAction={noop}
              />

              <div className={styles.selectionFrame}>
                <div className={styles.selectionInner}>
                  <BannerScreen
                    title="Список пуст"
                    description="В списке нет значений"
                    actionLabel="Создать"
                    media={
                      <Illustration illustration="EmptyListNoAdd" size={184} />
                    }
                    onAction={noop}
                  />
                </div>
              </div>

              <BannerScreen
                title="Список пуст"
                description="В списке нет значений"
                media={<Illustration illustration="EmptyListNoAdd" size={184} />}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};
