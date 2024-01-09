/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      // 'sm': {'min': '640px', 'max': '767px'},
      // // => @media (min-width: 640px) { ... }

      // 'md': {'min': '768px', 'max':'1023px'},
      // // => @media (min-width: 768px) { ... }

      // 'lg': {'min': '768px', 'max':'1023px'},
      // // => @media (min-width: 768px) { ... }
      // 'xl': {'min': '1024px', 'max':'1535px'},
      // // => @media (min-width: 768px) { ... }

      // '2xl': {'min': '1534px', 'max':'1600px'},
      // // => @media (min-width: 1536px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

     
    },
    extend: {
      screens: {
        'xs': {'min': '320px', 'max':'639px'},
      },
    },
  },
  plugins: [],
}

