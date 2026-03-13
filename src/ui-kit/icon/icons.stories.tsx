import type { Meta, StoryObj } from '@storybook/nextjs';
import { Icon16, Icon20, Icon24, Icon28, ResizableIcon } from './icon-wrappers';
import { Icon16Icons, type Icon16IconKeys } from './packs/16';
import { Icon20Icons, type Icon20IconKeys } from './packs/20';
import { Icon24Icons, type Icon24IconKeys } from './packs/24';
import { Icon28Icons, type Icon28IconKeys } from './packs/28';
import { ResizableIcons, type ResizableIconKeys } from './packs/resizable';

const meta: Meta = {
  title: 'UI Kit/Icons',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

const icons16 = Object.keys(Icon16Icons) as Icon16IconKeys[];
const icons20 = Object.keys(Icon20Icons) as Icon20IconKeys[];
const icons24 = Object.keys(Icon24Icons) as Icon24IconKeys[];
const icons28 = Object.keys(Icon28Icons) as Icon28IconKeys[];
const iconsResizable = Object.keys(ResizableIcons) as ResizableIconKeys[];

const listStyles = {
  page: {
    minHeight: '100vh',
    backgroundColor: 'var(--theme-bg-brand-light)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '24px',
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: '8px',
    padding: 0,
    color: 'var(--theme-icon-default)',
    fontFamily: 'sans-serif',
    backgroundColor: 'transparent',
    width: 'fit-content',
    minHeight: 'auto',
    margin: '0 auto',
    borderRadius: 0,
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '6px 10px',
    borderRadius: '6px',
    backgroundColor: 'var(--theme-bg-surface-primary)',
    border: '1px solid var(--theme-border-default)',
    minWidth: '200px',
    flex: '0 0 200px',
  },
  name: {
    fontSize: '12px',
    opacity: 0.7,
    flex: 1,
    textAlign: 'left' as const,
    whiteSpace: 'nowrap' as const,
    overflow: 'hidden' as const,
    textOverflow: 'ellipsis' as const,
  },
  icon: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '32px',
    lineHeight: 0,
    fontSize: 0,
  },
};

export const Pack16_List: StoryObj = {
  render: () => (
    <div style={listStyles.page}>
      <div style={listStyles.wrapper}>
        {icons16.map((name) => (
          <div key={name} style={listStyles.row}>
            <span style={listStyles.icon}><Icon16 icon={name} /></span>
            <span style={listStyles.name}>{name}</span>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const Pack16_Playground: StoryObj = {
  args: {
    icon: icons16[0],
    color: 'var(--theme-icon-brand-main)',
  },
  argTypes: {
    icon: { control: 'select', options: icons16 },
    color: { control: 'color' },
  },
  render: (args: any) => (
    <div style={listStyles.page}>
      <div style={listStyles.wrapper}>
        <div style={listStyles.row}>
          <span style={listStyles.icon}><Icon16 icon={args.icon} color={args.color} /></span>
          <span style={listStyles.name}>{args.icon}</span>
        </div>
      </div>
    </div>
  ),
};

export const Pack20_List: StoryObj = {
  render: () => (
    <div style={listStyles.page}>
      <div style={listStyles.wrapper}>
        {icons20.map((name) => (
          <div key={name} style={listStyles.row}>
            <span style={listStyles.icon}><Icon20 icon={name} /></span>
            <span style={listStyles.name}>{name}</span>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const Pack20_Playground: StoryObj = {
  args: {
    icon: icons20[0],
    color: 'var(--theme-icon-brand-main)',
  },
  argTypes: {
    icon: { control: 'select', options: icons20 },
    color: { control: 'color' },
  },
  render: (args: any) => (
    <div style={listStyles.page}>
      <div style={listStyles.wrapper}>
        <div style={listStyles.row}>
          <span style={listStyles.icon}><Icon20 icon={args.icon} color={args.color} /></span>
          <span style={listStyles.name}>{args.icon}</span>
        </div>
      </div>
    </div>
  ),
};

export const Pack24_List: StoryObj = {
  render: () => (
    <div style={listStyles.page}>
      <div style={listStyles.wrapper}>
        {icons24.map((name) => (
          <div key={name} style={listStyles.row}>
            <span style={listStyles.icon}><Icon24 icon={name} /></span>
            <span style={listStyles.name}>{name}</span>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const Pack24_Playground: StoryObj = {
  args: {
    icon: icons24[0],
    color: 'var(--theme-icon-brand-main)',
  },
  argTypes: {
    icon: { control: 'select', options: icons24 },
    color: { control: 'color' },
  },
  render: (args: any) => (
    <div style={listStyles.page}>
      <div style={listStyles.wrapper}>
        <div style={listStyles.row}>
          <span style={listStyles.icon}><Icon24 icon={args.icon} color={args.color} /></span>
          <span style={listStyles.name}>{args.icon}</span>
        </div>
      </div>
    </div>
  ),
};

export const Pack28_List: StoryObj = {
  render: () => (
    <div style={listStyles.page}>
      <div style={listStyles.wrapper}>
        {icons28.map((name) => (
          <div key={name} style={listStyles.row}>
            <span style={listStyles.icon}><Icon28 icon={name} /></span>
            <span style={listStyles.name}>{name}</span>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const Pack28_Playground: StoryObj = {
  args: {
    icon: icons28[0],
    color: 'var(--theme-icon-brand-main)',
  },
  argTypes: {
    icon: { control: 'select', options: icons28 },
    color: { control: 'color' },
  },
  render: (args: any) => (
    <div style={listStyles.page}>
      <div style={listStyles.wrapper}>
        <div style={listStyles.row}>
          <span style={listStyles.icon}><Icon28 icon={args.icon} color={args.color} /></span>
          <span style={listStyles.name}>{args.icon}</span>
        </div>
      </div>
    </div>
  ),
};

export const Resizable_List: StoryObj = {
  render: () => (
    <div style={listStyles.page}>
      <div style={listStyles.wrapper}>
        {iconsResizable.map((name) => (
          <div key={name} style={listStyles.row}>
            <span style={listStyles.icon}><ResizableIcon icon={name} size={24} style={{ display: 'block' }} /></span>
            <span style={listStyles.name}>{name}</span>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const Resizable_Playground: StoryObj = {
  args: {
    icon: 'AddCircle28',
    size: 40,
    color: 'var(--theme-icon-brand-main)',
  },
  argTypes: {
    icon: {
      control: 'select',
      options: iconsResizable,
    },
    size: {
      control: { type: 'number', min: 12, max: 96, step: 2 },
    },
    color: { control: 'color' },
  },
  render: (args: any) => (
    <div style={listStyles.page}>
      <div style={listStyles.wrapper}>
        <div style={listStyles.row}>
          <span style={listStyles.icon}>
            <ResizableIcon icon={args.icon} size={args.size} color={args.color} style={{ display: 'block' }} />
          </span>
          <span style={listStyles.name}>{args.icon}</span>
        </div>
      </div>
    </div>
  ),
};
