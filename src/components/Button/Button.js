import React from "react";
import s from "./Button.module.css";
import cn from "classnames";

export const Button = ({ children, appearence, ...props }) => {
  return (
    <>
      <button
        className={cn(s.button, {
          [s.primary]: appearence === "primary",
          [s.secondary]: appearence === "secondary",
        })}
        {...props}
      >
        {children}
      </button>
    </>
  );
};
