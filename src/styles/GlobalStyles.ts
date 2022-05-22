import { createGlobalStyle } from "styled-components";

export const COLORS = {
  primary: '#00D2DF',
  white: '#fff',
  black: '#121212'
};

export const GlobalStyles = createGlobalStyle`
*{
margin: 0;
padding: 0;
box-sizing: border-box;
background-color: ${COLORS.black};

color: ${COLORS.white};
}

body{
  margin-right: 10vw;
  margin-left: 10vw;
}

h1, h2, h3, h4, span, div{
  background: transparent;
}

*, input, button{
  font-family: 'Inter', sans-serif;
}
`