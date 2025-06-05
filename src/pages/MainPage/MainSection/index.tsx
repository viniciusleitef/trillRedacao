import {
  MainSectionWrapper,
  MainSectionContainer,
  UploadContainer,
  ButtonsBox,
  //TranscribedTextContainer,
  ProcessBtn,
  WriteWordContainer,
  ShowImageContainer,
} from "./styles";

import { useState, useEffect } from "react";
import { correctEssay, correctEssayWithText } from "../../../api/api";

import type { CorrecaoRedacao } from "../../../types";
import type { CorrectEssayRequest } from "../../../types";

import { EssayTheme } from "../../../components/Essaytheme";
//import { MotivationalText } from "../../../components/MotivationalText";
import { UploadSection } from "../../../components/UploadSection";
import { WriteBoxSection } from "../../../components/WriteBoxSection";
import { ResultSection } from "../../../components/ResultSection";
import { PopUp } from "../../../components/PopUp";
import { Loading } from "../../../components/Loading";

type BtnSelectedState = "upload" | "write";

export function MainSection() {
  const [btnSelected, setBtnSelected] = useState<BtnSelectedState>("upload");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [correcao, setCorrecao] = useState<CorrecaoRedacao | null>(null);
  const [showTranscribedText, setShowTranscribedText] = useState(false);
  const [writtenEssay, setWrittenEssay] = useState("");
  const [essayTheme, setEssayTheme] = useState("");
  const [motivationalText, setMotivationalText] = useState("");
  const [loading, setLoading] = useState(false);
  const [popUpData, setPopUpData] = useState({
    text: "",
    backgroundColor: "",
  });

  useEffect(() => {
    if (popUpData.text) {
      setMotivationalText('') //REMOVER ISSO DEPOIS
      const timer = setTimeout(() => {
        setPopUpData({
          text: "",
          backgroundColor: "",
        });
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [popUpData.text]);

  async function handleCorrectEssayWithText() {
    if (!isEssayThemeFilled()) {
      setPopUpData({
        text: "Por favor, preencha o tema da redação.",
        backgroundColor: "#ef4444",
      });
      return;
    }

    const requestData: CorrectEssayRequest = {
      essay_text: writtenEssay,
      essay_theme: essayTheme,
      essay_motivational_text: motivationalText,
    };

    console.log(requestData);
    setLoading(true);
    const data = await correctEssayWithText(requestData);
    setLoading(false);
    console.log(data);
    console.log(data.text);
    setPopUpData({
      text: "Redação corrigida com sucesso",
      backgroundColor: "#1bb520",
    });
    setCorrecao(data);
    setImageFile(null);
    setCorrecao(data);
    setShowTranscribedText(false);
  }

  async function handleCorrectEssayWithImage() {
    if (!isEssayThemeFilled()) {
      setPopUpData({
        text: "Por favor, preencha o tema da redação.",
        backgroundColor: "#ef4444",
      });
      return;
    }

    if (imageFile) {
      setLoading(true);

      try {
        const data = await correctEssay(
          essayTheme,
          motivationalText,
          imageFile
        );
        setLoading(false);

        setPopUpData({
          text: "Redação corrigida com sucesso",
          backgroundColor: "#1bb520",
        });

        console.log(data);
        console.log(data.text);
        setCorrecao(data);
      } catch (error: unknown) {
        console.log(error);
        setLoading(false);
        setPopUpData({
          text: "Erro ao corrigir a redação",
          backgroundColor: "#ef4444",
        });
      }
    }
  }

  function isEssayThemeFilled() {
    if (!essayTheme || essayTheme.trim() === "") {
      return false;
    }
    return true;
  }

  return (
    <MainSectionWrapper>
      {popUpData.text}
      {popUpData.text && (
        <PopUp
          text={popUpData.text}
          backgroundColor={popUpData.backgroundColor}
        />
      )}
      <MainSectionContainer>
        <UploadContainer>
          <EssayTheme essayTheme={essayTheme} setEssayTheme={setEssayTheme} />
          {/*
            <MotivationalText
              motivationalText={motivationalText}
              setMotivationalText={setMotivationalText}
            />
            */
          }
          <ButtonsBox btnSelected={btnSelected}>
            <p className="upload" onClick={() => setBtnSelected("upload")}>
              Upload de Imagem
            </p>
            <p className="write" onClick={() => setBtnSelected("write")}>
              Digitar Texto
            </p>
          </ButtonsBox>

          {btnSelected == "write" ? (
            <WriteBoxSection
              handleSendText={handleCorrectEssayWithText}
              writtenEssay={writtenEssay}
              setWrittenEssay={setWrittenEssay}
              loading={loading}
            />
          ) : (
            <UploadSection
              imageFile={imageFile}
              setImageFile={setImageFile}
              setShowTranscribedText={setShowTranscribedText}
            />
          )}

          {imageFile && !showTranscribedText && btnSelected == "upload" && (
            <ProcessBtn onClick={handleCorrectEssayWithImage}>
              {loading ? <Loading /> : "Corrigir Redação"}
            </ProcessBtn>
          )}

          <WriteWordContainer>
            <input
              type="text"
              placeholder="Digite uma palavra ou frase para destacar na redação..."
              disabled
            />
            <button disabled>Destacar</button>
          </WriteWordContainer>

          <ShowImageContainer>
            {imageFile ? (
              <img
                src={URL.createObjectURL(imageFile)}
                alt="Imagem da redação"
              />
            ) : (
              <p>Envie uma imagem da redação para visualizá-la aqui.</p>
            )}
          </ShowImageContainer>
        </UploadContainer>

        <ResultSection correcao={correcao} setCorrecao={setCorrecao} />
      </MainSectionContainer>
    </MainSectionWrapper>
  );
}
