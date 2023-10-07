import React from "react";
import className from "classnames";
import { twMerge } from "tailwind-merge";

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  rounded,
  outline,
  ...rest
}) {
  let classes = className(
    "flex items-center px-1.5 py-3 mx-1 my-1 border",
    {
      "border-blue-600 bg-blue-500 text-white": primary,
      "border-gray-900 bg-gray-800 text-white": secondary,
      "border-green-600 bg-green-500 text-white": success,
      "border-yellow-400 bg-yellow-300 text-white": warning,
      "border-red-600 bg-red-500 text-white": danger,
      "rounded-full": rounded,
      "bg-white": outline,
      "text-blue-500": outline && primary,
      "text-gray-900": outline && secondary,
      "text-green-500": outline && success,
      "text-yellow-400": outline && warning,
      "text-red-500": outline && danger,
    },
    rest.className
  );

  classes = twMerge(classes);

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

Button.propTypes = {
  checkVariation: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);
    if (count > 1) {
      return new Error("Only one type of variation possible");
    }
  },
};

export default Button;
