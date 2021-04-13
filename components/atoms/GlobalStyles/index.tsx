import { normalize } from "polished";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    ${normalize()}
    
    body, html {
        line-height: 100%;
        font-size: 16px;
    }

    *, body, html, p, h1, h2, h3, h4, a {
        font-family: 'Roboto', sans-serif;
    }

    button {
        outline: none;
        border: none;
    }
`;
