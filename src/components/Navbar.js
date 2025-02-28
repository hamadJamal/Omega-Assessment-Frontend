import React, { useContext } from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { logout } = useContext(AuthContext);
  return (
    <AppBar position="fixed" elevation={0}>
      <Toolbar sx={{ backgroundColor: "#2E3B55" }}>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Grammarly 2.0
        </Typography>
        <Button color="inherit" onClick={async () => await logout()}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}
