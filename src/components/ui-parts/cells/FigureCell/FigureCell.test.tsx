import { render, screen, waitFor } from "@testing-library/react";
import { AnchorProps, ImageProps, User } from "@/types";
import { FigureCell, FigureCellProps } from "./FigureCell";

// Mocked components
vi.mock("../../thumbnails", () => ({
  SquareThumbnail: ({
    image,
    pageCount,
    illustLink,
  }: {
    image: ImageProps;
    pageCount: number;
    illustLink?: AnchorProps;
  }) => (
    <div>
      <img src={image.src} alt={image.alt} />
      {pageCount > 0 && <span>{pageCount}</span>}
      {illustLink && <a href={illustLink.href}></a>}
    </div>
  ),
}));

vi.mock("./Author", () => ({
  FigureCellAuthor: ({
    author,
    authorLink,
  }: {
    author: User;
    authorLink?: AnchorProps;
  }) => <div>{authorLink && <a href={authorLink.href}>{author.name}</a>}</div>,
}));

vi.mock("./Title", () => ({
  FigureCellTitle: ({
    title,
    illustLink,
  }: {
    title: string;
    illustLink?: AnchorProps;
  }) => <div>{illustLink && <a href={illustLink.href}>{title}</a>}</div>,
}));

const mockProps: FigureCellProps = {
  title: "Sample Title",
  author: {
    id: "1",
    name: "Author Name",
    avatarURL: "/sample.jpg",
  },
  image: { src: "/sample.jpg", alt: "Sample Image" },
  pageCount: 5,
  illustLink: { href: "/illust" },
  authorLink: { href: "/author" },
};

describe("FigureCell", () => {
  test("renders correctly with all props", () => {
    render(<FigureCell {...mockProps} />);

    waitFor(() => {
      // Check if the image is rendered correctly
      expect(screen.getByAltText("Sample Image")).toBeInTheDocument();
      // Check if the page count is displayed
      expect(screen.getByText("5")).toBeInTheDocument();
      // Check if the illustration link is rendered
      expect(screen.getByText("View Illust")).toHaveAttribute(
        "href",
        "/illust",
      );
      // Check if the title is rendered correctly
      expect(screen.getByText("Sample Title")).toBeInTheDocument();
      // Check if the author name is rendered correctly
      expect(screen.getByText("Author Name")).toBeInTheDocument();
      // Check if the author link is rendered
      expect(screen.getByText("View Author")).toHaveAttribute(
        "href",
        "/author",
      );
    });
  });

  test("renders correctly without optional props", () => {
    const { pageCount, illustLink, authorLink, ...requiredProps } = mockProps;
    render(<FigureCell {...requiredProps} />);

    waitFor(() => {
      // Check if the image is rendered correctly
      expect(screen.getByAltText("Sample Image")).toBeInTheDocument();
      // Check if the page count is not displayed
      expect(screen.queryByText("5")).not.toBeInTheDocument();
      // Check if the illustration link is not rendered
      expect(screen.queryByText("View Illust")).not.toBeInTheDocument();
      // Check if the title is rendered correctly
      expect(screen.getByText("Sample Title")).toBeInTheDocument();
      // Check if the author name is rendered correctly
      expect(screen.getByText("Author Name")).toBeInTheDocument();
      // Check if the author link is not rendered
      expect(screen.queryByText("View Author")).not.toBeInTheDocument();
    });
  });
});
