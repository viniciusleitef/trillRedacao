import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
    }
    body, input, textarea, button, select {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
    input, select, textarea{
        outline: none;
        border: 1px solid transparent;
        border-bottom: 1px solid '#80808a';
        transition: all 0.2s;
    }
    input:focus, select:focus, textarea:focus{
        box-shadow: 0 2px 0 '#3c6481';
        border: 1px solid transparent;
        border-radius: 1;
    }
    input::placeholder{
        color: '#A8A8B3';
    }
`;
