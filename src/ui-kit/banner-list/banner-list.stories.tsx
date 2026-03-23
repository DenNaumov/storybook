import { useState } from "react";
import type { ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs";
import { BannerList } from "./banner-list";
import styles from "./banner-list.stories.module.css";

type BannerListStoryArgs = ComponentProps<typeof BannerList>;

const detailsText =
  "Поле «Наименование задачи»:\nПоле является обязательным к заполнению\nПоле «Тип»: Какой-то текст ошибки\nПоле «Тип»: Какой-то текст ошибки\nПоле «Тип»: Какой-то текст ошибки";

const meta: Meta<BannerListStoryArgs> = {
  title: "UI Kit/BannerList",
  component: BannerList,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    details: { control: "text" },
    expanded: { control: "boolean" },
    collapsible: { control: "boolean" },
    icon: { control: false },
    onToggle: { control: false },
  },
};

export default meta;
type Story = StoryObj<BannerListStoryArgs>;

export const Playground: Story = {
  args: {
    title: "Произошла ошибка",
    description: "Некорректно заполнены поля объекта",
    details: detailsText,
    expanded: true,
  },
  render: (args) => {
    const Example = () => {
      const [expanded, setExpanded] = useState(Boolean(args.expanded));

      return (
        <div className={styles.stage}>
          <div className={styles.componentFrame}>
            <BannerList
              {...args}
              expanded={expanded}
              onToggle={() => setExpanded((value) => !value)}
            />
          </div>
        </div>
      );
    };

    return <Example />;
  },
};

export const Showcase: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className={styles.stage}>
      <div className={styles.layout}>
        <div className={styles.previewColumn}>
          <div className={styles.canvasTitle}>BannerScreen</div>
          <div className={styles.phoneFrame}>
            <div className={styles.frameHeader}>
              <div className={styles.frameContent}>
                <h1 className={styles.heading}>BannerList</h1>
                <p className={styles.lead}>Баннер внутри форм и списков</p>
              </div>
              <div className={styles.divider} />
            </div>

            <BannerList
              title="Произошла ошибка"
              description="Некорректно заполнены поля объекта"
              details={detailsText}
              expanded
            />
          </div>
        </div>

        <div className={styles.previewColumn}>
          <div className={styles.canvasTitle}>BannerScreen</div>
          <div className={styles.phoneFrame}>
            <div className={styles.frameHeader}>
              <div className={styles.frameContent}>
                <h1 className={styles.heading}>BannerList</h1>
                <p className={styles.lead}>Баннер внутри форм и списков</p>
              </div>
              <div className={styles.divider} />
            </div>

            <div className={styles.stack}>
              <BannerList
                title="Произошла ошибка"
                description="Некорректно заполнены поля объекта"
                details={detailsText}
                expanded
              />

              <div className={styles.selectionFrame}>
                <div className={styles.selectionInner}>
                  <BannerList
                    title="Произошла ошибка"
                    description="Некорректно заполнены поля объекта"
                    details={detailsText}
                    expanded
                  />
                </div>
              </div>

              <BannerList
                title="Произошла ошибка"
                description="Некорректно заполнены поля объекта"
                expanded={false}
                collapsible
              />

              <BannerList
                title="Произошла ошибка"
                description="Некорректно заполнены поля объекта Поле «Наименование задачи»: Поле является обязательным к заполнению Поле «Тип»: Какой-то текст ошибки Поле «Тип»: Какой-то текст ошибки Поле «Тип»: Какой-то текст ошибки"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};
