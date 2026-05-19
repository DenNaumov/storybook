import type { ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs";
import {
  illustrationSrcMap,
  type IllustrationName,
} from "../illustration/illustration.constants";
import { StoryPreviewFrame } from "../story-preview/story-preview-frame";
import { BannerScreen } from "./banner-screen";
import styles from "./banner-screen.stories.module.css";

type BannerScreenStoryArgs = ComponentProps<typeof BannerScreen>;

const noop = () => undefined;

const meta: Meta<BannerScreenStoryArgs> = {
  title: "UI Kit/BannerScreen",
  component: BannerScreen,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    actionLabel: { control: "text" },
    illustration: {
      control: "select",
      options: [
        undefined,
        ...(Object.keys(illustrationSrcMap) as IllustrationName[]),
      ],
    },
    actionVariant: {
      control: "select",
      options: ["primary", "bezeled", "outlined", "text"],
    },
    onAction: {
      table: { disable: true },
    },
    className: {
      table: { disable: true },
    },
  },
};

export default meta;
type Story = StoryObj<BannerScreenStoryArgs>;

export const Playground: Story = {
  args: {
    title: "Список пуст",
    description: "В списке нет значений",
    illustration: "EmptyListNoAdd",
    actionLabel: "Создать",
    actionVariant: "primary",
  },
  render: (args) => (
    <div className={styles.stage}>
      <div className={styles.componentFrame}>
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
          <div className={styles.canvasTitle}>BannerScreen</div>
          <StoryPreviewFrame
            className={styles.previewFrame}
            title="BannerScreen"
            description="Баннер-заглушка на экран"
          >
            <BannerScreen
              title="Список пуст"
              description="В списке нет значений"
              actionLabel="Создать"
              illustration="EmptyListNoAdd"
              onAction={noop}
            />
          </StoryPreviewFrame>
        </div>

        <div className={styles.examplesColumn}>
          <div className={styles.canvasTitle}>BannerScreen</div>

          <StoryPreviewFrame
            className={styles.previewFrame}
            title="BannerScreen"
            description="Баннер-заглушка на экран"
          >
            <div className={styles.examplesStack}>
              <BannerScreen
                title="Список пуст"
                description="В списке нет значений"
                actionLabel="Создать"
                illustration="EmptyListNoAdd"
                onAction={noop}
              />

              <div className={styles.selectionFrame}>
                <div className={styles.selectionInner}>
                  <BannerScreen
                    title="Список пуст"
                    description="В списке нет значений"
                    actionLabel="Создать"
                    illustration="EmptyListNoAdd"
                    onAction={noop}
                  />
                </div>
              </div>

              <BannerScreen
                title="Список пуст"
                description="В списке нет значений"
                illustration="EmptyListNoAdd"
              />
            </div>
          </StoryPreviewFrame>
        </div>
      </div>
    </div>
  ),
};
