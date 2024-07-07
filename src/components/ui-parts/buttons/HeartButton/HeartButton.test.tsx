import { fireEvent, render, screen } from "@testing-library/react";
import { HeartButton } from "./HeartButton";

describe("HeartButton", () => {
  test("renders correctly", () => {
    render(<HeartButton />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });

  test("renders with the correct initial class", () => {
    render(<HeartButton />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveClass("text-gray-400");
  });

  test("toggles active state on click", () => {
    render(<HeartButton />);
    const buttonElement = screen.getByRole("button");
    const iconElement = screen.getByTestId("heart-icon");

    // Initial state
    expect(buttonElement).toHaveClass("text-gray-400");
    expect(iconElement).toHaveClass("text-white");

    // Click to activate
    fireEvent.click(buttonElement);
    expect(buttonElement).toHaveClass("text-rose-500");
    expect(iconElement).toHaveClass("text-pink-500");

    // Click to deactivate
    fireEvent.click(buttonElement);
    expect(buttonElement).toHaveClass("text-gray-400");
    expect(iconElement).toHaveClass("text-white");
  });

  test("calls onClick callback with correct argument", () => {
    const handleClick = vi.fn();
    render(<HeartButton onClick={handleClick} />);
    const buttonElement = screen.getByRole("button");

    // Click to activate
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledWith(true);

    // Click to deactivate
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledWith(false);
  });

  test("applies additional className", () => {
    render(<HeartButton className="custom-class" />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveClass("custom-class");
  });
});
