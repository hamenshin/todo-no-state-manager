import clsx from "clsx";
import type { AnchorHTMLAttributes, FC } from "react";
import React from "react";

export type TypographyType =
  /*  */
  | "H1SemiBold" // 24 / 140% / 600
  | "H2SemiBold" // 20 / 140% / 600
  | "H3Medium" // 18 / 148% / 500
  | "H3SemiBold" // 18 / 148% / 600
  | "H4SemiBold" // 16 / 148% / 600
  | "MRegular" // 16 / 148% / 400
  | "MMedium" // 16 / 148% / 500
  | "MSemiBold" // 16 / 148% / 600
  | "SRegular" // 14 / 148% / 400
  | "SMedium" // 14 / 148% / 500
  | "SSemiBold" // 14 / 148% / 600
  | "XSMedium" // 12 / 130% / 500
  | "MonoMRegular" // mono 16 / 140% / 400
  | "MonoSRegular" // mono 14 / 140% / 400
  /*  */
  | "Heading32"
  | "Heading24"
  | "Heading20"
  | "Heading16"
  | "Heading14"
  | "Heading12"
  | "SemiBold52"
  | "SemiBold48"
  | "SemiBold40"
  | "SemiBold32"
  | "SemiBold24"
  | "SemiBold20"
  | "SemiBold16"
  | "SemiBold14"
  | "Regular24"
  | "Regular20"
  | "Regular16"
  | "Regular14"
  | "Regular12"
  | "Mono16";

type ElementType = "a" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

/* Карта классов: Начало */
const typographyToTailwindClass: Record<TypographyType, string> = {
  /*  */
  H1SemiBold: "fs-24 lh-140 font-600",
  H2SemiBold: "fs-20 lh-140 font-600",
  H3Medium: "fs-18 lh-148 font-500",
  H3SemiBold: "fs-18 lh-148 font-600",
  H4SemiBold: "fs-16 lh-148 font-600",

  MRegular: "fs-16 lh-148 font-400",
  MMedium: "fs-16 lh-148 font-500",
  MSemiBold: "fs-16 lh-148 font-600",

  SRegular: "fs-14 lh-148 font-400",
  SMedium: "fs-14 lh-148 font-500",
  SSemiBold: "fs-14 lh-148 font-600",

  XSMedium: "fs-12 lh-130 font-500",

  MonoMRegular: "font-mono fs-16 lh-140 font-400",
  MonoSRegular: "font-mono fs-14 lh-140 font-400",

  /*  */
  Heading32: "fs-32 lh-40 font-600",
  Heading24: "fs-24 lh-30 font-600",
  Heading20: "fs-20 lh-28 font-600",
  Heading16: "fs-16 lh-24 font-600",
  Heading14: "fs-14 lh-16 font-600",
  Heading12: "fs-12 lh-16 font-600",

  SemiBold52: "fs-52 lh-64 font-600",
  SemiBold48: "fs-48 lh-60 font-600",
  SemiBold40: "fs-40 lh-48 font-600",
  SemiBold32: "fs-32 lh-40 font-600",
  SemiBold24: "fs-24 lh-32 font-600",
  SemiBold20: "fs-20 lh-28 font-600",
  SemiBold16: "fs-16 lh-24 font-600",
  SemiBold14: "fs-14 lh-20 font-600",

  Regular24: "fs-24 lh-30 font-400",
  Regular20: "fs-20 lh-26 font-400",
  Regular16: "fs-16 lh-24 font-400",
  Regular14: "fs-14 lh-20 font-400",
  Regular12: "fs-12 lh-16 font-400",

  Mono16: "font-mono fs-16 lh-24 font-400",
};
/* Карта классов: Конец */

type OwnPropertyType = {
  typography: TypographyType;
  element?: ElementType;
  className?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export const Typography: FC<OwnPropertyType> = ({
  typography,
  element = "span",
  className: clsname = "",
  children,
  ...props
}) => {
  const className = clsx("font-yadro", typographyToTailwindClass[typography], clsname);

  return React.createElement(
    element,
    {
      className,
      ...props,
    },
    children,
  );
};

Typography.displayName = "Typography";
