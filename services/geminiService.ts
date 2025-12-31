
import { GoogleGenAI } from "@google/genai";
import { PUBLICATIONS, PROFESSOR_INFO } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const askAboutResearch = async (question: string) => {
  const context = `
    You are a research assistant for Professor ${PROFESSOR_INFO.name}'s research group at ${PROFESSOR_INFO.university}.
    Information about the professor: ${PROFESSOR_INFO.bio}
    Recent Publications: ${PUBLICATIONS.slice(0, 5).map(p => p.title).join(", ")}
    Research Directions: ${PROFESSOR_INFO.researchSummary}
    
    Answer the following question from a visitor to our website based on this context. 
    Be professional, concise, and academic.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        { text: context },
        { text: `Question: ${question}` }
      ],
      config: {
        temperature: 0.7,
        topP: 0.95,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having trouble accessing my research database right now. Please try again later.";
  }
};
