module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': [ "'Inter'", 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
