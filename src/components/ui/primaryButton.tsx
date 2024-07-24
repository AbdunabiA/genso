import { cn } from "@/lib/utils";
import React, { MouseEventHandler } from "react";

interface PrimaryButtonTypes {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  title: string;
  className?: string;
}

const PrimaryButton = ({ onClick, title, className }: PrimaryButtonTypes) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "py-[6px] px-[12px] lg:py-[15px] lg:px-[30px] bg-primaryGreen rounded-[50px]",
        className
      )}
    >
      {title}
    </button>
  );
};

export default PrimaryButton;
