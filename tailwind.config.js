/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'bounce': 'bounce 1s infinite',
        'float': 'float 6s ease-in-out infinite',
        'glitch': 'glitch 0.3s infinite linear alternate-reverse',
        'scan': 'scan 4s linear infinite',
      },
      keyframes: {
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glitch: {
          '0%': {
            clipPath: 'polygon(0 2%, 100% 2%, 100% 5%, 0 5%)',
            transform: 'translate(2px)',
          },
          '20%': {
            clipPath: 'polygon(0 15%, 100% 15%, 100% 15%, 0 15%)',
            transform: 'translate(-2px)',
          },
          '40%': {
            clipPath: 'polygon(0 10%, 100% 10%, 100% 20%, 0 20%)',
            transform: 'translate(1px)',
          },
          '60%': {
            clipPath: 'polygon(0 1%, 100% 1%, 100% 2%, 0 2%)',
            transform: 'translate(-1px)',
          },
          '80%': {
            clipPath: 'polygon(0 33%, 100% 33%, 100% 33%, 0 33%)',
            transform: 'translate(0px)',
          },
          '100%': {
            clipPath: 'polygon(0 44%, 100% 44%, 100% 44%, 0 44%)',
            transform: 'translate(3px)',
          },
        },
        scan: {
          '0%': { backgroundPosition: '0 -100vh' },
          '35%, 100%': { backgroundPosition: '0 100vh' },
        },
      },
      cursor: {
        none: 'none',
      },
    },
  },
  plugins: [],
};