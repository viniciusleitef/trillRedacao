import type { Dispatch, SetStateAction } from "react";
import { EssayThemeContainer } from "./styles";
import { FaRegFileAlt } from "react-icons/fa";

interface EssayThemeProps {
  essayTheme: string;
  setEssayTheme: Dispatch<SetStateAction<string>>;
}

export function EssayTheme({ essayTheme, setEssayTheme }: EssayThemeProps) {
  return (
    <EssayThemeContainer>
      <header>
        <FaRegFileAlt size={17} />
        <h1>Tema da Redação</h1>
      </header>

      <p>Digite o tema proposto para a redação:</p>

      <input
        type="text"
        placeholder="Ex: A importância da educação na formação do cidadão"
        onChange={(e) => setEssayTheme(e.target.value)}
        value={essayTheme}
        required={true}
      />
    </EssayThemeContainer>
  );
}
