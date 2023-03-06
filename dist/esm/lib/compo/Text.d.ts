import { HTMLAttributes } from "react";
export type TextProps = HTMLAttributes<HTMLDivElement> & {
    comment?: string;
    s?: string;
};
declare const Text: ({ className, s, children, ...props }: TextProps) => JSX.Element;
export type HeadingProps = TextProps;
declare const Heading: ({ className, s, children, ...props }: HeadingProps) => JSX.Element;
declare const Span: ({ className, s, children, ...props }: HeadingProps) => JSX.Element;
export { Text, Heading, Span };
