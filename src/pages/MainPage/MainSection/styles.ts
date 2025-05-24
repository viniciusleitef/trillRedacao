import styled from "styled-components";

type UploadContainerProps = {
  btnSelected: "upload" | "write";
};

type BarProgressionProps = {
  grade: number;
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
`;

export const UploadContainer = styled.div`
  width: 50%;
  padding: 0 2rem;
  color: black;

  @media (max-width: 1110px) {
    width: 100%;
  }
`;

export const ButtonsBox = styled.div<UploadContainerProps>`
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

export const UploadBox = styled.div`
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

export const WriteBox = styled.div`
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

  border: 1px dashed rgba(150, 150, 150, 0.5);
  border-radius: 8px;

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

export const ResultContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45%;
  background-color: white;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  padding: 2rem;
  color: black;

  @media (max-width: 1110px) {
    width: 100%;
    margin: 2rem 0;
  }

  .noDoc {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    height: 100%;
    color: black;

    p {
      color: grey;
      font-size: 0.9rem;
    }
  }
`;

export const Result = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .resultHeader {
    width: 100%;
    display: flex;
    justify-content: space-between;

    h2 {
      font-size: 1.2rem;
      font-weight: 500;
    }

    p {
      font-size: 1.35rem;
      font-weight: bold;

      span {
        font-size: 1rem;
        font-weight: 600;
        color: #64748b;
      }
    }
  }

  .subTitle {
    width: 100%;
    text-align: start;
    font-size: 0.9rem;
    font-weight: 600;
    margin-top: 0.5rem;
  }

  .competenciasBox {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    margin: 1rem 0;

    .competencia {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 1rem;
      margin-bottom: 0.5rem;
    }

    .barBox {
      width: 100%;
      height: 0.5rem;
      background-color: #f1f5f9;
      border-radius: 8px;
    }
  }

  .comentarioCompetencia {
    background-color: #fcfdfe;
    margin: 1rem 0;
    font-size: 0.825rem;

    width: 100%;
    max-height: 6rem;
    text-align: start;
    overflow-y: auto;
    border-radius: 4px;

    p {
      width: 100%;
      height: 100%;
      white-space: pre-wrap;
      word-break: break-word;
    }
  }
`;

export const BarProgression = styled.div<BarProgressionProps>`
  width: ${(props) => (props.grade / 200) * 100}%;
  height: 100%;
  background-color: #0f172a;
  border-radius: inherit;
`;
