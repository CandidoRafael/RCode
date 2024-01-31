import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
  
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'IBM Plex Sans', sans-serif;
}

#root {
  --color-blue-primary: rgb(43, 89, 189);
  --color-blue-secondary: rgb(154, 188, 255);
  --color-baby-blue: rgb(18, 168, 238);
}

body {
  scroll-behavior: smooth;
}

/* ::-webkit-scrollbar {
    width: 10px;
    background-color: var(--color-blue-primary);
    border: 5px solid var(--color-blue-secondary);
}

::-webkit-scrollbar-thumb {
  background-color: rgb(84, 148, 221);
  border-radius: 50px;
} */
`