/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F97316', // Electric Orange
          dark: '#EA580C',
        },
        secondary: {
          DEFAULT: '#3B82F6', // Slate Blue
          dark: '#2563EB',
        },
        dark: {
          DEFAULT: '#111827', // Slate Dark
          lighter: '#1F2937',
          lightest: '#374151',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
