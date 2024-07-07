import { render, screen } from "@testing-library/react";
import { ImageProps } from "@/types";
import { SquareThumbnail } from "./SquareThumbnail";

// Mock data
const imageProps: ImageProps = {
  src: "https://via.placeholder.com/150",
  alt: "Sample Image",
};

// Test for rendering the component
test("renders SquareThumbnail with image", () => {
  render(<SquareThumbnail image={imageProps} />);
  const imgElement = screen.getByAltText("Sample Image");
  expect(imgElement).toBeInTheDocument();
});

// Test for rendering the page count badge
test("renders PageCountBadge when pageCount is greater than 0", () => {
  render(<SquareThumbnail image={imageProps} pageCount={5} />);
  const badgeElement = screen.getByText("5");
  expect(badgeElement).toBeInTheDocument();
});

// Test for rendering the like button
test("renders HeartButton when showLikeButton is true", () => {
  render(<SquareThumbnail image={imageProps} showLikeButton={true} />);
  const likeButton = screen.getByRole("button");
  expect(likeButton).toBeInTheDocument();
});

// Test for not rendering the page count badge when pageCount is 0
test("does not render PageCountBadge when pageCount is 0", () => {
  render(<SquareThumbnail image={imageProps} pageCount={0} />);
  const badgeElement = screen.queryByText("0");
  expect(badgeElement).not.toBeInTheDocument();
});

// Test for not rendering the like button when showLikeButton is false
test("does not render HeartButton when showLikeButton is false", () => {
  render(<SquareThumbnail image={imageProps} showLikeButton={false} />);
  const likeButton = screen.queryByRole("button");
  expect(likeButton).not.toBeInTheDocument();
});
