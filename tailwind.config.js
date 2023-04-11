/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'calorieCard': '2px 2px 10px rgba(0, 0, 0, 0.25), -2px -2px 10px #f9fafb',
        'calorieCardDark': '2px 2px 7px #000000, -2px -2px 7px rgba(255, 255, 255, 0.13)'
      },
      backgroundColor: {
        'darker_gray_950': '#000104',
      },
      borderColor: {
        'rich_gray': '#1F2022'
      }
    },
  },
  plugins: [],
}
