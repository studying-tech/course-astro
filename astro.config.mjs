import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'

import sitemap from '@astrojs/sitemap'

import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
  site: 'https://tomoki-saito.github.io',
  base: '/studying-astro-portfolio',
  integrations: [mdx(), sitemap(), icon()],
})
