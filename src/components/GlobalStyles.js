import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    html {
        &::-webkit-scrollbar {
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb {
            background-color: darkgray;
        }
        &::-webkit-scrollbar-track {
            background: white;
        }

        height: 100%;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        width: 100%;

        min-height: 100%;
        display: flex;
        flex-direction: column;
    }

    svg {
        margin-right: 10px;
    }

    a {
        text-decoration: none;
    }
`

export default GlobalStyles
