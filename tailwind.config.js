/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-lime-400',
    'bg-red-500',
    'text-white',
    'text-black',
    'text-xl',
    'text-sm',
    'border-4',
    'border-pink-500',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
