/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: '#4ECB71',
        'light-green': '#64E4A6'
      }
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1128px',
      // => @media (min-width: 1128px) { ... }

      '2xl': '1588px'
      // => @media (min-width: 1588pxpx) { ... }
    },
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      base: '1rem', // 16px
      lg: '1.25rem', // 20px
      xl: '1.5rem', // 24px
      '2xl': '2rem', // 32px
      '3xl': '2.5rem', // 40px
      '4xl': '3rem', // 48px
      '5xl': '4rem' // 64px
    }
  },
  plugins: [require('@tailwindcss/line-clamp')]
}
