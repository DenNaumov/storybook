import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ChipButton } from './ChipButton';
import { ResizableIcon } from '../Icon/IconWrappers';
import { ResizableIcons, type ResizableIconKeys } from '../Icon/packs/resizable';

const resizableIconNames = Object.keys(ResizableIcons) as ResizableIconKeys[];

type ChipButtonStoryArgs = Omit<ComponentProps<typeof ChipButton>, 'startIcon' | 'endIcon'> & {
  startIcon?: ResizableIconKeys | 'Нет';
  endIcon?: ResizableIconKeys | 'Нет';
};

const meta: Meta<ChipButtonStoryArgs> = {
  title: 'UI Kit/ChipButton',
  component: ChipButton,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#121212' }],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['s', 'm', 'l'],
    },
    startIcon: {
      control: 'select',
      options: ['Нет', ...resizableIconNames],
    },
    endIcon: {
      control: 'select',
      options: ['Нет', ...resizableIconNames],
    },
    className: {
      table: { disable: true },
    },
    active: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<ChipButtonStoryArgs>;

const renderIcon = (icon?: ResizableIconKeys | 'Нет') => (
  icon && icon !== 'Нет' ? <ResizableIcon icon={icon} size={24} /> : undefined
);

export const Showcase: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'min-content min-content min-content',
      gap: '24px 88px',
      alignItems: 'center',
      padding: '40px',
      backgroundColor: '#121212',
      borderRadius: '24px',
      color: '#FFFFFF',
      fontFamily: 'sans-serif'
    }}>
      {/* Column Headers */}
      <div style={{ textAlign: 'center', opacity: 0.6, fontSize: '12px' }}>ButtonSize=S</div>
      <div style={{ textAlign: 'center', opacity: 0.6, fontSize: '12px' }}>ButtonSize=M</div>
      <div style={{ textAlign: 'center', opacity: 0.6, fontSize: '12px' }}>ButtonSize=L</div>

      {/* Row: Icons Left+Right Default */}
      <ChipButton size="s" startIcon={renderIcon('ArrowUpDown')} endIcon={renderIcon('ArrowUpDown')} label="Сортировка" />
      <ChipButton size="m" startIcon={renderIcon('ArrowUpDown')} endIcon={renderIcon('ArrowUpDown')} label="Сортировка" />
      <ChipButton size="l" startIcon={renderIcon('ArrowUpDown')} endIcon={renderIcon('ArrowUpDown')} label="Сортировка" />

      {/* Row: Icons Left+Right Active */}
      <ChipButton size="s" startIcon={renderIcon('ArrowUpDown')} endIcon={renderIcon('ArrowUpDown')} label="Сортировка" active />
      <ChipButton size="m" startIcon={renderIcon('ArrowUpDown')} endIcon={renderIcon('ArrowUpDown')} label="Сортировка" active />
      <ChipButton size="l" startIcon={renderIcon('ArrowUpDown')} endIcon={renderIcon('ArrowUpDown')} label="Сортировка" active />

      {/* Row: Icon Left Default */}
      <ChipButton size="s" startIcon={renderIcon('ArrowUpDown')} label="Сортировка" />
      <ChipButton size="m" startIcon={renderIcon('ArrowUpDown')} label="Сортировка" />
      <ChipButton size="l" startIcon={renderIcon('ArrowUpDown')} label="Сортировка" />

      {/* Row: Icon Left Active */}
      <ChipButton size="s" startIcon={renderIcon('ArrowUpDown')} label="Сортировка" active />
      <ChipButton size="m" startIcon={renderIcon('ArrowUpDown')} label="Сортировка" active />
      <ChipButton size="l" startIcon={renderIcon('ArrowUpDown')} label="Сортировка" active />

      {/* Row: Icon Right Default */}
      <ChipButton size="s" endIcon={renderIcon('ArrowUpDown')} label="Сортировка" />
      <ChipButton size="m" endIcon={renderIcon('ArrowUpDown')} label="Сортировка" />
      <ChipButton size="l" endIcon={renderIcon('ArrowUpDown')} label="Сортировка" />

      {/* Row: Icon Right Active */}
      <ChipButton size="s" endIcon={renderIcon('ArrowUpDown')} label="Сортировка" active />
      <ChipButton size="m" endIcon={renderIcon('ArrowUpDown')} label="Сортировка" active />
      <ChipButton size="l" endIcon={renderIcon('ArrowUpDown')} label="Сортировка" active />

      {/* Row: No Icons Default */}
      <ChipButton size="s" label="Сортировка" />
      <ChipButton size="m" label="Сортировка" />
      <ChipButton size="l" label="Сортировка" />

      {/* Row: No Icons Disabled */}
      <ChipButton size="s" label="Сортировка" disabled />
      <ChipButton size="m" label="Сортировка" disabled />
      <ChipButton size="l" label="Сортировка" disabled />

      {/* Row: No Icons Active */}
      <ChipButton size="s" label="Сортировка" active />
      <ChipButton size="m" label="Сортировка" active />
      <ChipButton size="l" label="Сортировка" active />

      {/* Row: No Icons Disabled Active */}
      <ChipButton size="s" label="Сортировка" active disabled />
      <ChipButton size="m" label="Сортировка" active disabled />
      <ChipButton size="l" label="Сортировка" active disabled />

      {/* Row: Icon Only */}
      <div style={{ justifySelf: 'center' }}><ChipButton size="s" startIcon={renderIcon('ArrowUpDown')} /></div>
      <div style={{ justifySelf: 'center' }}><ChipButton size="m" startIcon={renderIcon('ArrowUpDown')} /></div>
      <div style={{ justifySelf: 'center' }}><ChipButton size="l" startIcon={renderIcon('ArrowUpDown')} /></div>
    </div>
  ),
};

export const Playground: Story = {
  args: {
    label: 'Сортировка',
    size: 'm',
    startIcon: 'ArrowUpDown',
    endIcon: 'Нет',
    active: false,
    disabled: false,
  },
  render: (args: ChipButtonStoryArgs) => {
    const { startIcon, endIcon, ...chipButtonArgs } = args;
    return (
      <ChipButton
        {...chipButtonArgs}
        startIcon={renderIcon(startIcon)}
        endIcon={renderIcon(endIcon)}
      />
    );
  },
};
