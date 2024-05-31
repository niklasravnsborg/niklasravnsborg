import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import yaml from '@rollup/plugin-yaml'
import icon from 'astro-icon'

import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'https://niklasravnsborg.com',
  integrations: [tailwind(), sitemap(), icon()],
  vite: {
    plugins: [yaml()],
  },
  markdown: {
    remarkRehype: {
      footnoteLabel: ' ',
      footnoteLabelTagName: 'hr',
    },
  },
})
