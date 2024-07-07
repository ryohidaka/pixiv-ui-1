import type { Meta, StoryFn } from "@storybook/react";
import { FaHeart } from "react-icons/fa";
import { NumberBadge, NumberBadgeProps } from "./NumberBadge";

const meta: Meta<NumberBadgeProps> = {
  title: "UI Parts/badges/NumberBadge",
  component: NumberBadge,
  parameters: {
    layout: "centered",
  },
};

export default meta;

const Template: StoryFn<NumberBadgeProps> = (args: NumberBadgeProps) => (
  <NumberBadge {...args} />
);

export const Default = Template.bind({});
Default.args = {
  number: 10,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  number: 10,
  icon: <FaHeart className="mr-1" />,
};
