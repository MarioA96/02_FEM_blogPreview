import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{ts,tsx,js,jsx,astro}', './pages/**/*.{ts,tsx,js,jsx,astro}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        fonts: {
          figtree_italic_variable: { value: 'var(--font-figtree-italic-variable), sans-serif' },
          figtree_variable: { value: 'var(--font-figtree-variable), sans-serif' },
          figtree_extrabold: { value: 'var(--font-figtree-extrabold), sans-serif' },
          figtree_semibold: { value: 'var(--font-figtree-semibold), sans-serif' },
        }
      },
      breakpoints: {
        xsm: '340px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px'
      }
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
