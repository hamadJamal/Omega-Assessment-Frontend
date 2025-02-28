// src/components/HighlightedText.js
import React from "react";
import { Typography } from "@mui/material";

export default function HighlightedText({ text, incorrectTokens }) {
  if (!text.trim()) {
    return <Typography>No text preview</Typography>;
  }
  const words = text.split(/\s+/);

  return (
    <Typography>
      {words.map((word, i) => {
        const isIncorrect = incorrectTokens.some((t) => t.index === i);
        const style = isIncorrect ? { color: "red", fontWeight: "bold" } : {};

        return (
          <span key={i} style={style}>
            {word + " "}
          </span>
        );
      })}
    </Typography>
  );
}
