import clsx from "clsx";
import Link from "next/link";
import { HTMLAttributeAnchorTarget, MouseEventHandler, ReactNode } from "react";

interface ButtonProops {
  children: ReactNode;
  variant: "PRIMARY" | "DISABLE" | "BLACK";
  className?: string;
}

interface LinkButtonProops extends ButtonProops {
  href?: string;
  target?: HTMLAttributeAnchorTarget;
}

interface FormButtonProps extends ButtonProops {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "reset" | "submit";
  isDisabled?: boolean;
}

export const LinkButton = ({ className, variant, href, target, children }: LinkButtonProops) => {
  const primary = variant === "PRIMARY";
  const disable = variant === "DISABLE";
  if (primary) {
    return (
      <Link
        href={`${href}`}
        target={target}
        className={clsx("px-6 py-3 bg-primary-500 border-2 border-primary-500 text-white rounded-md", className, "transition-all duration-200 ease-in-out", "hover:bg-transparent hover:text-primary-500")}
      >
        {children}
      </Link>
    );
  }
  if (disable) {
    return (
      <Link href={`${href}`} target={target} className={clsx("px-6 py-3 bg-dark-6 border-2 border-dark-6 text-white rounded-full", className)}>
        {children}
      </Link>
    );
  }
};
export const FormButton = ({ className, variant, isDisabled, onClick, type, children }: FormButtonProps) => {
  const primary = variant === "PRIMARY";
  const disable = variant === "DISABLE";
  const black = variant === "BLACK";

  if (primary) {
    return (
      <button
        onClick={onClick}
        disabled={isDisabled === true}
        type={type}
        className={clsx("px-6 py-3 bg-primary-500 border-2 border-primary-500 text-white rounded-md", className, "transition-all duration-200 ease-in-out", "hover:bg-transparent hover:text-primary-500")}
      >
        {children}
      </button>
    );
  }

  if (disable) {
    return (
      <button onClick={onClick} disabled={isDisabled === true} type={type} className={clsx("px-6 py-3 bg-dark-6 border-2 border-dark-6 text-white rounded-full", className, "transition-all duration-300 ease-in-out")}>
        {children}
      </button>
    );
  }
  if (black) {
    return (
      <button
        onClick={onClick}
        disabled={isDisabled === true}
        type={type}
        className={clsx("px-6 py-3 bg-transparent border-2 border-black text-black rounded-full", "hover:text-white hover:bg-black", className, "transition-all duration-300 ease-in-out")}
      >
        {children}
      </button>
    );
  }
};
