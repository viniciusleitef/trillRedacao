import styled from "styled-components";

export const UploadSectionContainer = styled.div`
  width: 100%;
  height: 330px;
  padding: 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  border: 2px dashed rgba(150, 150, 150, 0.5);
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

  .imageSelected {
    color: rgb(36, 156, 20);
    font-weight: bold;
  }
`;

export const SelectImageButton = styled.button`
  background-color: #0f172a;
  padding: 0.75rem;
  color: white;
  border-radius: 5px;
  border: none;
  font-size: 0.8rem;
  font-weight: 700;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background-color: rgba(15, 23, 42, 0.85);
  }
`;
