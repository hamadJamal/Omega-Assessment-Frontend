import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Grammar App
        </Typography>
        <Button color="inherit" href="/grammar">
          Grammar Check
        </Button>
        <Button color="inherit" href="/logout">
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}
