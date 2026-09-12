import { defineConfig } from 'astro/config'
import { satteri } from '@astrojs/markdown-satteri'
import yaml from '@rollup/plugin-yaml'
import icon from 'astro-icon'

import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'https://niklasravnsborg.com',
  integrations: [sitemap(), icon()],
  vite: {
    plugins: [yaml()],
  },
  markdown: {
    processor: satteri({
      features: {
        gfm: {
          footnotes: {
            label: ' ',
          },
        },
      },
    }),
  },
})
