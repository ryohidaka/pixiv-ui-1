import { render, screen, waitFor } from "@testing-library/react";
import { FigureCellTitle } from ".";

const mockedTitle = "Sample Title";

const mockedlink = { href: "/figure" };

describe("FigureCellAuthor", () => {
  test("renders correctly with all props", () => {
    render(<FigureCellTitle title={mockedTitle} link={mockedlink} />);

    waitFor(() => {
      // Check if the title is rendered correctly
      expect(screen.getByText("Sample Title")).toBeInTheDocument();
      expect(screen.getByText("View Figure")).toHaveAttribute(
        "href",
        "/figure",
      );
    });
  });

  test("renders correctly without optional props", () => {
    render(<FigureCellTitle title={mockedTitle} />);

    waitFor(() => {
      // Check if the title is rendered correctly
      expect(screen.getByText("Sample Title")).toBeInTheDocument();
      // Check if the figure link is not rendered
      expect(screen.queryByText("View Figure")).not.toBeInTheDocument();
    });
  });
});
