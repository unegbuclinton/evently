/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFB3C1',
        secondary: '#EAEAEA',
        tertiary: '#D7FCD4',
      },
      boxShadow: {
        xl: 'rgba(71, 69, 84, 0.08) 0px 0px 0px 1px, rgba(0, 0, 0, 0.12) 1px 12px 20px, rgba(0, 0, 0, 0.12) 0px 3px 3px, rgba(0, 0, 0, 0.15) 0px -1px 0px inset',
      },
      backgroundImage: {
        'primary-gradient':
          ' linear-gradient(128deg, rgba(255,179,193,1) 9%, rgba(219,198,203,1) 27%, rgba(252,252,252,1) 59%)',
      },
    },
  },
  plugins: [],
}
