import type { Config } from 'tailwindcss'

const default_theme = require('tailwindcss/defaultTheme')

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "main-bg": "url('/bg-img.jpeg')",
      },
      fontFamily: {
        bodyFont: ["Bebas Nueue", default_theme.fontFamily.sans],
      },
      colors: {
        bodyColor: "#fbfaf7",
        bgLight: "#1010100d",
        darkText: "#242424",
        lightText: "#a5a5a5",
      }
    },
  },
  plugins: [],
}
export default config
