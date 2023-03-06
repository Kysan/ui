import React from "react";
import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  s?: string;
  comment?: string;
};

const Input = ({ s, className, children, ...props }: InputProps) => {
  const newProps = {
    ...props,
    className: ` rounded focus:outline-none text-black text-center ${s || ""} ${
      className || ""
    }`,
  };

  return <input {...newProps}>{children}</input>;
};

type TextAreaProps = React.DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & {
  s?: string;
  comment?: string;
};

const TextArea = ({ s, className, ...props }: TextAreaProps) => {
  // * faire en sorte qu'elle se resize nativement à la taille
  // * du texte exactement comme sur discord
  const newProps = {
    ...props,
    className: ` rounded focus:outline-none text-black px-2 py-1 ${s || ""} ${
      className || ""
    }`,
  };

  return <textarea {...newProps} />;
};

export { Input, TextArea };
