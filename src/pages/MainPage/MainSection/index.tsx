import {
  MainSectionWrapper,
  MainSectionContainer,
  UploadContainer,
  ButtonsBox,
  TranscribedTextContainer,
  ProcessBtn,
  WriteWordContainer,
  ShowImageContainer,
} from "./styles";

import { useState, useEffect } from "react";
import { sendImage, correctEssay } from "../../../api/api";

import type { CorrecaoRedacao } from "../../../types";
import type { CorrectEssayRequest } from "../../../types";

import { EssayTheme } from "../../../components/Essaytheme";
import { MotivationalText } from "../../../components/MotivationalText";
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
  const [ocrText, setOcrText] = useState("");
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
      const timer = setTimeout(() => {
        setPopUpData({
          text: "",
          backgroundColor: "",
        });
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [popUpData.text]);

  async function handleSendText() {
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
    const data = await correctEssay(requestData);
    setLoading(false);
    console.log(data);
    setPopUpData({
      text: "Redação corrigida com sucesso",
      backgroundColor: "#1bb520",
    });
    setCorrecao(data);
    setImageFile(null);
    setCorrecao(data);
    setOcrText("");
    setShowTranscribedText(false);
  }

  async function handleSendImage() {
    console.log("Enviando imagem:");
    if (imageFile) {
      setLoading(true);
      try {
        const data = await sendImage(imageFile);
        console.log(data.essay_text);
        setPopUpData({
          text: "Texto processado com sucesso!",
          backgroundColor: "#1bb520",
        });
        setOcrText(data.essay_text);
        setShowTranscribedText(true);
      } catch (error: unknown) {
        console.error("Erro ao processar imagem:", error);
        const errorMessage =
          "Erro ao processar a imagem. Por favor, tente novamente.";

        setPopUpData({
          text: errorMessage,
          backgroundColor: "#b52b1b",
        });
      } finally {
        setLoading(false);
      }
    }
  }

  async function handleCorrectEssay() {
    if (!isEssayThemeFilled()) {
      setPopUpData({
        text: "Por favor, preencha o tema da redação.",
        backgroundColor: "#ef4444",
      });
      return;
    }

    if (imageFile) {
      const requestData: CorrectEssayRequest = {
        essay_text: ocrText,
        essay_theme: essayTheme,
        essay_motivational_text: motivationalText,
      };
      console.log(requestData);
      setLoading(true);
      const data = await correctEssay(requestData);
      setLoading(false);
      setPopUpData({
        text: "Redação corrigida com sucesso",
        backgroundColor: "#1bb520",
      });
      console.log(data);
      setCorrecao(data);
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
          <MotivationalText
            motivationalText={motivationalText}
            setMotivationalText={setMotivationalText}
          />
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
              handleSendText={handleSendText}
              writtenEssay={writtenEssay}
              setWrittenEssay={setWrittenEssay}
              loading={loading}
            />
          ) : (
            <UploadSection
              imageFile={imageFile}
              setImageFile={setImageFile}
              setShowTranscribedText={setShowTranscribedText}
              setOcrText={setOcrText}
            />
          )}
          {showTranscribedText && btnSelected == "upload" && (
            <TranscribedTextContainer>
              <h2>Texto Transcrito</h2>
              <p>{ocrText}</p>

              <button onClick={handleCorrectEssay}>
                {loading ? <Loading /> : "Corrigir Redação"}
              </button>
            </TranscribedTextContainer>
          )}

          {imageFile && !showTranscribedText && btnSelected == "upload" && (
            <ProcessBtn onClick={handleSendImage}>
              {loading ? <Loading /> : "Processar Imagem"}
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
