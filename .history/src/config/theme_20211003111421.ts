const theme = {
  palette: {
    white: "#FFFFFF",
  },
};

export default theme;

declare global {
  type Theme = typeof theme;
}
