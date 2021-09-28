module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height:{
        "77vh" : "77vh",
      },
      colors: {
        "theme-purple": "#5267DF",
        "theme-red": "#FA5959",
        "theme-blue": "#242A45",
        "theme-grey": "#9194A2",
        "theme-white": "#f7f7f7",
        "theme-primary": "#fd3d57",
        "theme-secondary": "#2b2d42",
      },
      fontFamily:{
        Poppin: ["Poppins, sans-serif"],
        Roboto: ["Roboto, sans-serif"],
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          lg : "1024px",
          xl : "1124px",
          "2xl" : "1124px",
        },
      },
    },
  },
  variants: {
    extend: {
      visibility:['group-hover'],
      scale: ['active', 'group-hover'],
    },
  },
  plugins: [],
}
