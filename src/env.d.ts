/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare module '*.yml' {
  const value: {
    name: string
    youtubeId: string
    date: string
    color: string
    bright: boolean
    hide: boolean
  }[]
  export default value
}
