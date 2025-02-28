import React, { useState } from "react";
import { Container, TextField, Typography } from "@mui/material";
import api from "../services/apiService";
import HighlightedText from "../components/HighlightedText";

export default function GrammarPage() {
  const [inputText, setInputText] = useState("");
  const [tokens, setTokens] = useState([]);

  const handleCheckGrammar = async (text) => {
    if (!text.trim()) {
      setTokens([]);
      return;
    }
    try {
      const response = await api.post("/grammar/check", { text });
      if (response.data.success) {
        setTokens(response.data.data.tokens);
      }
    } catch (err) {
      console.error("Error checking grammar:", err);
    }
  };

  const handleChange = (e) => {
    const text = e.target.value;
    setInputText(text);
    handleCheckGrammar(text);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Live Preview (Incorrect words in red):
      </Typography>
      <HighlightedText tokens={tokens} />

      <TextField label="Enter text" multiline rows={6} fullWidth variant="outlined" margin="normal" value={inputText} onChange={handleChange} />
    </Container>
  );
}
