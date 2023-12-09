/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "url('/public/img/svg/buy-tile.svg')",
        'shine': 'linear-gradient(120deg,transparent,rgba(146,148,248,.4),transparent)',
      },
      colors: {
        'background-primary': '#0034DD',
        'background-quaternary': '#2a2a2a',
        'background-secondary': '#2A3855',
        'background-tertiary': '#F2F5FD',

        'border-primary': '#ECEDF1',
        'border-secondary': '#3c3c3c',
        'border-tertiary': '#2A2A2A',

        'text-primary': '#2A3855',
        'text-quaternary': '#2a2a2a',
        'text-secondary': '#606F8D',
        'text-tertiary': '#0034DD',
      },
      fontFamily: {
        libre: ['"Jost"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
