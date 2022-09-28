/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.ejs"],
  theme: {
    screens: {
      'mobile':'100px',
      'desktop': '768px'
    },
    fontFamily: {
      sans: ['Lato', 'sans-serif'],
      serif: ['Roboto Slab', 'serif'],
      mono: ['Ubuntu Mono', 'monospace']
    },
    extend:{},
  },
  plugins: [],
}
