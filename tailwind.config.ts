import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'blue-base': '#003057',
        'orange-base': '#DB6E59',
        'grey-base': '#333333',
      },
    },
  },
  plugins: [],
}
export default config
