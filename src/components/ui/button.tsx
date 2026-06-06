import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-xl border border-transparent bg-clip-padding text-sm font-semibold uppercase tracking-widest whitespace-nowrap transition-all duration-500 ease-architectural outline-none select-none focus-visible:border-[#E40F14] focus-visible:ring-3 focus-visible:ring-[#E40F14]/30 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-[#E40F14] text-white border-[#E40F14] hover:bg-transparent hover:text-[#E40F14] hover:border-[#E40F14] border",
        outline:
          "border-black text-black bg-transparent hover:bg-[#E40F14] hover:text-white hover:border-[#E40F14] border",
        secondary:
          "bg-brand-charcoal text-white border-brand-charcoal hover:bg-transparent hover:text-[#E40F14] hover:border-[#E40F14] border",
        ghost:
          "hover:bg-brand-alabaster hover:text-brand-red border border-transparent",
        destructive:
          "bg-destructive text-white hover:bg-destructive/80",
        link: "text-brand-red underline-offset-4 hover:underline border-none p-0 h-auto bg-transparent hover:text-[#E40F14]",
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
