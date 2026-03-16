import type { Meta, StoryObj } from "@storybook/nextjs";
import { ButtonGroup } from "./button-group";
import { Button } from "../button/button";
import { ChipButton } from "../chip-button/chip-button";
import { InlineButton } from "../inline-button/inline-button";
import { ResizableIcon } from "../icon/icon-wrappers";
import styles from "./button-group.stories.module.css";

const meta: Meta<typeof ButtonGroup> = {
  title: "UI Kit/ButtonGroup",
  component: ButtonGroup,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

const SortIcon = <ResizableIcon icon="ArrowUpDown" size={24} />;

const CalendarRemoveIcon = <ResizableIcon icon="CalendarRemove24" size={24} />;

export const Showcase: Story = {
  render: () => (
    <div className={styles.stage}>
      <div className={styles.surface}>
        <ButtonGroup direction="vertical" withSpacing>
          <Button variant="primary" label="Сохранить" />
        </ButtonGroup>
        <ButtonGroup direction="vertical" withSpacing={false}>
          <Button variant="primary" label="Сохранить" />
        </ButtonGroup>

        <ButtonGroup direction="vertical" withSpacing>
          <Button variant="primary" label="Сохранить" />
          <Button variant="bezeled" label="Сохранить" />
        </ButtonGroup>
        <ButtonGroup direction="vertical" withSpacing={false}>
          <Button variant="primary" label="Сохранить" />
          <Button variant="bezeled" label="Сохранить" />
        </ButtonGroup>

        <ButtonGroup direction="vertical" withSpacing>
          <Button variant="primary" label="Сохранить" />
          <Button variant="bezeled" label="Сохранить" />
          <Button variant="bezeled" label="Сохранить" />
        </ButtonGroup>
        <ButtonGroup direction="vertical" withSpacing={false}>
          <Button variant="primary" label="Сохранить" />
          <Button variant="bezeled" label="Сохранить" />
          <Button variant="bezeled" label="Сохранить" />
        </ButtonGroup>

        <ButtonGroup direction="horizontal" withSpacing>
          <Button variant="bezeled" label="Сохранить" />
          <Button variant="primary" label="Сохранить" />
        </ButtonGroup>
        <ButtonGroup direction="horizontal" withSpacing={false}>
          <Button variant="bezeled" label="Сохранить" />
          <Button variant="primary" label="Сохранить" />
        </ButtonGroup>

        <div />
        <ButtonGroup direction="chips" withSpacing={false}>
          <ChipButton
            label="Сортировка"
            startIcon={SortIcon}
            endIcon={SortIcon}
          />
          <ChipButton
            label="Сортировка"
            startIcon={SortIcon}
            endIcon={SortIcon}
          />
        </ButtonGroup>

        <div />
        <ButtonGroup direction="inline" withSpacing={false}>
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
