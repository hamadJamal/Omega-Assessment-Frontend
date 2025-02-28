import api from "./apiService";

export async function checkGrammar(text) {
  try {
    const response = await api.post("/grammar/check", { text });
    return response.data;
  } catch (error) {
    console.error("Error checking grammar:", error);
    throw error;
  }
}
