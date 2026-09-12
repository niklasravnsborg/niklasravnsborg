import { defineConfig } from 'astro/config'
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
    remarkRehype: {
      footnoteLabel: ' ',
      footnoteLabelTagName: 'hr',
    },
  },
})
