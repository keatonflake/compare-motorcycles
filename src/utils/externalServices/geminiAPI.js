import { GoogleGenerativeAI } from "@google/generative-ai";
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function dataSummary(prompt) {
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = await response.text();
  return text;
}
