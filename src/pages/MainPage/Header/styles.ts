import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  color: black;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  padding: 2rem;

  h1{
    font-size: 1.625rem;
  }

  p {
    text-align: center;
    line-height: 1.5rem;
    max-width: 30rem;
    color: grey;
  }
`;

export const ButtonHowWorks = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    font-size: 13px;
    font-weight: 600;

    padding: .5rem;
    border-radius: 8px;
    border: 1px solid hsl(214.3 31.8% 91.4%);
    background: white;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
        background-color: hsl(210 40% 96.1%);
    }
`
