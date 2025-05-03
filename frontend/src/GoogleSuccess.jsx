// src/GoogleSuccess.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function GoogleSuccess() {
  const navigate = useNavigate();
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    if (token) {
      // store on the React app’s origin
      localStorage.setItem("token", token);
      // now you can navigate home
      navigate("/Home");
    } else {
      console.error("No token in URL");
    }
  }, [navigate]);

  return <p>Signing you in…</p>;
}
