import type { Meta, StoryObj } from '@storybook/react';
import { ButtonGroup } from './ButtonGroup';
import { Button } from '../Button/Button';
import { ChipButton } from '../ChipButton/ChipButton';
import { InlineButton } from '../InlineButton/InlineButton';
import { ResizableIcon } from '../Icon/IconWrappers';

const meta: Meta<typeof ButtonGroup> = {
    title: 'UI Kit/ButtonGroup',
    component: ButtonGroup,
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'dark',
            values: [{ name: 'dark', value: '#0F0F0F' }],
        },
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

const SortIcon = (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 15L12 20L17 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 9L12 4L17 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const CalendarRemoveIcon = <ResizableIcon icon="CalendarRemove24" size={24} />;

export const Showcase: Story = {
    render: () => (
        <div style={{
            display: 'grid',
            gridTemplateColumns: '400px 400px',
            gap: '40px',
            padding: '40px',
            backgroundColor: '#0F0F0F'
        }}>
            {/* Vertical 1 - Spacing=True vs False */}
            <ButtonGroup direction="vertical" withSpacing>
                <Button variant="primary" label="Сохранить" />
            </ButtonGroup>
            <ButtonGroup direction="vertical" withSpacing={false}>
                <Button variant="primary" label="Сохранить" />
            </ButtonGroup>

            {/* Vertical 2 - Spacing=True vs False */}
            <ButtonGroup direction="vertical" withSpacing>
                <Button variant="primary" label="Сохранить" />
                <Button variant="bezeled" label="Сохранить" />
            </ButtonGroup>
            <ButtonGroup direction="vertical" withSpacing={false}>
                <Button variant="primary" label="Сохранить" />
                <Button variant="bezeled" label="Сохранить" />
            </ButtonGroup>

            {/* Vertical 3 - Spacing=True vs False */}
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

            {/* Horizontal 2 - Spacing=True vs False */}
            <ButtonGroup direction="horizontal" withSpacing>
                <Button variant="bezeled" label="Сохранить" />
                <Button variant="primary" label="Сохранить" />
            </ButtonGroup>
            <ButtonGroup direction="horizontal" withSpacing={false}>
                <Button variant="bezeled" label="Сохранить" />
                <Button variant="primary" label="Сохранить" />
            </ButtonGroup>

            {/* Chips Horizontal */}
            <div />
            <ButtonGroup direction="chips" withSpacing={false}>
                <ChipButton label="Сортировка" startIcon={SortIcon} endIcon={SortIcon} />
                <ChipButton label="Сортировка" startIcon={SortIcon} endIcon={SortIcon} />
            </ButtonGroup>

            {/* Inline Horizontal */}
            <div />
            <ButtonGroup direction="inline" withSpacing={false}>
                <InlineButton variant="surface" icon={CalendarRemoveIcon} label="Сбросить" />
                <InlineButton variant="surface" icon={CalendarRemoveIcon} label="Сбросить" />
                <InlineButton variant="surface" icon={CalendarRemoveIcon} label="Сбросить" />
            </ButtonGroup>
        </div>
    ),
};
