import { render, screen, waitFor } from "@testing-library/react";
import { FigureCellAuthor } from ".";

const mockedAuthor = {
  id: "1",
  name: "Author Name",
  avatarURL: "/sample.jpg",
  link: { href: "/author" },
};

describe("FigureCellAuthor", () => {
  test("renders correctly with all props", () => {
    render(<FigureCellAuthor author={mockedAuthor} />);

    waitFor(() => {
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
    render(<FigureCellAuthor author={mockedAuthor} />);

    waitFor(() => {
      // Check if the author name is rendered correctly
      expect(screen.getByText("Author Name")).toBeInTheDocument();
      // Check if the author link is not rendered
      expect(screen.queryByText("View Author")).not.toBeInTheDocument();
    });
  });
});
