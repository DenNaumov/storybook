import type { Meta, StoryObj } from '@storybook/react';
import { ButtonGroup } from './ButtonGroup';
import { Button } from '../Button/Button';
import { ChipButton } from '../ChipButton/ChipButton';
import { InlineButton } from '../InlineButton/InlineButton';

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

const CalendarIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 2V5M16 2V5M3 9H21M5 4H19C20.1046 4 21 4.89543 21 6V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V6C3 4.89543 3.89543 4 5 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 14L10 18M10 14L14 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

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
                <InlineButton variant="surface" icon={CalendarIcon} label="Сбросить" />
                <InlineButton variant="surface" icon={CalendarIcon} label="Сбросить" />
                <InlineButton variant="surface" icon={CalendarIcon} label="Сбросить" />
            </ButtonGroup>
        </div>
    ),
};
