const base = {
  font: "system-ui, sans-serif",
  monospace: "Menlo, monospace",

  colors: {
    text: "#000",
    background: "white",
    link: "#07c",
    pre: "#f0f",
    preBackground: "#333",
    code: "#f0f"
  },
  css: {
    fontSize: "16px",
    textAlign: "center",
    "@media screen and (min-width:56em)": {
      fontSize: "32px"
    },
    "@media screen and (min-width:64em)": {
      fontSize: "48px"
    },
    "@media print": {
      fontSize: "40px"
    },
    "li > p": {
      margin: 0
    }
  },
  pre: {
    textAlign: "left"
  },
  ol: {
    textAlign: "left"
  },
  ul: {
    textAlign: "left"
  }
};

const blue = "#0af";

export default {
  ...base,
  font: '"Montserrat", system-ui, sans-serif',
  colors: {
    text: "#fff",
    background: "#a20744",
    blue,
    link: blue,
    pre: blue,
    preBackground: "#000",
    code: blue
  },
  heading: {
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    fontWeight: 600
  },
  quote: {
    fontWeight: 600
  },
  Slide: {}
};
