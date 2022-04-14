import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
 
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  background-color: #fcfcfc;
}

a {
  color: inherit;
  text-decoration: none;
}

image {
  width: 100%;
  height: 100%;
}
`;
