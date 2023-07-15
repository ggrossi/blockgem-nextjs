const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    'app/**/*.{ts,tsx}',
    'components/**/*.{ts,tsx}',
    'pages/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans]
      },
      colors: {
        darken: '#0c0c0d',
        lighten: '#f5f5f5',
        blockteal: '#00dc82',
        blockcyan: '#34cdfe',
        blockblue: '0047e1'
      }
    }
  },
  plugins: []
};
