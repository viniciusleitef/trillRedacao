import styled from "styled-components";

type BarProgressionProps = {
  grade: number;
};

export const ResultSectionContainer = styled.div`
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
  .feedbackGeral {
    font-size: .9rem;
    margin: 1.5rem 0;
    max-height: 25rem;
    overflow-y: auto;
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
    max-height: 8rem;
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
