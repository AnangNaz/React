/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    fontFamily: {
      montserrat: ['Montserrat Alternates', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
      inter: ['Inter', 'sans-serif']
    },
    extend: {
      fontFeatureSettings: {
        'tnum-onum-ordn-ss02-ss03-ss04-salt-ss01': "'tnum' on, 'onum' on, 'ordn' on, 'ss02' on, 'ss03' on, 'ss04' on, 'salt' on, 'ss01' on"
      }
    }
  },
  variants: {
    fontFeatureSettings: ['responsive']
  },
  plugins: []
}
