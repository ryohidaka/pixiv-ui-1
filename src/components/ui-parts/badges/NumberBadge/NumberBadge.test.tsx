import { render, screen } from "@testing-library/react";
import { NumberBadge } from "./NumberBadge";

describe("NumberBadge", () => {
  test("renders correctly", () => {
    render(<NumberBadge number={99} />);
    const badgeElement = screen.getByText(99);
    expect(badgeElement).toBeInTheDocument();
  });

  test("renders with icon", () => {
    render(<NumberBadge number={99} icon={<svg>test-icon</svg>} />);
    const badgeElement = screen.getByText(99);
    expect(badgeElement).toBeInTheDocument();

    const iconElement = screen.getByText("test-icon");
    expect(iconElement).toBeInTheDocument();
  });
});
