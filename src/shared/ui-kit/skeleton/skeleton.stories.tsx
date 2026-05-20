import type { Meta, StoryObj } from "@storybook/nextjs";
import { Skeleton } from "./skeleton";
import { StoryPreviewFrame } from "../story-preview/story-preview-frame";
import styles from "./skeleton.stories.module.css";

const meta: Meta<typeof Skeleton> = {
  title: "UI Kit/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    width: {
      control: "text",
      description:
        "Ширина скелетона (число в px или строка с единицами измерения)",
    },
    height: {
      control: "text",
      description:
        "Высота скелетона (число в px или строка с единицами измерения)",
    },
    borderRadius: {
      control: "number",
      description: "Радиус скругления углов в px",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Playground: Story = {
  args: {
    width: "100%",
    height: 40,
    borderRadius: 8,
  },
  render: (args) => (
    <div className={styles.stage}>
      <div className={styles.playgroundContainer}>
        <Skeleton {...args} />
      </div>
    </div>
  ),
};

export const Showcase: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className={styles.stage}>
      <StoryPreviewFrame
        className={styles.previewFrame}
        title="Skeleton"
        description="Компонент для отображения состояния загрузки контента."
      >
        <div className={styles.showcaseSection}>
          <div className={styles.sectionTitle}>Карточки</div>
          <div className={styles.cardsGrid}>
            {[1, 2, 3].map((key) => (
              <div key={key} className={styles.postCard}>
                <div className={styles.postCardContent}>
                  <Skeleton width="100%" height={14} borderRadius={4} />
                  <Skeleton width="90%" height={14} borderRadius={4} />
                  <Skeleton width="40%" height={14} borderRadius={4} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Загрузка формы */}
        <div className={styles.showcaseSection}>
          <div className={styles.sectionTitle}>Форма ввода</div>
          <div className={styles.formLoader}>
            <div className={styles.formField}>
              <Skeleton width={120} height={14} borderRadius={4} />
              <Skeleton width="100%" height={40} borderRadius={8} />
            </div>

            <div className={styles.formField}>
              <Skeleton width={80} height={14} borderRadius={4} />
              <Skeleton width="100%" height={40} borderRadius={8} />
            </div>
          </div>
        </div>

        {/* Профиль пользователя */}
        <div className={styles.showcaseSection}>
          <div className={styles.sectionTitle}>Профиль пользователя</div>
          <div className={styles.userCard}>
            <Skeleton width={48} height={48} borderRadius={24} />
            <div className={styles.userCardInfo}>
              <Skeleton width="70%" height={16} borderRadius={4} />
              <Skeleton width="40%" height={12} borderRadius={3} />
            </div>
          </div>
        </div>
      </StoryPreviewFrame>
    </div>
  ),
};
