import React, { forwardRef } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva } from '../../utils/cva.config'

const buttonVariants = cva({
  base: 'inline-block whitespace-nowrap rounded-sm text-base font-bold leading-none ring-offset-white transition-colors hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  variants: {
    variant: {
      bordered: 'border border-dark/30 text-dark/80 hover:border-dark/60',
      colored: 'text-dark/60',
    },
    size: {
      large: 'px-3 py-3 min-[500px]:px-4 xl:px-4',
      default: 'px-3 py-3',
    },
    color: {
      unset: 'hover:text-dark',
      green: 'bg-green/10 text-green',
      blue: 'bg-blue/10 text-blue',
      orange: 'bg-orange/10 text-orange',
    },
  },
  defaultVariants: {
    color: 'unset',
    size: 'default',
  },
})

const Button = forwardRef(
  ({ className, variant, size, color, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={buttonVariants({ variant, size, color, className })}
        ref={ref}
        {...props}
      />
    )
  },
)

export default Button
