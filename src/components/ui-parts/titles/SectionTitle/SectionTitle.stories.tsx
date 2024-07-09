import type { Meta, StoryFn } from "@storybook/react";
import { SectionTitle, SectionTitleProps } from "./SectionTitle";

const meta: Meta<SectionTitleProps> = {
  title: "UI Parts/titles/SectionTitle",
  component: SectionTitle,
  parameters: {
    layout: "centered",
  },
};

export default meta;

const Template: StoryFn<SectionTitleProps> = (args: SectionTitleProps) => (
  <SectionTitle {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "Sample Title",
  count: 999999,
  showNumberBadge: true,
};
