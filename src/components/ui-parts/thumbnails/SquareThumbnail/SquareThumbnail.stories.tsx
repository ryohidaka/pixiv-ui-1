import type { Meta, StoryFn } from "@storybook/react";
import { SquareThumbnail, SquareThumbnailProps } from "./SquareThumbnail";

const meta: Meta<SquareThumbnailProps> = {
  title: "UI Parts/thumbnails/SquareThumbnail",
  component: SquareThumbnail,
  parameters: {
    layout: "centered",
  },
};

export default meta;

const Template: StoryFn<SquareThumbnailProps> = (
  args: SquareThumbnailProps,
) => <SquareThumbnail {...args} />;

export const Default = Template.bind({});
Default.args = {
  image: { src: "https://via.placeholder.com/300" },
  pageCount: 999,
  showLikeButton: true,
  link: {
    href: "https://example.com",
  },
};
