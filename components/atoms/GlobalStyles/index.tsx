import { normalize } from "polished";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    ${normalize()}
    
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400&display=swap');

    body, html {
        line-height: 100%;
        font-size: 16px;
    }

    *, body, html, p, h1, h2, h3, h4, a {
        font-family: 'Roboto', sans-serif;
    }
`;
