import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Verifica se as senhas coincidem
    if (password !== confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }

    // Armazena os dados de cadastro no localStorage
    const userData = { name, email, password };
    localStorage.setItem("userData", JSON.stringify(userData));

    alert("Cadastro realizado com sucesso!");
    navigate("/Login"); // Redireciona para a página de login após o cadastro
  };

  return (
    <div className="container">
      <div className="register-box">
        <h2 className="title">Cadastro</h2>
        <form className="form1" onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Nome</label>
            <input
              type="text"
              className="input"
              placeholder="Digite seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>E-mail</label>
            <input
            className="input"
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Senha</label>
            <input
             className="input"
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Confirmar Senha</label>
            <input
             className="input"
              type="password"
              placeholder="Confirme sua senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn_register">Cadastrar</button>
          <p className="p">Já tem uma conta? <a href="./Login">Entrar</a></p>
        </form>
      </div>
    </div>
  );
}

export default Register;
