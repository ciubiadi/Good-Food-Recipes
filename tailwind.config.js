/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'nunito': ['nunito', 'sans-serif'],
      'quicksand': ['quicksand', 'sans-serif'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

