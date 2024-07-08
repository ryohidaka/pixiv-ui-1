import { render, screen, waitFor } from "@testing-library/react";
import { FigureCellTitle } from ".";

const mockedTitle = "Sample Title";

const mockedIllustLink = { href: "/illust" };

describe("FigureCellAuthor", () => {
  test("renders correctly with all props", () => {
    render(
      <FigureCellTitle title={mockedTitle} illustLink={mockedIllustLink} />,
    );

    waitFor(() => {
      // Check if the title is rendered correctly
      expect(screen.getByText("Sample Title")).toBeInTheDocument();
      expect(screen.getByText("View Illust")).toHaveAttribute(
        "href",
        "/illust",
      );
    });
  });

  test("renders correctly without optional props", () => {
    render(<FigureCellTitle title={mockedTitle} />);

    waitFor(() => {
      // Check if the title is rendered correctly
      expect(screen.getByText("Sample Title")).toBeInTheDocument();
      // Check if the illustration link is not rendered
      expect(screen.queryByText("View Illust")).not.toBeInTheDocument();
    });
  });
});
