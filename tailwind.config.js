// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#F8FAFB',
          200: '#EFF2F4',
          300: '#E5E8EC',
          400: '#CFD4DA',
          500: '#A6ADB6',
          600: '#787F8A',
          700: '#4F555E',
          800: '#32373F',
          900: '#1D2026',
        },
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
    },
  },
  variants: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus', 'active'],
  plugins: [],
}