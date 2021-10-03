const theme =  {
  palette: {
    white: "#FFFFFF",
  },
};


export default theme

declare global {
    interface Theme typeof theme
  }