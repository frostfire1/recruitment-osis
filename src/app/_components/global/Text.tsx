import clsx from "clsx";
import React, { ReactNode } from "react";

interface TextProops {
  children?: ReactNode;
  className?: string;
}

export function Display({ children, className }: Readonly<TextProops>) {
  return <h1 className={clsx("text-[60px] md:text-[64px] font-bold leading-heading", className)}>{children}</h1>;
}
export function H1({ children, className }: Readonly<TextProops>) {
  return <h1 className={clsx("text-[40px] md:text-[44px] font-bold leading-heading", className)}>{children}</h1>;
}
export function H2({ children, className }: Readonly<TextProops>) {
  return <h1 className={clsx("text-[32px] md:text-[36px] font-bold leading-heading", className)}>{children}</h1>;
}
export function H3({ children, className }: Readonly<TextProops>) {
  return <h1 className={clsx("text-[26px] md:text-[28px] font-bold leading-heading", className)}>{children}</h1>;
}
export function H4({ children, className }: Readonly<TextProops>) {
  return <h1 className={clsx("text-[22px] md:text-[24px] font-bold leading-heading", className)}>{children}</h1>;
}
export function H5({ children, className }: Readonly<TextProops>) {
  return <h1 className={clsx("text-[18px] md:text-[20px] font-bold leading-heading", className)}>{children}</h1>;
}
export function H6({ children, className }: Readonly<TextProops>) {
  return <h1 className={clsx("text-[14px] md:text-[16px] font-bold leading-heading", className)}>{children}</h1>;
}

interface BodyTextProops extends TextProops {
  variant: "REGULAR" | "SEMIBOLD" | "BOLD";
}

// Body Large Text
export function BodyLarge({ children, className, variant }: Readonly<BodyTextProops>) {
  switch (variant) {
    case "BOLD":
      return <h1 className={clsx("text-[18px] md:text-[20px] font-bold leading-body", className, variant)}>{children}</h1>;
    case "SEMIBOLD":
      return <h1 className={clsx("text-[18px] md:text-[20px] font-semibold leading-body", className, variant)}>{children}</h1>;
    case "REGULAR":
      return <h1 className={clsx("text-[18px] md:text-[20px] font-normal leading-body", className, variant)}>{children}</h1>;
    default:
      return <></>;
  }
}

// Body Medium Text

export function BodyMedium({ children, className, variant }: Readonly<BodyTextProops>) {
  switch (variant) {
    case "BOLD":
      return <h1 className={clsx("text-[14px] md:text-[16px] font-bold leading-body", className, variant)}>{children}</h1>;
    case "SEMIBOLD":
      return <h1 className={clsx("text-[14px] md:text-[16px] font-semibold leading-body", className, variant)}>{children}</h1>;
    case "REGULAR":
      return <h1 className={clsx("text-[14px] md:text-[16px] font-normal leading-body", className, variant)}>{children}</h1>;
    default:
      return <></>;
  }
}

// Body Small Text

export function BodyNormal({ children, className, variant }: Readonly<BodyTextProops>) {
  switch (variant) {
    case "BOLD":
      return <h1 className={clsx("text-[16px] md:text-[18px] font-bold leading-body", className, variant)}>{children}</h1>;
    case "SEMIBOLD":
      return <h1 className={clsx("text-[16px] md:text-[18px] font-semibold leading-body", className, variant)}>{children}</h1>;
    case "REGULAR":
      return <h1 className={clsx("text-[16px] md:text-[18px] font-normal leading-body", className, variant)}>{children}</h1>;
    default:
      return <></>;
  }
}

// Body Extra Small Text

export function BodySmall({ children, className, variant }: Readonly<BodyTextProops>) {
  switch (variant) {
    case "BOLD":
      return <h1 className={clsx("text-[14px] md:text-[16px] font-bold leading-body", className, variant)}>{children}</h1>;
    case "SEMIBOLD":
      return <h1 className={clsx("text-[14px] md:text-[16px] font-semibold leading-body", className, variant)}>{children}</h1>;
    case "REGULAR":
      return <h1 className={clsx("text-[14px] md:text-[16px] font-normal leading-body", className, variant)}>{children}</h1>;
    default:
      return <></>;
  }
}
