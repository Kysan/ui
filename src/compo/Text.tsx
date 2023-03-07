import React, { HTMLAttributes } from "react";

export type TextProps = HTMLAttributes<HTMLDivElement> & {
  comment?: string;
  s?: string;
};

const Text = ({ className, s, children, ...props }: TextProps) => {
  const newProps = {
    ...props,
    className: `Text ${s || ""} ${className || ""}`,
  };
  return <p {...newProps}>{children}</p>;
};

export type HeadingProps = TextProps;

const Heading = ({ className, s, children, ...props }: HeadingProps) => {
  const newProps = {
    ...props,
    className: `Heading ${s || ""} ${className || ""}`,
  };
  return <h2 {...newProps}>{children}</h2>;
};

const Span = ({ className, s, children, ...props }: HeadingProps) => {
  const newProps = {
    ...props,
    className: `Span ${s || ""} ${className || ""}`,
  };
  return <h2 {...newProps}>{children}</h2>;
};

export { Text, Heading, Span };
