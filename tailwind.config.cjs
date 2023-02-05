/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        principal: '#1E213A',
        'principal-dark': '#100E1D',
        'principal-text': '#E7E7EB',
        'principal-medium-text': '#A09FB1',
        'principal-dark-text': '#88869D'
      }
    },
    fontFamily: {
      raleway: ['raleway', 'sans-serif']
    },
    backgroundImage: {
      'cloud-pattern': "url('/src/assets/Cloud-background.png')"
    }
  },
  plugins: []
}
