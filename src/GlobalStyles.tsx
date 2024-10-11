// GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
  }

  html, body {
    height: 100%;
    font-family: Arial, sans-serif; 
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: normal; 
  }

  ul, ol {
    list-style: none; 
  }

  a {
    text-decoration: none; 
    color: inherit; 
  }

  button {
    border: none; 
    background: none; 
  }

  img {
    max-width: 100%; 
    height: auto; 
  }
`;

export default GlobalStyles;
