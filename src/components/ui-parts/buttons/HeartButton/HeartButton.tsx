import clsx from "clsx";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";

/**
 * Props for the HeartButton component.
 */
export type HeartButtonProps = {
  /**
   * Additional class names to apply to the button.
   */
  className?: string;

  /**
   * Callback function to be called when the button is clicked.
   * @param isActive - The new active state of the button.
   */
  onClick?: (isActive: boolean) => void;
};

/**
 * A button component that toggles a heart icon between active and inactive states.
 *
 * @param {HeartButtonProps} props - Props for the component.
 * @returns {JSX.Element} The rendered button component.
 */
export function HeartButton({
  className,
  onClick,
}: HeartButtonProps): JSX.Element {
  const [isActive, setActive] = useState(false);

  /**
   * Toggles the active state of the button and calls the onClick callback.
   */
  const toggle = () => {
    onClick?.(!isActive);
    setActive(!isActive);
  };

  return (
    <button
      className={clsx(
        "flex items-center justify-center transition-transform duration-300 ease-in-out active:scale-90",
        {
          "scale-110 text-rose-500": isActive,
          "text-gray-400": !isActive,
        },
        className,
      )}
      onClick={toggle}
    >
      <FaHeart
        data-testid="heart-icon"
        className={clsx("transition-colors duration-300 ease-in-out", {
          "stroke-0 text-pink-500": isActive,
          "overflow-visible stroke-black stroke-[40px] text-white": !isActive,
        })}
      />
    </button>
  );
}
