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
        'glow': '2px 2px 7px 1px rgba(0, 0, 0, 0.3), -2px -2px 7px 1px #f9fafb',
        'glowDark': '3px 3px 5px 1px rgba(0, 0, 0, 1), -2px -2px 7px rgba(255, 255, 255, 0.13)',
        
        'progressBar': 'inset 3px 3px 5px 0px rgba(0, 0, 0, 0.3), inset -3px -3px 5px 0px rgba(0, 0, 0, 0.3);',
        'progressBarDark': 'inset 3px 3px 3px 1px rgba(0, 0, 0, 0.5), inset -3px -3px 5px 10px rgba(0, 0, 0, 0.5);',
      },
      backgroundColor: {
        'rich_gray': '#1F2022',
      },
      borderColor: {
        'rich_gray': '#1F2022'
      }
    },
  },
  plugins: [],
}
