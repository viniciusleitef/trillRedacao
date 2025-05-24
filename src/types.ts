export type CorrecaoRedacao = {
  nota_final: number;
  competencias: {
    competencia_1: number;
    competencia_2: number;
    competencia_3: number;
    competencia_4: number;
    competencia_5: number;
  };
  comentarios: {
    competencia_1: string;
    competencia_2: string;
    competencia_3: string;
    competencia_4: string;
    competencia_5: string;
  };
};

export type CorrectEssayRequest = {
  essay_text: string;
  essay_theme: string;
  essay_motivational_text?: string | null;
};
