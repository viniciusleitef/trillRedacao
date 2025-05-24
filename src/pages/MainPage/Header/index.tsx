import { HeaderContainer, ButtonHowWorks } from "./styles";
import { IoIosInformationCircleOutline } from "react-icons/io";

export const Header = () => {
  return (
    <HeaderContainer>
      <h1>Correção de Redações</h1>
      <p>
        Envie a imagem de uma redação ou digite seu texto para receber uma
        análise detalhada
      </p>
      <ButtonHowWorks>
        <IoIosInformationCircleOutline size={18} />
        Como funciona
      </ButtonHowWorks>
    </HeaderContainer>
  );
};
