import { createGlobalStyle } from "styled-components";

export const COLORS = {
  primary: '#00D2DF',
  light: '#fff',
  graylight: '#fff',
  dark: '#121212',
  dark200: '#151515',
};

export const GlobalStyles = createGlobalStyle`
* {
margin: 0;
padding: 0;
box-sizing: border-box;
background-color: ${COLORS.dark};
color: ${COLORS.light};
}

h1, h2, h3, h4, span, div, p {
  background: transparent;
}

h1, h2, h3, h4 {
  text-transform: uppercase;
}


*, input, button {
  font-family: 'Inter', sans-serif;
}

button, a {
  cursor: pointer;
}
`