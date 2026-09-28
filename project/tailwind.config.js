/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        espresso: {
          50: '#F8F3EE',
          100: '#EDE0D2',
          200: '#D9C0A8',
          300: '#C29A78',
          400: '#A87650',
          500: '#8B5A3C',
          600: '#6B4226',
          700: '#4A2C1A',
          800: '#33200F',
          900: '#2B1B12',
          950: '#1A0F08',
        },
        cream: {
          50: '#FDFAF6',
          100: '#FAF6F1',
          200: '#F5EBE0',
          300: '#EDE0D0',
          400: '#E0CDB8',
          500: '#D0B89E',
        },
        amber: {
          400: '#E0A24E',
          500: '#C8862E',
          600: '#A86C1E',
        },
        sage: {
          400: '#8BA888',
          500: '#6B8B6A',
          600: '#557055',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'steam': 'steam 2.5s ease-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        steam: {
          '0%': { opacity: '0', transform: 'translateY(0) scale(1)' },
          '30%': { opacity: '0.5' },
          '100%': { opacity: '0', transform: 'translateY(-30px) scale(1.5)' },
        },
      },
    },
  },
  plugins: [],
};
