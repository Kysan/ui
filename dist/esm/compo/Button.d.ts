import React from "react";
export type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    comment?: string;
    s?: string;
};
declare const Button: ({ className, s, children, disabled, ...props }: ButtonProps) => JSX.Element;
export { Button };
