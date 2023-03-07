import React, { HTMLAttributes } from "react";

type FlexBoxPropsType = HTMLAttributes<HTMLDivElement> & {
  /** pour set les classes de ce div */
  s?: string;
  comment?: string;
};
/**
 * I made this because I found the current <div> too ugly
 * it's basicaly an alias
 * that will replace
 * ```js
 * <div style={{ display: 'flex' }}></div>
 * ```
 * by
 * ```jsx
 * <Flex s="x"></Flex>
 * ```
 */
const Flex = ({ className, s, children, ...props }: FlexBoxPropsType) => {
  const newProps = {
    ...props,
    className: `flex ${s} ${className}`,
  };
  return <div {...newProps}>{children}</div>;
};

const Row = Flex;

const Column = ({ className, s, children, ...props }: FlexBoxPropsType) => {
  const newProps = {
    ...props,
    className: `flex flex-col ${s} ${className}`,
  };
  return <div {...newProps}>{children}</div>;
};

const Section = Column;

export { Flex, Row, Column, Section };
