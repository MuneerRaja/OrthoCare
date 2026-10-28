import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      'padding': {
        "normalx": "5rem",
        "mobilex": "2rem"
      },
      "colors": {
        'frblue': "#076191"
      },
      "backgroundImage": {
        'abstract-pattern': "url('/media/abstract-bg.jpg')",
      },
      "fontFamily": {
        'inter': ['var(--font-inter)'],
        'merry': ['var(--font-merryweather)'],
      }
    },
  },
  plugins: [],
}
export default config
