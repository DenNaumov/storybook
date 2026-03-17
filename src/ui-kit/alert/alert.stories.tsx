import type { ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs";
import { Icon28 } from "../icon/icon-wrappers";
import { Alert } from "./alert";
import styles from "./alert.stories.module.css";

type AlertStoryArgs = ComponentProps<typeof Alert>;

const noop = () => undefined;

const defaultTitle = "Превышено количество пользователей для вашего тарифа";
const defaultDescription =
  "Измените тариф в SberCRM, чтобы добавить пользователей, или напишите в поддержку";

const meta: Meta<AlertStoryArgs> = {
  title: "UI Kit/Feedback/Alert",
  component: Alert,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
    },
    description: {
      control: "text",
    },
    primaryActionLabel: {
      control: "text",
    },
    secondaryActionLabel: {
      control: "text",
    },
    primaryActionVariant: {
      control: "select",
      options: ["primary", "bezeled", "outlined", "text"],
    },
    secondaryActionVariant: {
      control: "select",
      options: ["primary", "bezeled", "outlined", "text"],
    },
    actionsLayout: {
      control: "select",
      options: ["stack", "inline"],
    },
    media: {
      control: false,
    },
    onPrimaryAction: {
      control: false,
    },
    onSecondaryAction: {
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<AlertStoryArgs>;

export const Playground: Story = {
  args: {
    title: defaultTitle,
    description: defaultDescription,
    primaryActionLabel: "Сохранить",
    primaryActionVariant: "primary",
    actionsLayout: "stack",
  },
  render: (args) => (
    <div className={styles.stage}>
      <Alert {...args} />
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
            <span>Alert</span>
          </div>

          <Alert
            title={defaultTitle}
            description={defaultDescription}
            primaryActionLabel="Сохранить"
            onPrimaryAction={noop}
          />
        </div>

        <div className={styles.examplesPanel}>
          <div className={styles.examplesBadge}>Examples</div>

          <div className={styles.examplesSurface}>
            <div className={styles.examplesStack}>
              <div
                className={[styles.exampleCard, styles.selectionFrame].join(
                  " ",
                )}
              >
                <div className={styles.selectionInner}>
                  <Alert
                    title={defaultTitle}
                    primaryActionLabel="Сохранить"
                    onPrimaryAction={noop}
                  />
                </div>
              </div>

              <div className={styles.exampleCard}>
                <Alert
                  title={defaultTitle}
                  description={defaultDescription}
                  primaryActionLabel="Сохранить"
                  onPrimaryAction={noop}
                />
              </div>

              <div className={styles.exampleCard}>
                <Alert
                  title={defaultTitle}
                  description={defaultDescription}
                  primaryActionLabel="Сохранить"
                  secondaryActionLabel="Сохранить"
                  secondaryActionVariant="outlined"
                  actionsLayout="inline"
                  onPrimaryAction={noop}
                  onSecondaryAction={noop}
                />
              </div>

              <div className={styles.exampleCard}>
                <Alert
                  title={defaultTitle}
                  description={defaultDescription}
                  primaryActionLabel="Сохранить"
                  secondaryActionLabel="Сохранить"
                  secondaryActionVariant="bezeled"
                  actionsLayout="stack"
                  onPrimaryAction={noop}
                  onSecondaryAction={noop}
                />
              </div>

              {/* TODO: replace `media` with <Illustration ... /> when the component is ready. */}
              <div className={styles.exampleCard}>
                <Alert
                  title={defaultTitle}
                  description={defaultDescription}
                  primaryActionLabel="Сохранить"
                  secondaryActionLabel="Сохранить"
                  secondaryActionVariant="bezeled"
                  actionsLayout="stack"
                  media={
                    <div className={styles.illustrationPlaceholder}>
                      Illustration
                    </div>
                  }
                  onPrimaryAction={noop}
                  onSecondaryAction={noop}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};
