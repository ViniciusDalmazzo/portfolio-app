import { createGlobalStyle } from "styled-components";

export const COLORS = {
  primary: '#00D2DF',
  light: '#fff',
  graylight: '#c4c4c4',
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

// Custom scrollbar
*::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px ${COLORS.dark200};
	background-color: ${COLORS.light};
}

*::-webkit-scrollbar
{
	width: 10px;
	background-color: ${COLORS.light};
}

*::-webkit-scrollbar-thumb
{
	background-color: ${COLORS.dark};
	border: 2px solid ${COLORS.dark200};
}
`