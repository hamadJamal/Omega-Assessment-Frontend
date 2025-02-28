import React, { useState } from "react";
import { Container, TextField, Typography } from "@mui/material";
import HighlightedText from "../components/HighlightedText";
import useDebounce from "../hooks/useDebounce";
import useGrammarCheck from "../hooks/useGrammarCheck";
import Navbar from "../components/Navbar";

export default function GrammarPage() {
  const [inputText, setInputText] = useState("");
  const debouncedText = useDebounce(inputText, 750);
  const incorrectTokens = useGrammarCheck(debouncedText);

  return (
    <>
      <Navbar />
      <Container maxWidth="md" sx={{ mt: 14 }}>
        <Typography variant="h5" gutterBottom>
          Live Preview (Misspelled words in red):
        </Typography>
        <HighlightedText text={inputText} incorrectTokens={incorrectTokens} />
        <TextField label="Enter text" multiline rows={6} fullWidth value={inputText} onChange={(e) => setInputText(e.target.value)} sx={{ mt: 4 }} />
      </Container>
    </>
  );
}
