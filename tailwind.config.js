/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark:    '#060d1f',  // Deep navy base
          primary: '#1f69ff',  // Vivid blue (hero main)
          accent:  '#38bdf8',  // Light sky accents
          purple:  '#60a5fa',  // Soft blue (was purple)
          mid:     '#0d34de',  // Mid-blue for sections
          deep:    '#0a1a4a',  // Deep navy panels
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'blob':    'blob 7s infinite',
        'fade-in': 'fadeIn 1s ease-out',
        'float':   'float 6s ease-in-out infinite',
      },
      keyframes: {
        blob: {
          '0%':   { transform: 'translate(0px, 0px) scale(1)' },
          '33%':  { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%':  { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        fadeIn: {
          '0%':   { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
