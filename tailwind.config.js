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
        pillShadow:
          '0px 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 1), 0px 0px 1px 0px rgba(0, 0, 0, 0.12)',
      },
      backgroundImage: {
        'primary-gradient':
          'linear-gradient(144deg, #048BA8 84.41%, #D6FED3 29.03%)',
      },
    },
  },
  plugins: [],
}
