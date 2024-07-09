import { render, screen, waitFor } from "@testing-library/react";
import { AnchorProps, ImageProps, User } from "@/types";
import { FigureCell, FigureCellProps } from "./FigureCell";

// Mocked components
vi.mock("../../thumbnails", () => ({
  SquareThumbnail: ({
    image,
    pageCount,
    figureLink,
  }: {
    image: ImageProps;
    pageCount: number;
    figureLink?: AnchorProps;
  }) => (
    <div>
      <img src={image.src} alt={image.alt} />
      {pageCount > 0 && <span>{pageCount}</span>}
      {figureLink && <a href={figureLink.href}></a>}
    </div>
  ),
}));

vi.mock("./Author", () => ({
  FigureCellAuthor: ({ author }: { author: User }) => (
    <div>{author.link && <a href={author.link.href}>{author.name}</a>}</div>
  ),
}));

vi.mock("./Title", () => ({
  FigureCellTitle: ({
    title,
    figureLink,
  }: {
    title: string;
    figureLink?: AnchorProps;
  }) => <div>{figureLink && <a href={figureLink.href}>{title}</a>}</div>,
}));

const mockProps: FigureCellProps = {
  title: "Sample Title",
  author: {
    id: "1",
    name: "Author Name",
    avatarURL: "/sample.jpg",
    link: { href: "/author" },
  },
  image: { src: "/sample.jpg", alt: "Sample Image" },
  pageCount: 5,
  figureLink: { href: "/figure" },
};

describe("FigureCell", () => {
  test("renders correctly with all props", () => {
    render(<FigureCell {...mockProps} />);

    waitFor(() => {
      // Check if the image is rendered correctly
      expect(screen.getByAltText("Sample Image")).toBeInTheDocument();
      // Check if the page count is displayed
      expect(screen.getByText("5")).toBeInTheDocument();
      // Check if the figure link is rendered
      expect(screen.getByText("View Figure")).toHaveAttribute(
        "href",
        "/figure",
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
    const { pageCount, figureLink, ...requiredProps } = mockProps;
    render(<FigureCell {...requiredProps} />);

    waitFor(() => {
      // Check if the image is rendered correctly
      expect(screen.getByAltText("Sample Image")).toBeInTheDocument();
      // Check if the page count is not displayed
      expect(screen.queryByText("5")).not.toBeInTheDocument();
      // Check if the figure link is not rendered
      expect(screen.queryByText("View Figure")).not.toBeInTheDocument();
      // Check if the title is rendered correctly
      expect(screen.getByText("Sample Title")).toBeInTheDocument();
      // Check if the author name is rendered correctly
      expect(screen.getByText("Author Name")).toBeInTheDocument();
      // Check if the author link is not rendered
      expect(screen.queryByText("View Author")).not.toBeInTheDocument();
    });
  });
});
