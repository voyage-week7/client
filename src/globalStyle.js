import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    margin: 0;
    padding: 0;
  }
  ul,li {
    list-style: none;
  }
  h1,h2,h3,h4 {
    margin: 0;
  }
`;

export default GlobalStyle;
