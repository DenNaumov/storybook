import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs";
import { StoryPreviewFrame } from "../story-preview/story-preview-frame";
import { CrmSelect } from "./crm-select";
import styles from "./crm-select.stories.module.css";

const meta: Meta<typeof CrmSelect> = {
  title: "UI Kit/Inputs/CrmSelect",
  component: CrmSelect,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    label: "Label",
    value: null,
    disabled: false,
    error: false,
    showCalculatorIcon: false,
  },
  argTypes: {
    onValueChange: { control: false, table: { disable: true } },
    onOpen: { control: false, table: { disable: true } },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const CrmSelectExample = ({
  initialValue = null,
  ...props
}: Omit<React.ComponentProps<typeof CrmSelect>, "value" | "onValueChange"> & {
  initialValue?: string | null;
}) => {
  const [value, setValue] = useState<string | null>(initialValue);

  return <CrmSelect {...props} value={value} onValueChange={setValue} />;
};

export const Playground: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | null>(args.value ?? null);

    return (
      <div className={styles.stage}>
        <div className={styles.componentFrame}>
          <CrmSelect {...args} value={value} onValueChange={setValue} />
        </div>
      </div>
    );
  },
};

export const Showcase: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className={styles.stage}>
      <StoryPreviewFrame
        className={styles.previewFrame}
        title="CrmSelect"
        description="Поле выбора для справочников, связей и значений CRM"
      >
        <div className={styles.selectionFrame}>
          <div className={styles.stack}>
            <CrmSelectExample />
            <CrmSelectExample initialValue="Value" />
            <CrmSelectExample disabled />
            <CrmSelectExample initialValue="Value" disabled />
            <CrmSelectExample error errorText="Error_text" />
            <CrmSelectExample
              initialValue="Value"
              error
              errorText="Error_text"
            />
            <CrmSelectExample
              initialValue="Value"
              markerColor="#f30fb4"
              showCalculatorIcon
            />
            <CrmSelectExample initialValue="Value" markerColor="#f30fb4" />
            <CrmSelectExample
              initialValue="Value"
              markerColor="#f30fb4"
              error
              errorText="Error_text"
            />
            <CrmSelectExample
              initialValue="Value"
              markerColor="#a10b67"
              disabled
              showCalculatorIcon
            />
            <CrmSelectExample
              initialValue="Value"
              markerColor="#a10b67"
              disabled
            />
          </div>
        </div>
      </StoryPreviewFrame>
    </div>
  ),
};
