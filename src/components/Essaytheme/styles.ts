import styled from "styled-components";

export const EssayThemeContainer = styled.div`
    padding: 1rem;

    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    gap: .5rem;

    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
    border-radius: 4px;

    background-color: white;

    header{
        width: 100%;
        display: flex;
        justify-content: start;
        align-items: center;
        gap: .5rem;

        h1{
            font-weight: 300;
        }
    }

    p{
        font-weight: bold;
        font-size: .7rem;
    }

    input{
        width: 100%;
        border: 1px solid gainsboro;
        border-radius: 4px; 
        padding: .6rem;
        font-size: .75rem;
    }
`