import type { Meta, StoryObj } from '@storybook/react';
import { ChipButton } from './ChipButton';
import { ResizableIcon } from '../Icon/IconWrappers';
import { ResizableIcons, type ResizableIconKeys } from '../Icon/packs/resizable';

const resizableIconNames = Object.keys(ResizableIcons) as ResizableIconKeys[];
const resizableIconMapping = resizableIconNames.reduce<Record<ResizableIconKeys, JSX.Element>>(
  (acc, name) => {
    acc[name] = <ResizableIcon icon={name} size={24} />;
    return acc;
  },
  {} as Record<ResizableIconKeys, JSX.Element>
);

const meta: Meta<typeof ChipButton> = {
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
      mapping: { 'Нет': undefined, ...resizableIconMapping },
    },
    endIcon: {
      control: 'select',
      options: ['Нет', ...resizableIconNames],
      mapping: { 'Нет': undefined, ...resizableIconMapping },
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
type Story = StoryObj<typeof ChipButton>;

const SortIcon = resizableIconMapping.ArrowUpDown;

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
      <ChipButton size="s" startIcon={SortIcon} endIcon={SortIcon} label="Сортировка" />
      <ChipButton size="m" startIcon={SortIcon} endIcon={SortIcon} label="Сортировка" />
      <ChipButton size="l" startIcon={SortIcon} endIcon={SortIcon} label="Сортировка" />

      {/* Row: Icons Left+Right Active */}
      <ChipButton size="s" startIcon={SortIcon} endIcon={SortIcon} label="Сортировка" active />
      <ChipButton size="m" startIcon={SortIcon} endIcon={SortIcon} label="Сортировка" active />
      <ChipButton size="l" startIcon={SortIcon} endIcon={SortIcon} label="Сортировка" active />

      {/* Row: Icon Left Default */}
      <ChipButton size="s" startIcon={SortIcon} label="Сортировка" />
      <ChipButton size="m" startIcon={SortIcon} label="Сортировка" />
      <ChipButton size="l" startIcon={SortIcon} label="Сортировка" />

      {/* Row: Icon Left Active */}
      <ChipButton size="s" startIcon={SortIcon} label="Сортировка" active />
      <ChipButton size="m" startIcon={SortIcon} label="Сортировка" active />
      <ChipButton size="l" startIcon={SortIcon} label="Сортировка" active />

      {/* Row: Icon Right Default */}
      <ChipButton size="s" endIcon={SortIcon} label="Сортировка" />
      <ChipButton size="m" endIcon={SortIcon} label="Сортировка" />
      <ChipButton size="l" endIcon={SortIcon} label="Сортировка" />

      {/* Row: Icon Right Active */}
      <ChipButton size="s" endIcon={SortIcon} label="Сортировка" active />
      <ChipButton size="m" endIcon={SortIcon} label="Сортировка" active />
      <ChipButton size="l" endIcon={SortIcon} label="Сортировка" active />

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
      <div style={{ justifySelf: 'center' }}><ChipButton size="s" startIcon={SortIcon} /></div>
      <div style={{ justifySelf: 'center' }}><ChipButton size="m" startIcon={SortIcon} /></div>
      <div style={{ justifySelf: 'center' }}><ChipButton size="l" startIcon={SortIcon} /></div>
    </div>
  ),
};

export const Playground: Story = {
  args: {
    label: 'Сортировка',
    size: 'm',
    startIcon: SortIcon,
    endIcon: undefined,
    active: false,
    disabled: false,
  },
};
