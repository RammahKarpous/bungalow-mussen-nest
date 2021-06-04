module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        body: '#FFFDFB',
        brown: {
          50: '#1D1814',
          100: '#231E19',
          200: '#41382F',
          300: '#5F5244',
          400: '#7D6C59'
        },

        beige: {
          100: '#F5E4D1',
          200: '#41382F',
          300: '#FBF2EA',
        },

        green: {
          100: '#77823F',
          200: '#97A550',
          300: '#ADB96F',
          400: '#C0CA91',
        },

        gray: {
          800: '#F5F5F5',
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
