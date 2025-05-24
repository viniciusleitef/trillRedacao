import type { Dispatch, SetStateAction } from "react";
import { ResultSectionContainer, Result } from "./styles";
import { BarProgression } from "./styles";
import type { CorrecaoRedacao } from "../../types";

interface ResultSectionProps {
  correcao: CorrecaoRedacao | null
  setCorrecao: Dispatch<SetStateAction<CorrecaoRedacao | null>>
}

export function ResultSection({ correcao }: ResultSectionProps) {
  return (
    <ResultSectionContainer>
      {correcao ? (
        <Result>
          <div className="resultHeader">
            <h2>Resultado da Correção</h2>
            <p>
              {correcao.nota_final}
              <span>/1000</span>
            </p>
          </div>

          <h3 className="subTitle">Competências</h3>

          <div className="competenciasBox">
            {correcao.competencias &&
              Object.entries(correcao.competencias).map(([key, value]) => (
                <>
                  <div key={key} className="competencia">
                    <p>Competência {Number(key.replace(/\D/g, ""))}</p>
                    <p>{value}/200</p>
                  </div>
                  <div className="barBox">
                    <BarProgression grade={value}></BarProgression>
                  </div>
                </>
              ))}
          </div>

          <h3 className="subTitle">Comentários </h3>

          {correcao.comentarios &&
            Object.entries(correcao.comentarios).map(([key, value]) => (
              <div key={key} className="comentarioCompetencia">
                <h4>Competência {Number(key.replace(/\D/g, ""))}:</h4>
                <p>{value}</p>
              </div>
            ))}
        </Result>
      ) : (
        <div className="noDoc">
          <h2>Resultado da Correção</h2>
          <p>Envie uma imagem da redação para receber a correção.</p>
        </div>
      )}
    </ResultSectionContainer>
  );
}
