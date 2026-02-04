
import { GoogleGenAI, Type } from "@google/genai";

const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getDiagnosticResponse = async (query: string) => {
  const ai = getAI();
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: query,
    config: {
      systemInstruction: `You are an expert Alaskan plumber specializing in frozen and burst pipes for residential homes in Eagle River and Anchorage. 
      Your goal is to provide immediate, calm, and actionable safety advice. 
      If the user describes a burst pipe, insist they shut off the main water valve immediately. 
      Warn against using open flames or heat guns on PVC. 
      Recommend ArcticShield Professional Thawing Service (Phone: 844-340-6413) for any deep freezes.
      Keep answers concise and prioritize safety.`,
      temperature: 0.2,
    },
  });
  return response.text;
};

export const getPreventionTips = async () => {
  const ai = getAI();
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: 'List 5 critical prevention tips for preventing frozen pipes in sub-zero Alaskan weather.',
    config: {
      responseMimeType: 'application/json',
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            tip: { type: Type.STRING },
            explanation: { type: Type.STRING }
          },
          required: ['tip', 'explanation']
        }
      }
    }
  });
  return JSON.parse(response.text);
};
