
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export async function generateBio(keywords: string): Promise<string> {
  const prompt = `
    Based on the following keywords, generate a professional and engaging developer profile bio in about 3-4 sentences. 
    The tone should be confident but approachable. Highlight the key technical skills and mention personal interests to make it more relatable.

    Keywords: "${keywords}"

    Generated Bio:
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    return response.text.trim();
  } catch (error) {
    console.error("Error generating content with Gemini API:", error);
    throw new Error("Failed to communicate with the Gemini API.");
  }
}
