import { render, screen } from "@testing-library/react";
import { PageCountBadge } from "./PageCountBadge";

describe("PageCountBadge", () => {
  test("renders correctly", () => {
    render(<PageCountBadge pageCount={99} />);
    const badgeElement = screen.getByText(99);
    expect(badgeElement).toBeInTheDocument();
  });
});
