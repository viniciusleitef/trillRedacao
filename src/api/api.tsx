import axiosInstance from "./axiosInstance";

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

export const correctEssay = async (text: string) => {
  try {
    const response = await axiosInstance.post("/correct-essay", {
      text: text,
    });

    return response.data;
  } catch (error) {
    console.error("Erro ao corrigir redação:", error);
    throw error;
  }
}
