/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue-elements': 'hsl(209,  23%,  22%)',
        'very-dark-blue-background': 'hsl(207,  26%,  17%)',
        'very-dark-blue-text': 'hsl(200,  15%,  8%)',
        'light-gray-input': 'hsl(0,  0%,  52%)',
        'very-light-gray-background': 'hsl(0,  0%,  98%)',
        'white': 'hsl(0,  0%,  100%)',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '4rem',
        lg: '6rem',
        xl: '8rem',
        '2xl': '10rem'
      }
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
