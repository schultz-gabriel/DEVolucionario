import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

const GlobalStyle:any = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    ${normalize}
    body {
        margin: 0;
        padding: 0;    
        background-color: ${({ theme }) => theme.backgroundColor};
    }
    html, body {
        display: flex;
        min-height: 100vh;
        width: 100%;
        background-color: ${({ theme }) => theme.backgroundColor};
        color: ${({ theme }) => theme.color};
    }
    #__next {
        flex: 1;
        display: flex;
        flex-direction: column;
    }
    ul{
        padding:0;
    }
`;

export default GlobalStyle;
