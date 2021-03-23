import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    :root {
        --app-background-color: #24292e;
        --app-background-secondary-color: #ebedf0;
        --app-hover-color: #ccc;

        --text-base-color: #333;
        --text-secondary-color: #32b256;
        --text-subtitle-color: #fff;
        --text-small-color: #586069;
        --text-detail-color: #f9826c;
        --text-link-color: #1b75da;

        --btn-background-color: #fafbfc;
        --btn-background-hover-color: #f3f4f6;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    html {
        height: 100vh;

        &::-webkit-scrollbar {
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb {
            background-color: darkgray;
        }
        &::-webkit-scrollbar-track {
            background: white;
        }
    }

    body {
        text-rendering: optimizeSpeed;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        width: 100%;
        color: var(--text-base-color);
    }

    footer {
        margin-top: auto;
    }

    svg {
        margin-right: 10px;
    }

    img {
        max-width: 100%;
        display: block;
    }

    a {
        text-decoration: none;
        outline: none;
    }
`

export default GlobalStyles
