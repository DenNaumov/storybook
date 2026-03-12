import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { TextLine } from './TextLine';
import styles from './TextLine.stories.module.css';

const meta = {
  title: 'UI Kit/TextLine',
  component: TextLine,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
} satisfies Meta<typeof TextLine>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Showcase: Story = {
  render: () => (
    <div className={styles.stage}>
      <div className={styles.card}>
        <div className={styles.title}>TextLine</div>
        <div className={styles.subtitle}>
          Текстовое поле, которое не TextArea, но всё равно многострочный)))
        </div>
        <div className={styles.divider} />
        <div className={styles.stack}>
          <TextLine placeholder="Label_placeholder" />
          <TextLine label="Label" />
          <TextLine label="Label" defaultValue="Value" clearable />
          <TextLine
            label="Label"
            defaultValue="Value Value Value Value Value Value Value Value Value Value Value Value Value Value Value Value Valu"
            clearable
          />
          <TextLine label="Label" defaultValue="Value" readOnly />
          <TextLine
            label="Label"
            defaultValue="Value Value Value Value Value Value Value Value Value Value Value Value Value Value Value"
            readOnly
          />
          <TextLine placeholder="Label_placeholder" disabled />
          <TextLine label="Label" defaultValue="Value" disabled />
          <TextLine placeholder="Label_placeholder" error helperText="Error_text" />
          <TextLine label="Label" defaultValue="Value" error helperText="Error_text" />
        </div>
      </div>
    </div>
  ),
};
