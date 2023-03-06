import React from "react";
import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    s?: string;
    comment?: string;
};
declare const Input: ({ s, className, children, ...props }: InputProps) => JSX.Element;
type TextAreaProps = React.DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> & {
    s?: string;
    comment?: string;
};
declare const TextArea: ({ s, className, ...props }: TextAreaProps) => JSX.Element;
export { Input, TextArea };
