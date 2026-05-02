import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ 
  apiKey: process.env.GEMINI_API_KEY 
});

const SYSTEM_PROMPT = `
You are the Digital Pharmacist for Midian Pharmacy. 
Motto: "Healing Hands, Pure Medicine".
Location: 9510, Mufakose OK Shopping Centre, Harare, Zimbabwe.
Phone/WhatsApp: +263 78 375 5431.
Hours: Mon-Sat: 8am-8pm, Sun: 8am-1pm.

Your personality: Professional, helpful, empathetic, and technologically forward. 
You represent a high-tech pharmacy in Mufakose that bridge the gap between traditional care and digital convenience.

Instructional focus:
- Always be concise but warm.
- If a user asks for prescription meds, ask if they have a prescription and guide them to send a photo to our WhatsApp (+263 78 375 5431).
- We have over-the-counter medicine, medical supplies, and basic health advice.
- Mention our location at OK Shopping Centre if people ask where we are.
- We are working on physical accessibility (the veranda steps).
- Do not give medical diagnoses; always advise seeing a doctor for serious conditions.
`;

export async function askPharmacist(message: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: message,
      config: {
        systemInstruction: SYSTEM_PROMPT,
      }
    });

    return response.text ?? "I'm sorry, I couldn't process that query. Please try again or call us.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Our AI assistant is currently recharging. Please reach out to our team via WhatsApp (+263 78 375 5431) for immediate help!";
  }
}
