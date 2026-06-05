import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  size?: "sm" | "default" | "lg" | "xl" | "none";
}

export function Section({
  children,
  className,
  as: Component = "section",
  size = "default",
  ...props
}: SectionProps) {
  return (
    <Component
      className={cn(
        {
          "py-12 md:py-16": size === "sm",
          "py-20 md:py-24": size === "default", // xl scale
          "py-28 md:py-32": size === "lg",      // xxl scale
          "py-36 md:py-48": size === "xl",      // xxxl scale
          "py-0": size === "none",
        },
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
