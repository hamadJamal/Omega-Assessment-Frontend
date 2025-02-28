import React from "react";
import { Typography } from "@mui/material";

export default function HighlightedText({ tokens }) {
  if (!tokens || tokens.length === 0) {
    return <Typography variant="body1">No text preview</Typography>;
  }

  return (
    <Typography variant="body1">
      {tokens.map((item, idx) => {
        const style = item.isCorrect ? {} : { color: "red", fontWeight: "bold" };

        return (
          <span key={idx} style={style}>
            {item.token + " "}
          </span>
        );
      })}
    </Typography>
  );
}
