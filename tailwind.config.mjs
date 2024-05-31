/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      spacing: {
        1: '4px',
        2: '8px',
        3: '16px',
        4: '32px',
        5: '64px',
        6: '128px',
        7: '256px',
      },
      colors: {
        primary: 'white',
        text: 'white',
        accent: '#FFE51F',
        lightgray: '#F6F6FF',
        dark: '#162135',
        green: '#33B733',
        blue: '#2A73FF',
        orange: '#FFA326',
      },
      fontSize: {
        xs: '12px',
        sm: '14px',
        base: '16px',
        lg: '18px',
        xl: '24px',
        '2xl': '27px',
        '3xl': '32px',
        '4xl': '48px',
      },
      borderRadius: {
        none: '0',
        sm: '8px',
        DEFAULT: '16px',
        md: '24px',
        lg: '48px',
        full: '9999px',
      },
      fontFamily: {
        sans: ['Kumbh Sans', 'sans-serif'],
        heading: ['Kumbh Sans', 'sans-serif'],
        body: ['Kumbh Sans', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
