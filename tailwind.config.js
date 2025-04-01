/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0efff',
          200: '#baddff',
          300: '#7cc0ff',
          400: '#3aa1ff',
          500: '#0b84ff',
          600: '#0068ff',
          700: '#0054d6',
          800: '#0044ae',
          900: '#003c8c',
        },
        secondary: {
          50: '#f4f6fb',
          100: '#e9ecf6',
          200: '#d3daed',
          300: '#b3bfdf',
          400: '#8c9cce',
          500: '#6f7fbe',
          600: '#5b68ae',
          700: '#4c569d',
          800: '#414881',
          900: '#383f68',
        }
      },
      fontFamily: {
        sans: ['Brockmann', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        }
      },
      backgroundSize: {
        '300%': '300%',
      },
    },
  },
  plugins: [],
};