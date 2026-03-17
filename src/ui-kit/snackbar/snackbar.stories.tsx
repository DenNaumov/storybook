import type { ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs";
import { Icon28 } from "../icon/icon-wrappers";
import { Snackbar } from "./snackbar";
import styles from "./snackbar.stories.module.css";

type SnackbarStoryArgs = ComponentProps<typeof Snackbar>;

const noop = () => undefined;

const meta: Meta<SnackbarStoryArgs> = {
  title: "UI Kit/Feedback/Snackbar",
  component: Snackbar,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["neutral", "success", "error"],
    },
    hideIcon: {
      control: "boolean",
    },
    actionLabel: {
      control: "text",
    },
    onAction: {
      control: false,
    },
    onDismiss: {
      control: false,
    },
    message: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<SnackbarStoryArgs>;

export const Playground: Story = {
  args: {
    variant: "error",
    message: "Body",
    actionLabel: "Отменить",
    onAction: noop,
    onDismiss: noop,
    hideIcon: false,
  },
  render: (args) => (
    <div className={styles.stage}>
      <div style={{ maxWidth: 690 }}>
        <Snackbar {...args} />
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
            <span>Snackbar</span>
          </div>

          <Snackbar
            variant="error"
            message="Body"
            actionLabel="Отменить"
            onAction={noop}
            onDismiss={noop}
          />
        </div>

        <div className={styles.examplesPanel}>
          <div className={styles.examplesBadge}>Examples</div>

          <div className={styles.examplesSurface}>
            <div className={styles.examplesStack}>
              <div className={styles.exampleWide}>
                <Snackbar variant="neutral" message="Body" />
              </div>

              <div className={styles.exampleWide}>
                <Snackbar
                  variant="success"
                  message="Пользователь добавлен. Приглашение отправлено на почту"
                />
              </div>

              <div className={styles.exampleCompact}>
                <Snackbar
                  variant="error"
                  message="Body"
                  actionLabel="Отменить"
                  onAction={noop}
                />
              </div>

              <div className={styles.exampleCompact}>
                <Snackbar variant="error" message="Body" onDismiss={noop} />
              </div>

              <div className={styles.exampleWide}>
                <Snackbar
                  variant="error"
                  message="Произошла ошибка. Отправьте данные в поддержку для решения проблемы"
                  actionLabel="Отменить"
                  onAction={noop}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};
