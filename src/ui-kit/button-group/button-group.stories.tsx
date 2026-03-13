import type { Meta, StoryObj } from '@storybook/nextjs';
import { ButtonGroup } from './button-group';
import { Button } from '../button/button';
import { ChipButton } from '../chip-button/chip-button';
import { InlineButton } from '../inline-button/inline-button';
import { ResizableIcon } from '../icon/icon-wrappers';

const meta: Meta<typeof ButtonGroup> = {
  title: 'UI Kit/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

const SortIcon = <ResizableIcon icon="ArrowUpDown" size={24} />;

const CalendarRemoveIcon = <ResizableIcon icon="CalendarRemove24" size={24} />;

const stageStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  minHeight: '100vh',
  padding: '48px 56px 80px',
  backgroundColor: 'var(--theme-bg-tabbar)',
} as const;

const surfaceStyle = {
  display: 'grid',
  gridTemplateColumns: '400px 400px',
  gap: '40px',
  padding: '40px',
  backgroundColor: 'var(--theme-bg-brand-light)',
  border: '1px solid var(--theme-border-default)',
  borderRadius: '24px',
} as const;

export const Showcase: Story = {
  render: () => (
    <div style={stageStyle}>
      <div style={surfaceStyle}>
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
          <ChipButton label="Сортировка" startIcon={SortIcon} endIcon={SortIcon} />
          <ChipButton label="Сортировка" startIcon={SortIcon} endIcon={SortIcon} />
        </ButtonGroup>

        <div />
        <ButtonGroup direction="inline" withSpacing={false}>
          <InlineButton variant="surface" icon={CalendarRemoveIcon} label="Сбросить" />
          <InlineButton variant="surface" icon={CalendarRemoveIcon} label="Сбросить" />
          <InlineButton variant="surface" icon={CalendarRemoveIcon} label="Сбросить" />
        </ButtonGroup>
      </div>
    </div>
  ),
};
