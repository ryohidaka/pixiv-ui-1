import { render, screen, waitFor } from "@testing-library/react";
import { SectionTitle } from "./SectionTitle";

describe("SectionTitle", () => {
  test("renders correctly with all props", () => {
    render(<SectionTitle title="Sample Title" count={999} showNumberBadge />);

    waitFor(() => {
      // Check if the title is rendered correctly
      expect(screen.getByText("Sample Title")).toBeInTheDocument();
      // Check if the count is displayed
      expect(screen.getByText("999")).toBeInTheDocument();
    });
  });

  test("renders correctly without optional props", () => {
    render(<SectionTitle title="Sample Title" />);

    waitFor(() => {
      // Check if the title is rendered correctly
      expect(screen.getByText("Sample Title")).toBeInTheDocument();
      // Check if the count is not rendered
      expect(screen.getByText("999")).not.toBeInTheDocument();
    });
  });
});
