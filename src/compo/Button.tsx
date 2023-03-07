import React from "react";

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  comment?: string;
  s?: string;
};

const Button = ({
  className,
  s,
  children,
  disabled,
  ...props
}: ButtonProps) => {
  const newProps = {
    ...props,
    disabled,
    className: ` ${
      disabled ? "bg-stone-600" : "bg-green-600"
    } p-1 text-white  rounded-md select-none  ${s || ""} ${className || ""}`,
  };
  return <button {...newProps}>{children}</button>;
};

export { Button };
