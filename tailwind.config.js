/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FAF8F4', // Main background
          100: '#F5F2EB',
          200: '#EBE5D9',
        },
        gold: {
          400: '#D4B45A',
          500: '#C4A44A', // Primary CTA
          600: '#B3933A', // Hover
        },
        navy: {
          800: '#2A2A3E',
          900: '#1a1a2e', // Secondary/Footer
          950: '#11111F',
        },
        charcoal: {
          800: '#4A4A4A', // Body
          900: '#1C1C1C', // Headings
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Charter', 'Bitstream Charter', 'Georgia', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}