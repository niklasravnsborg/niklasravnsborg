import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'
import yaml from '@rollup/plugin-yaml'

import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'https://niklasravnsborg.com',
  integrations: [tailwind(), react(), sitemap()],
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
