import styled from "styled-components";

type ButtonsBoxProps = {
  btnSelected: "upload" | "write";
};

export const MainSectionWrapper = styled.section`
  padding-bottom: 2rem;
`;

export const MainSectionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;

  @media (max-width: 1110px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
  }

  @media (max-width: 450px) {
    padding: 0;
  }
`;

export const UploadContainer = styled.div`
  width: 50%;
  padding: 0 2rem;
  color: black;

  @media (max-width: 1110px) {
    width: 100%;
  }

    @media (max-width: 450px) {
    padding: 0 .5rem;
  }
`;

export const ButtonsBox = styled.div<ButtonsBoxProps>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f1f5f9;
  margin-bottom: 2rem;

  height: 2.75rem;

  p {
    cursor: pointer;
    width: 50%;
    font-size: 0.8rem;
    height: 80%;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .upload {
    width: 50%;
    background-color: ${(props) =>
      props.btnSelected === "upload" ? "white" : "transparent"};
    margin-left: 0.25rem;
  }

  .write {
    width: 50%;
    background-color: ${(props) =>
      props.btnSelected === "write" ? "white" : "transparent"};
    margin-right: 0.25rem;
  }
`;

export const TranscribedTextContainer = styled.div`
  width: 100%;
  height: 450px;
  background-color: white;
  margin: 1rem 0;
  border-radius: 4px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  padding: 2rem;

  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  h2 {
    width: 100%;
    text-align: left;
  }
  p {
    overflow-y: auto;
    font-size: 0.9rem;
  }
  button {
    background-color: #0f172a;
    border: none;
    border-radius: 4px;
    color: white;
    padding: 1rem;
    margin-left: auto;
    margin-top: auto;
    cursor: pointer;
  }
`;

export const ProcessBtn = styled.button`
  width: 100%;
  padding: 0.8rem;
  margin: 1rem 0;
  border: none;
  background-color: #0f172a;
  border-radius: 6px;
  color: white;
  font-size: 0.9rem;
  font-weight: bold;
  cursor: pointer;
`;

export const WriteWordContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;

  width: 100%;

  input {
    width: 100%;
    padding: 0.5rem;
    border-radius: 4px;
    font-size: 0.78rem;

    &:disabled {
      background-color: white;
      cursor: not-allowed;
    }
  }

  button {
    padding: 0.5rem 1rem;
    border: none;
    background-color: #818892;
    border-radius: 4px;
    color: white;
    font-size: 0.9rem;

    &:disabled {
      cursor: not-allowed;
    }
  }
`;

export const ShowImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  min-height: 300px;
  max-height: 900px;
  padding: .5rem;

  border: 1px dashed rgba(150, 150, 150, 0.5);
  border-radius: 8px;
  text-align: center;

  p {
    font-size: 0.85rem;
    color: grey;
  }

  img {
    max-width: 100%;
    max-height: 900px;
    object-fit: contain;
  }
`;
