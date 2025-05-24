import styled from "styled-components";

type PopUpContainerProps = {
  backgroundColor: string;
};

export const PopUpContainer = styled.div<PopUpContainerProps>`
  width: 20rem;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 4px;
  padding: 1rem;

  position: fixed;
  bottom: 10px;
  right: 10px;

  h1 {
    font-size: .8rem;
  }
`;
