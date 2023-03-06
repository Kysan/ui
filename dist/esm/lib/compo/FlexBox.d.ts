import { HTMLAttributes } from "react";
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
declare const Flex: ({ className, s, children, ...props }: FlexBoxPropsType) => JSX.Element;
declare const Row: ({ className, s, children, ...props }: FlexBoxPropsType) => JSX.Element;
declare const Column: ({ className, s, children, ...props }: FlexBoxPropsType) => JSX.Element;
declare const Section: ({ className, s, children, ...props }: FlexBoxPropsType) => JSX.Element;
export { Flex, Row, Column, Section };
