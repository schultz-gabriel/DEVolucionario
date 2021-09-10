import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
    * {
      box-sizing: border-box;
    }
    
    ${normalize}
    
    body {
      margin: 0;
      padding: 0;    
      font-family: ${({ theme }) => theme.fontFamily};
    }
    
    html, body {
      display: flex;
      min-height: 100vh;
      width: 100%;
      background-color: ${({ theme }) => theme.background.main.color};
      transition: all ${({ theme }) => theme.transition};
    }
    
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.secondary.main.color};
    }

    p {
      padding: 0;
      margin: 0;
    }

    h3{
      margin:0;
    }

    #__next {
      flex: 1;
      display: flex;
      flex-direction: column;
    }
`;

export { GlobalStyle as default };
