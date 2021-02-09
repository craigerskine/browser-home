const colors = require('tailwindcss/colors')
module.exports = {
  darkMode: 'media',
  purge: {
    enabled: true,
    layers: ['utilities'],
    content: [
      './css/**/*.css',
      './js/**/*.js',
      './index.html',
    ],
  },
  theme: {
    extend: {
      colors: {
        gray: colors.gray,
      },
      fontFamily: {
        mono: [
          'Roboto Mono',
          'Menlo',
          'Monaco',
          'Consolas',
          '"Liberation Mono"',
          '"Courier New"',
          'monospace',
        ],
      },
      fontSize: {
        '7xl': ['7rem', { lineHeight: '1' }],
        '8xl': ['8rem', { lineHeight: '1' }],
        '9xl': ['9rem', { lineHeight: '1' }],
        '10xl': ['10rem', { lineHeight: '1' }],
      },
    },
  },
  variants: ['dark', 'responsive', 'group-hover', 'focus-within', 'hover', 'focus', 'active'],
  plugins: [],
}