import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-md border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all duration-200 outline-none select-none focus-visible:border-cyan-400 focus-visible:ring-2 focus-visible:ring-cyan-400/50 active:translate-y-[1px] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {

        default:
          "bg-cyan-500/10 text-cyan-400 border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-400 hover:text-cyan-300 shadow-[0_0_12px_rgba(0,240,255,0.15)] hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]",
        
        outline:
          "border-white/10 bg-slate-900/50 text-slate-200 hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:text-cyan-300 backdrop-blur-sm",
        
        secondary:
          "bg-purple-500/10 text-purple-300 border-purple-500/30 hover:bg-purple-500/20 hover:border-purple-400 hover:text-purple-200 shadow-[0_0_12px_rgba(187,134,252,0.15)]",
        
        ghost:
          "text-slate-400 hover:bg-white/5 hover:text-cyan-400",
        
        destructive:
          "bg-red-500/10 text-red-400 border-red-500/30 hover:bg-red-500/20 hover:border-red-400 focus-visible:ring-red-400/30 shadow-[0_0_12px_rgba(239,68,68,0.15)]",
        
        link: 
          "text-cyan-400 underline-offset-4 hover:underline hover:text-cyan-300",
      },
      size: {
        default:
          "h-9 gap-2 px-3.5 py-2",
        xs: 
          "h-6 gap-1 rounded px-2 text-xs font-mono [&_svg:not([class*='size-'])]:size-3",
        sm: 
          "h-8 gap-1.5 rounded px-3 text-xs font-mono [&_svg:not([class*='size-'])]:size-3.5",
        lg: 
          "h-10 gap-2 rounded-md px-5 text-base",
        icon: 
          "size-9 rounded-md",
        "icon-xs":
          "size-6 rounded [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-8 rounded-md [&_svg:not([class*='size-'])]:size-3.5",
        "icon-lg": 
          "size-10 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };