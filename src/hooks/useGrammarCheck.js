import { useState, useEffect } from "react";
import { checkGrammar } from "../services/grammerService";

function useGrammarCheck(text) {
  const [incorrectTokens, setIncorrectTokens] = useState([]);

  useEffect(() => {
    async function handleCheckGrammar() {
      if (!text.trim()) {
        setIncorrectTokens([]);
        return;
      }

      try {
        const res = await checkGrammar(text);
        if (res.success) {
          setIncorrectTokens(res.data.incorrectTokens || []);
        }
      } catch (error) {
        console.error("Error checking grammar:", error);
      }
    }

    handleCheckGrammar();
  }, [text]);

  return incorrectTokens;
}

export default useGrammarCheck;
