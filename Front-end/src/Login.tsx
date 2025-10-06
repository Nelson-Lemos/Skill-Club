import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import hack from './assets/img/frances.webp';
import './index.css';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const storedUserData = JSON.parse(localStorage.getItem("userData") || "{}");

    if (email.trim() === storedUserData.email && password.trim() === storedUserData.password) {
      alert("Logado com sucesso!");
      navigate('/Dashboard');
    } else {
      alert("Email ou senha incorretos!");
    }
  };

  return (
    <div className="div_main">
      <div className="Div_img">
        <img src={hack} alt="Paisagem" className="img" />
      </div>
      <div className="div_form">
        <h1 className="title">Login</h1>
        <form className="formulario" onSubmit={handleSubmit}>
          <div>
            <label>Email</label>
            <input
              type="email"
              className="input"
              placeholder="Digite o seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              className="input"
              placeholder="Digite a sua password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn">Entrar</button>
          <p className="p">
            Ainda não tem uma conta? <Link to="/Cadastro">Criar</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
