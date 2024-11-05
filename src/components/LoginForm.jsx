import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const requestBody = { email, password };
      const response = await axios.post(
        "http://127.0.0.1:8000/api/login",
        requestBody
      );
      localStorage.setItem("access_token", response.data.access_token);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <div className="container" style={{ marginTop: "10vh" }}>
        <form onSubmit={handleLogin}>
          <h2>Formulaire de connexion</h2>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Adresse email :
            </label>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              className="form-control"
              id="email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Mot de passe :
            </label>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              className="form-control"
              id="password"
            />
          </div>
          <button type="submit" className="">
            Se connecter
          </button>
          <p>
            Vous n'avez pas de compte ?
            <Link to={"/register"}>Crée un compte</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
