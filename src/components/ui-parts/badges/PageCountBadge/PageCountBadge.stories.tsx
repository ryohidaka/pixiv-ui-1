import type { Meta, StoryFn } from "@storybook/react";
import { PageCountBadge, PageCountBadgeProps } from "./PageCountBadge";

const meta: Meta<PageCountBadgeProps> = {
  title: "UI Parts/badges/PageCountBadge",
  component: PageCountBadge,
  parameters: {
    layout: "centered",
  },
};

export default meta;

const Template: StoryFn<PageCountBadgeProps> = (args: PageCountBadgeProps) => (
  <PageCountBadge {...args} />
);

export const Default = Template.bind({});
Default.args = {
  pageCount: 10,
};
