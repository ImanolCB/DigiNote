/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'inset-bottom-sky-400': 'inset 0 -10px 30px -10px rgba(56, 189, 248, 0.4)', // Color sky-400 en Tailwind CSS
      },
    },
  },
  plugins: [],
}

