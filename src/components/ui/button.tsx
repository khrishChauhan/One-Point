import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-none border border-transparent bg-clip-padding text-sm font-semibold uppercase tracking-widest whitespace-nowrap transition-all duration-500 ease-architectural outline-none select-none focus-visible:border-brand-gold focus-visible:ring-3 focus-visible:ring-brand-gold/30 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-brand-red text-white border-brand-red hover:bg-transparent hover:text-brand-gold hover:border-brand-gold border",
        outline:
          "border-brand-gold text-brand-gold bg-transparent hover:bg-brand-red hover:text-white hover:border-brand-red border",
        secondary:
          "bg-brand-charcoal text-white border-brand-charcoal hover:bg-transparent hover:text-brand-gold hover:border-brand-gold border",
        ghost:
          "hover:bg-brand-alabaster hover:text-brand-red border border-transparent",
        destructive:
          "bg-destructive text-white hover:bg-destructive/80",
        link: "text-brand-red underline-offset-4 hover:underline border-none p-0 h-auto bg-transparent hover:text-brand-gold",
      },
      size: {
        default:
          "h-12 gap-2 px-6 text-xs",
        xs: "h-8 gap-1 px-3 text-[10px]",
        sm: "h-10 gap-1.5 px-4 text-xs",
        lg: "h-14 gap-2 px-8 text-sm",
        icon: "size-12",
        "icon-xs": "size-8",
        "icon-sm": "size-10",
        "icon-lg": "size-14",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
