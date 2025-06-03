import axiosInstance from "./axiosInstance";
import type { CorrectEssayRequest } from "../types";

export const sendImage = async (imageFile: File) => {
  try {
    const formData = new FormData();
    formData.append("image", imageFile);

    const response = await axiosInstance.post("/upload-image", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Erro ao enviar imagem:", error);
    throw error;
  }
};

export const correctEssay = async (
  essay_theme: string,
  essay_motivational_text: string | null,
  imageFile: File
) => {
  const formData = new FormData();
  formData.append("essay_theme", essay_theme);
  formData.append("essay_motivational_text", essay_motivational_text || "");
  formData.append("file", imageFile);
  try {
    const response = await axiosInstance.post("/correct-essay", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao corrigir redação:", error);
    throw error;
  }
};

export const correctEssayWithText = async (request: CorrectEssayRequest) => {
  const formData = new FormData();
  formData.append("essay_text", request.essay_text);
  formData.append("essay_theme", request.essay_theme);
  formData.append("essay_motivational_text", request.essay_motivational_text || "");
  try {
    const response = await axiosInstance.post("/correct-essay", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao corrigir redação:", error);
    throw error;
  }
};
