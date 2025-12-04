import { GoogleGenAI } from "@google/genai";
import { KNOWLEDGE_BASE } from '../constants';

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const sendMessageToGemini = async (userMessage: string): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    
    const response = await ai.models.generateContent({
      model: model,
      contents: userMessage,
      config: {
        systemInstruction: `Você é um assistente virtual útil e profissional da empresa TRUST NETWORK LDA. 
        Use APENAS as informações abaixo para responder às perguntas dos clientes. 
        Se a resposta não estiver no texto, peça para entrarem em contato diretamente pelo endereço em Maputo.
        Seja conciso e cordial.
        
        INFORMAÇÕES DA EMPRESA:
        ${KNOWLEDGE_BASE}`,
      },
    });

    return response.text || "Desculpe, não consegui processar sua solicitação no momento.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "Desculpe, estamos enfrentando problemas técnicos momentâneos. Por favor, tente novamente mais tarde.";
  }
};