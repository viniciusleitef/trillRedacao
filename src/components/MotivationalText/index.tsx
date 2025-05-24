import type { Dispatch, SetStateAction } from "react";
import { MotivationalTextContainer } from "./styles";
import { IoBookOutline } from "react-icons/io5";

interface MotivationalTextProps {
  motivationalText: string;
  setMotivationalText: Dispatch<SetStateAction<string>>;
}

export function MotivationalText({
  motivationalText,
  setMotivationalText,
}: MotivationalTextProps) {
  return (
    <MotivationalTextContainer>
      <header>
        <IoBookOutline size={17} />
        <h1>Texto Motivador</h1>
      </header>

      <p>Cole aqui os textos motivadores fornecidos na prova (opcional):</p>

      <textarea
        placeholder="Ex: Segundo dados do IBGE, a educação brasileira passou por transformações significativas nas últimas décadas..."
        onChange={(e) => setMotivationalText(e.target.value)}
        value={motivationalText}
      />

      <p>
        Estes textos ajudam na análise da competência de repertório
        sociocultural
      </p>
    </MotivationalTextContainer>
  );
}
