/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        light: '#FEFCF3',
        primary: '#97603f',
        'primary-foreground': '#462523'
      },
      fontFamily: {
        display: ['Alex Brush', 'serif'],
        sans: ['Lora', 'sans-serif']
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'), 
  ]
}
