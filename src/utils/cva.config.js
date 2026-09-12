import { cx as clsx } from 'cva'
import { defineConfig } from 'cva/config'
import { twMerge } from 'tailwind-merge'

export const { cva, cx } = defineConfig({
  cx: clsx,
  hooks: {
    onComplete: className => twMerge(className),
  },
})
