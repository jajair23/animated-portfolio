/** @type {import('tailwindcss').Config} */
export default {
  // Enable dark mode via class strategy (required for toggle to work)
  darkMode: 'class',

  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        background: {
          light: '#ffffff',
          dark: '#0f172a',
        },
        text: {
          light: '#1f2937',
          dark: '#e2e8f0',
        },
        accent: {
          light: '#3b82f6',
          dark: '#60a5fa',
        }
      }
    },
  },

  plugins: [],
}
