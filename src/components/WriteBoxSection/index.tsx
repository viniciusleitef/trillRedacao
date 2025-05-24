import { WriteBoxContainer } from "./styles";
import { CiTextAlignCenter } from "react-icons/ci";
import type { Dispatch, SetStateAction } from 'react';
import { Loading } from "../Loading";

interface WriteBoxProps {
    handleSendText: () => Promise<void>;
    writtenEssay: string;
    setWrittenEssay: Dispatch<SetStateAction<string>>;
    loading: boolean;
  }

export function WriteBoxSection({handleSendText, writtenEssay, setWrittenEssay, loading}: WriteBoxProps) {
    
  return (
    <WriteBoxContainer>
      <CiTextAlignCenter className="icon" size={50} />

      <h3>Digite sua redação completa</h3>
      <p>Ou utilize a opção de upload de imagem acima</p>

      <textarea
        name=""
        id=""
        placeholder="Digite aqui sua redação completa para análise..."
        value={writtenEssay}
        onChange={(e) => setWrittenEssay(e.target.value)}
      ></textarea>

      <button onClick={handleSendText}>{loading ? <Loading /> : "Enviar para a correção"}</button>
    </WriteBoxContainer>
  );
}
