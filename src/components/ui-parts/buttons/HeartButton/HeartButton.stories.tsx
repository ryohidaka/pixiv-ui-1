import type { Meta, StoryFn } from "@storybook/react";
import { HeartButton, HeartButtonProps } from "./HeartButton";

const meta: Meta<HeartButtonProps> = {
  title: "UI Parts/buttons/HeartButton",
  component: HeartButton,
  parameters: {
    layout: "centered",
  },
};

export default meta;

const Template: StoryFn<HeartButtonProps> = (args: HeartButtonProps) => (
  <HeartButton {...args} />
);

export const Default = Template.bind({});
