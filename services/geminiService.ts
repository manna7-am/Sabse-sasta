import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { PRODUCTS, BUY_LINK } from '../constants';

let chatSession: Chat | null = null;

const getSystemInstruction = () => {
  const productContext = PRODUCTS.map(p => 
    `- ${p.name} (ID: ${p.id}): ₹${p.price} (${p.category}) - ${p.shortDescription}`
  ).join('\n');

  return `You are a friendly and helpful AI sales assistant for "MYMT Shop", an Indian e-commerce store. 
  
  Your goal is to help customers find products and encourage them to buy.
  
  Key Guidelines:
  1. Language: Use a natural mix of English and simple Hindi (Hinglish) to sound relatable to Indian customers. (e.g., "Yeh product best hai", "Bahut badhiya quality").
  2. Tone: Professional, enthusiastic, and polite (Desi polite).
  3. Knowledge: You have access to the following product list:\n${productContext}
  4. Actions:
     - If a user asks for recommendations, suggest products from the list.
     - If a user wants to buy, guide them to click the "Buy Now" button which links to: ${BUY_LINK}.
     - Answer general queries about shipping (Fast shipping across India) and returns (Easy 7-day returns).
  5. Short Answers: Keep responses concise and easy to read on mobile.
  
  Never invent products not in the list. If asked about something we don't have, politely apologize and suggest an alternative.`;
};

export const initChatSession = async (): Promise<Chat> => {
  // We use a fresh client for each init to ensure key is current if it changes
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: getSystemInstruction(),
    },
  });
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!process.env.API_KEY) {
    return "Chat feature is currently unavailable. Please contact us via WhatsApp.";
  }

  try {
    if (!chatSession) {
      await initChatSession();
    }
    
    if (!chatSession) {
      throw new Error("Failed to initialize chat session");
    }

    const response: GenerateContentResponse = await chatSession.sendMessage({ message });
    return response.text || "Sorry, main samajh nahi paya. Please try again.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Kuch technical issue hai. Thodi der baad try karein.";
  }
};