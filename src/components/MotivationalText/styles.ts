import styled from "styled-components";

export const MotivationalTextContainer = styled.div`
  padding: 1rem;

  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  gap: 0.5rem;

  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
  border-radius: 4px;

  background-color: white;

  margin: 1rem 0;

  header {
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 0.5rem;

    h1 {
      font-weight: 300;
    }
  }

  p {
    font-weight: 600;
    font-size: 0.7rem;
  }

  p:nth-child(4) {
    font-weight: 400;
    color: gray;
  }

  textarea {
    width: 100%;
    resize: vertical;
    min-height: 7.5rem;
    border: 1px solid gainsboro;
    border-radius: 4px;
    padding: 0.6rem;
    font-size: 0.75rem;
  }
`;
