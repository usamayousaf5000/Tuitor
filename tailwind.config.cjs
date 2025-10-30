/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6', // Blue from logo
        secondary: '#000000', // Black from logo
        accent: '#2563EB', // Darker blue for hover states
        light: '#F3F4F6', // Light gray for backgrounds
        dark: '#1F2937', // Dark gray for text
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delay-1': 'float 6s ease-in-out infinite 1s',
        'float-delay-2': 'float 6s ease-in-out infinite 2s',
        'float-delay-3': 'float 6s ease-in-out infinite 3s',
        'float-delay-4': 'float 6s ease-in-out infinite 4s',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'spin-reverse': 'spin 15s linear infinite reverse',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(180deg)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px) rotate(0deg)' },
          '25%': { transform: 'translateY(-15px) translateX(10px) rotate(90deg)' },
          '50%': { transform: 'translateY(-30px) translateX(0px) rotate(180deg)' },
          '75%': { transform: 'translateY(-15px) translateX(-10px) rotate(270deg)' },
        },
        'float-fast': {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(-25px) scale(1.1)' },
        }
      },
    },
  },
  plugins: [],
}