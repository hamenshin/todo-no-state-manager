import { forwardRef, type HTMLAttributes } from "react";
import {
  alignItems,
  justifyContent,
  type AlignItemsType,
  type JustifyContentType,
} from "./lib/types";
import clsx from "clsx";

type OwnPropertyType = {
  column?: boolean;
  middle?: boolean;
  "justify-content"?: JustifyContentType;
  "align-items"?: AlignItemsType;
} & HTMLAttributes<HTMLDivElement>;

export const Flex = forwardRef<HTMLDivElement, OwnPropertyType>(
  ({ children, className = "", column, middle, ...props }, ref) => (
    <div
      ref={ref}
      className={clsx(
        "flex",
        column && "flex-col",
        props["justify-content"] && justifyContent[props["justify-content"]],
        props["align-items"] && alignItems[props["align-items"]],
        middle && `${alignItems.center} ${justifyContent.center}`,
        className,
      )}
      {...props}
    >
      {children}
    </div>
  ),
);

Flex.displayName = "Flex";
