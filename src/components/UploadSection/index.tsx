import { UploadSectionContainer, SelectImageButton } from "./styles";
import { CiImageOn } from "react-icons/ci";

import { useState } from "react";

interface UploadSectionProps {
    imageFile: File | null; 
    setImageFile: React.Dispatch<React.SetStateAction<File | null>>;
    setShowTranscribedText: React.Dispatch<React.SetStateAction<boolean>>;
  }

export function UploadSection({imageFile, setImageFile, setShowTranscribedText}:UploadSectionProps) {
  const [dragActive, setDragActive] = useState(false);
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

  function handleSelectImage(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      setImageFile(file);
      console.log("Imagem selecionada:", file);
      setShowTranscribedText(false);
    }
  }
  return (
    <UploadSectionContainer
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={dragActive ? "drag-active" : ""}
    >
      <CiImageOn className="icon" size={50} />
      <h3>Arraste e solte a imagem da redação aqui</h3>
      <p>ou clique para selecionar do seu dispositivo</p>

      <label htmlFor="fileInput">
        <SelectImageButton as="span">Selecionar Imagem</SelectImageButton>
      </label>
      <input
        id="fileInput"
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleSelectImage}
      />
      {imageFile && (
        <p className="imageSelected">Imagem selecionada: {imageFile.name}</p>
      )}

      <p>Formatos suportados: JPG, PNG, GIF</p>
    </UploadSectionContainer>
  );
}
