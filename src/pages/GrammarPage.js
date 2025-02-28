// src/pages/GrammarPage.js
import React, { useState, useEffect } from "react";
import { Container, TextField, Typography } from "@mui/material";
import api from "../services/apiService"; // your axios instance
import HighlightedText from "../components/HighlightedText";
const useDebounce = require("../hooks/useDebounce");

export default function GrammarPage() {
  const [inputText, setInputText] = useState("");
  const [incorrectTokens, setIncorrectTokens] = useState([]);

  // Debounce so we don't spam the API
  const debouncedText = useDebounce(inputText, 750);

  useEffect(() => {
    async function handleCheckGrammar(text) {
      if (!text.trim()) {
        setIncorrectTokens([]);
        return;
      }
      try {
        const res = await api.post("/grammar/check", { text });
        if (res.data.success) {
          setIncorrectTokens(res.data.data.incorrectTokens || []);
        }
      } catch (err) {
        console.error("Error checking grammar:", err);
      }
    }
    handleCheckGrammar(debouncedText);
  }, [debouncedText]);

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Live Preview (Incorrect words in red):
      </Typography>
      <HighlightedText text={inputText} incorrectTokens={incorrectTokens} />
      <TextField label="Enter text" multiline rows={6} fullWidth value={inputText} onChange={(e) => setInputText(e.target.value)} />
    </Container>
  );
}
