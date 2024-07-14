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
        darkgray: 'hsl(218.7, 41.3%, 14.7%)',
        lightgray: 'hsl(220, 6.3%, 46.9%)',
        blue: 'hsl(219.4, 100%, 58.2%)',
        darkblue: 'hsl(219.6, 71.3%, 49.2%)',
        green: 'hsl(120, 56.4%, 45.9%)',
        darkgreen: 'hsl(120, 57%, 31%)',
        orange: 'hsl(34.6, 100%, 57.5%)',
        darkorange: 'hsl(34.4, 100%, 31.8%)',
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
