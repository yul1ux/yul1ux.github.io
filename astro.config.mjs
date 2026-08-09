// @ts-check
import { defineConfig } from 'astro/config';

/** @type {import('rehype-pretty-code').Options} */
const prettyCodeOptions = {
  theme: {
    light: 'github-light',
    dark: 'github-dark',
  },
  keepBackground: false,
};

// https://astro.build/config

export default defineConfig({
  site: 'https://yul1ux.github.io',
  base: '/thiha',
})