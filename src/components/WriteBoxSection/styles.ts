import styled from "styled-components";

export const WriteBoxContainer = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  border: 1px solid rgba(150, 150, 150, 0.5);
  border-radius: 8px;
  gap: 1rem;

  .icon {
    border-radius: 50%;
    background-color: #dfe1e5;
    padding: 0.5rem;
  }

  p {
    font-size: 0.825rem;
    color: grey;
  }

  textarea {
    width: 100%;
    min-height: 10rem;
    border-radius: 6px;
    border: 1px solid #e7ebf2;
    padding: 0.5rem;
    resize: vertical;
  }

  button {
    width: 100%;
    background-color: #0f172a;
    padding: 0.75rem;
    color: white;
    border-radius: 4px;
    border: none;
    font-size: 0.85rem;
    font-weight: bold;
    cursor: pointer;
  }
`;
