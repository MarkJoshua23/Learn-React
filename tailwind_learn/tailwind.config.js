/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        primary: '#202225',
        secondary: '#5865f2',
        gray:{
          900: '#202225'
        }
      },
      gridTemplateColumns:{
        'responsive': 'repeat(auto-fit,minmax(250px,1fr))'
      }
    },
  },
  plugins: [],
};
