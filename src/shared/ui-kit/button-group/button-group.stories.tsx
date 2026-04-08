import type { Meta, StoryObj } from "@storybook/nextjs";
import type { ComponentProps, ReactNode } from "react";
import { ButtonGroup } from "./button-group";
import { Button } from "../button/button";
import { ChipButton } from "../chip-button/chip-button";
import { InlineButton } from "../inline-button/inline-button";
import { ResizableIcons } from "../icon";
import styles from "./button-group.stories.module.css";

type ButtonGroupStoryArgs = ComponentProps<typeof ButtonGroup> & {
  contentType: "button" | "chip" | "inline";
};

const meta: Meta<ButtonGroupStoryArgs> = {
  title: "UI Kit/Buttons/ButtonGroup",
  component: ButtonGroup,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    contentType: {
      control: "select",
      options: ["button", "chip", "inline"],
    },
    direction: {
      control: "select",
      options: ["vertical", "horizontal", "horizontalFixed"],
    },
    withSpacing: {
      control: "boolean",
    },
    gap: {
      control: "select",
      options: [0, 12],
    },
    children: { control: false, table: { disable: true } },
    className: { control: false, table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<ButtonGroupStoryArgs>;

const SortIcon = <ResizableIcons.ArrowUpDown width={24} height={24} />;

const CalendarRemoveIcon = (
  <ResizableIcons.CalendarRemove24 width={24} height={24} />
);

const layoutClassNames: Partial<
  Record<NonNullable<ButtonGroupStoryArgs["direction"]>, string>
> = {
  vertical: styles.playgroundGroupVertical,
  horizontal: styles.playgroundGroupHorizontal,
};

const getContentByType = (
  contentType: ButtonGroupStoryArgs["contentType"],
): ReactNode => {
  if (contentType === "chip") {
    return (
      <>
        <ChipButton
          size="m"
          label="Сортировка"
          startIcon={SortIcon}
          endIcon={SortIcon}
        />
        <ChipButton
          size="m"
          label="Сортировка"
          startIcon={SortIcon}
          endIcon={SortIcon}
        />
      </>
    );
  }

  if (contentType === "inline") {
    return (
      <>
        <InlineButton
          variant="surface"
          icon={CalendarRemoveIcon}
          label="Сбросить"
        />
        <InlineButton
          variant="surface"
          icon={CalendarRemoveIcon}
          label="Сбросить"
        />
        <InlineButton
          variant="surface"
          icon={CalendarRemoveIcon}
          label="Сбросить"
        />
      </>
    );
  }

  return (
    <>
      <Button variant="primary" size="m" label="Сохранить" />
      <Button variant="bezeled" size="m" label="Сохранить" />
      <Button variant="bezeled" size="m" label="Сохранить" />
    </>
  );
};

export const Showcase: Story = {
  render: () => (
    <div className={styles.stage}>
      <div className={styles.surface}>
        <ButtonGroup direction="vertical" withSpacing>
          <Button variant="primary" size="m" label="Сохранить" />
        </ButtonGroup>
        <ButtonGroup direction="vertical" withSpacing={false}>
          <Button variant="primary" size="m" label="Сохранить" />
        </ButtonGroup>

        <ButtonGroup direction="vertical" withSpacing>
          <Button variant="primary" size="m" label="Сохранить" />
          <Button variant="bezeled" size="m" label="Сохранить" />
        </ButtonGroup>
        <ButtonGroup direction="vertical" withSpacing={false}>
          <Button variant="primary" size="m" label="Сохранить" />
          <Button variant="bezeled" size="m" label="Сохранить" />
        </ButtonGroup>

        <ButtonGroup direction="vertical" withSpacing>
          <Button variant="primary" size="m" label="Сохранить" />
          <Button variant="bezeled" size="m" label="Сохранить" />
          <Button variant="bezeled" size="m" label="Сохранить" />
        </ButtonGroup>
        <ButtonGroup direction="vertical" withSpacing={false}>
          <Button variant="primary" size="m" label="Сохранить" />
          <Button variant="bezeled" size="m" label="Сохранить" />
          <Button variant="bezeled" size="m" label="Сохранить" />
        </ButtonGroup>

        <ButtonGroup direction="horizontal" withSpacing>
          <Button variant="bezeled" size="m" label="Сохранить" />
          <Button variant="primary" size="m" label="Сохранить" />
        </ButtonGroup>
        <ButtonGroup direction="horizontal" withSpacing={false}>
          <Button variant="bezeled" size="m" label="Сохранить" />
          <Button variant="primary" size="m" label="Сохранить" />
        </ButtonGroup>
      </div>

      <div className={styles.compactSurface}>
        <ButtonGroup direction="horizontalFixed" withSpacing={false}>
          <ChipButton
            size="m"
            label="Сортировка"
            startIcon={SortIcon}
            endIcon={SortIcon}
          />
          <ChipButton
            size="m"
            label="Сортировка"
            startIcon={SortIcon}
            endIcon={SortIcon}
          />
        </ButtonGroup>
      </div>

      <div className={styles.compactSurface}>
        <ButtonGroup direction="horizontalFixed" withSpacing={false}>
          <InlineButton
            variant="surface"
            icon={CalendarRemoveIcon}
            label="Сбросить"
          />
          <InlineButton
            variant="surface"
            icon={CalendarRemoveIcon}
            label="Сбросить"
          />
          <InlineButton
            variant="surface"
            icon={CalendarRemoveIcon}
            label="Сбросить"
          />
        </ButtonGroup>
      </div>
    </div>
  ),
};

export const Playground: Story = {
  args: {
    contentType: "button",
    direction: "vertical",
    withSpacing: false,
    gap: 12,
  },
  render: (args) => {
    const direction = args.direction ?? "vertical";
    const groupClassName = layoutClassNames[direction];
    const content = getContentByType(args.contentType);

    return (
      <div className={styles.stage}>
        <div className={styles.playgroundSurface}>
          <ButtonGroup
            direction={direction}
            withSpacing={args.withSpacing}
            gap={args.gap}
            className={groupClassName}
          >
            {content}
          </ButtonGroup>
        </div>
      </div>
    );
  },
};
