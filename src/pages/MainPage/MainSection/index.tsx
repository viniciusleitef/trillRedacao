import {
  MainSectionWrapper,
  MainSectionContainer,
  UploadContainer,
  ButtonsBox,
  UploadBox,
  TranscribedTextContainer,
  ProcessBtn,
  WriteBox,
  SelectImageButton,
  WriteWordContainer,
  ShowImageContainer,
  ResultContainer,
  Result,
  BarProgression,
} from "./styles";

import { useState } from "react";
import { CiImageOn } from "react-icons/ci";
import { CiTextAlignCenter } from "react-icons/ci";
import { sendImage, correctEssay } from "../../../api/api";
import type { CorrecaoRedacao } from "../../../types";

type BtnSelectedState = "upload" | "write";

export function MainSection() {
  const [btnSelected, setBtnSelected] = useState<BtnSelectedState>("upload");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [correcao, setCorrecao] = useState<CorrecaoRedacao | null>(null);
  const [showTranscribedText, setShowTranscribedText] = useState(false);
  const [ocrText, setOcrText] = useState("");
  const [writtenEssay, setWrittenEssay] = useState("");

  // Arrastar imagem
  function handleDragOver(e: React.DragEvent) {
    e.preventDefault();
    setDragActive(true);
  }

  function handleDragLeave() {
    setDragActive(false);
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    setDragActive(false);

    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      setImageFile(file);
      console.log("Imagem recebida:", file);
    } else {
      alert("Por favor, envie apenas arquivos de imagem.");
    }
  }

  // Arrastar imagem

  function handleSelectImage(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      setImageFile(file);
      console.log("Imagem selecionada:", file);
    }
  }

  async function handleSendText() {
    const data = await correctEssay(writtenEssay);
    console.log(data);
    setCorrecao(data);
    setImageFile(null);
    setCorrecao(data);
    setOcrText("")
    setShowTranscribedText(false);
  }

  async function handleSendImage() {
    console.log("Enviando imagem:");
    if (imageFile) {
      console.log('enviando agora');
      const data = await sendImage(imageFile);
      console.log('Texto chegou')
      console.log(data.essay_text);
      setOcrText(data.essay_text);
      setShowTranscribedText(true);
    }
  }

  async function handleCorrectEssay() {
    if (imageFile) {
      const data = await correctEssay(ocrText);
      console.log(data);
      setCorrecao(data);
    }
  }

  return (
    <MainSectionWrapper>
      <MainSectionContainer>
        <UploadContainer>
          <ButtonsBox btnSelected={btnSelected}>
            <p className="upload" onClick={() => setBtnSelected("upload")}>
              Upload de Imagem
            </p>
            <p className="write" onClick={() => setBtnSelected("write")}>
              Digitar Texto
            </p>
          </ButtonsBox>

          {btnSelected == "write" ? (
            <WriteBox>
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

              <button onClick={handleSendText}>Enviar para a correção</button>
            </WriteBox>
          ) : (
            <UploadBox
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={dragActive ? "drag-active" : ""}
            >
              <CiImageOn className="icon" size={50} />
              <h3>Arraste e solte a imagem da redação aqui</h3>
              <p>ou clique para selecionar do seu dispositivo</p>

              <label htmlFor="fileInput">
                <SelectImageButton as="span">
                  Selecionar Imagem
                </SelectImageButton>
              </label>
              <input
                id="fileInput"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleSelectImage}
              />
              {imageFile && (
                <p className="imageSelected">
                  Imagem selecionada: {imageFile.name}
                </p>
              )}

              <p>Formatos suportados: JPG, PNG, GIF</p>
            </UploadBox>
          )}
          {showTranscribedText && btnSelected == "upload" && (
            <TranscribedTextContainer>
              <h2>Texto Transcrito</h2>
              <p>{ocrText}</p>

              <button onClick={handleCorrectEssay}>Corrigir Redação</button>
            </TranscribedTextContainer>
          )}

          {imageFile && !showTranscribedText && btnSelected == "upload" && (
            <ProcessBtn onClick={handleSendImage}>Processar Imagem</ProcessBtn>
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

        <ResultContainer>
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
        </ResultContainer>
      </MainSectionContainer>
    </MainSectionWrapper>
  );
}
