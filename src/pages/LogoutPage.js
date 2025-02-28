import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";

export default function LogoutPage() {
  const { logout } = useContext(AuthContext);

  useEffect(() => {
    (async () => {
      await logout();
      window.location.href = "/login";
    })();
  }, [logout]);

  return <div>Logging out...</div>;
}
