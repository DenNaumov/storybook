import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs";
import { StoryPreviewFrame } from "../story-preview/story-preview-frame";
import { CrmDate } from "./crm-date";
import styles from "./crm-date.stories.module.css";

const meta: Meta<typeof CrmDate> = {
  title: "UI Kit/Inputs/CrmDate",
  component: CrmDate,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    label: "Label",
    placeholder: "Label_placeholder",
    value: "",
    disabled: false,
    error: false,
    showCalendarIcon: true,
    showCalculatorIcon: false,
  },
  argTypes: {
    onValueChange: { control: false, table: { disable: true } },
    onOpen: { control: false, table: { disable: true } },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const CrmDateExample = ({
  initialValue = "",
  ...props
}: Omit<React.ComponentProps<typeof CrmDate>, "value" | "onValueChange"> & {
  initialValue?: string;
}) => {
  const [value, setValue] = useState(initialValue);

  return <CrmDate {...props} value={value} onValueChange={setValue} />;
};

export const Playground: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value);

    return (
      <div className={styles.stage}>
        <div className={styles.componentFrame}>
          <CrmDate {...args} value={value} onValueChange={setValue} />
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
        title="CrmDate"
        description="Поле даты и поле даты и времени"
      >
        <div className={styles.selectionFrame}>
          <div className={styles.stack}>
            <CrmDateExample />
            <CrmDateExample />
            <CrmDateExample initialValue="10.10.20" />
            <CrmDateExample initialValue="09.09.2029 22:22" />
            <CrmDateExample initialValue="09.09.2029 22:22" />
            <CrmDateExample disabled showCalendarIcon={false} />
            <CrmDateExample
              initialValue="09.09.2029 22:22"
              disabled
              showCalendarIcon={false}
            />
            <CrmDateExample error errorText="Error_text" />
            <CrmDateExample
              initialValue="09.09.2029 22:22"
              error
              errorText="Error_text"
            />
            <CrmDateExample
              initialValue="-"
              disabled
              showCalendarIcon={false}
              showCalculatorIcon
            />
            <CrmDateExample
              initialValue="-"
              showCalendarIcon={false}
              showCalculatorIcon
            />
            <CrmDateExample
              initialValue="09.09.2029 22:22"
              disabled
              showCalendarIcon={false}
              showCalculatorIcon
            />
          </div>
        </div>
      </StoryPreviewFrame>
    </div>
  ),
};
