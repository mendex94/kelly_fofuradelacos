/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      fiona: ["Fiona", "sans-serif"],
    },
    fontSize: {
      'h1': '100px',
      'h2': '70px',
      'h3': '50px',
      'h4': '28px',
      'h5': '24px',
      'h6': '20px',
      'p1': '60px',
      'p2': '30px',
      'p3': '16px',
      'p4': '14px',
      'p5': '12px',
    },
    colors: {
      bege: {
        100: '#F9F7F4',
        200: '#EAE6E3'
      },
      rosa: {
        100: '#8C5554',
        200: '#BC8383',
        300: '#E0BABA',
        400: '#F0DDDD'
      },
      preto: {
        100: '#2D2F30'
      },
      verde: {
        100: '7A8C6F'
      }
    },
  },
  plugins: [],
}
