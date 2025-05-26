import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

export default function GoogleSuccess() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    if (token) {
      login(token); 
      navigate("/home");
    } else {
      console.error("No token in URL");
    }
  }, [navigate, login]);

  return <p>Signing you in…</p>;
}
