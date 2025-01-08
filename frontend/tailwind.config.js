/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        whiteImg : 'url(/white-bg.jpg)',
        BG : 'url(/BG.jpg)'
      },
      gridTemplateColumns : {
        'menu' : 'repeat(auto-fit, minmax(260px,1fr))'
      },
      colors: {
        'yellowLike' : '#ffbf00',
        'deepBrown' : '#38110',
        'brown' : 'rgb(73, 24, 0)',
        'topNavBg' : 'rgba(92, 31, 0, 0.605)',
        'ulHover' : '#320f01'
      }
    },
  },
  plugins: [],
}