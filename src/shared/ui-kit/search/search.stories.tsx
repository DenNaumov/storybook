import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs";
import { StoryPreviewFrame } from "../story-preview/story-preview-frame";
import { Search } from "./search";
import styles from "./search.stories.module.css";

const meta: Meta<typeof Search> = {
  title: "UI Kit/Inputs/Search",
  component: Search,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    placeholder: "Поиск",
    value: "",
    disabled: false,
    clearable: true,
  },
  argTypes: {
    onChange: { control: false, table: { disable: true } },
    onFocus: { control: false, table: { disable: true } },
    onBlur: { control: false, table: { disable: true } },
    onClear: { control: false, table: { disable: true } },
    className: { control: false, table: { disable: true } },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const SearchExample = ({
  initialValue = "",
  ...props
}: Omit<React.ComponentProps<typeof Search>, "value" | "onChange"> & {
  initialValue?: string;
}) => {
  const [value, setValue] = useState(initialValue);

  return <Search {...props} value={value} onChange={setValue} />;
};

export const Playground: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value);

    return (
      <div className={styles.stage}>
        <div className={styles.stack}>
          <Search {...args} value={value} onChange={setValue} />
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
        title="Search"
        description="Поле поиска с иконкой, фокусом и очисткой значения"
      >
        <div className={styles.selectionFrame}>
          <div className={styles.stack}>
            <SearchExample />
            <SearchExample autoFocus />
            <SearchExample initialValue="Value" autoFocus />
            <SearchExample initialValue="Value Value Value Value Value Value Value" />
            <SearchExample initialValue="Value" disabled />
          </div>
        </div>
      </StoryPreviewFrame>
    </div>
  ),
};
