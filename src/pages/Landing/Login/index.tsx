import React, { useState } from "react";
import { Container } from "./style";
import logoImage from "../../../assets/logo.jpg";
import { Link } from "react-router-dom";
import SignUp from "../SignUp";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <img src={logoImage} alt="Saúde Fácil" />
      <h1>Faça seu login</h1>
      <form>
        <h3>E-mail</h3>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="exemplo@exemplo.com"
        />
        <h3>Senha</h3>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {email && password ? (
          <Link to="/home">Entrar</Link>
        ) : (
          <span>Preencha os campos acima</span>
        )}
        <Link to="/cadastro">Cadastre-se</Link>
      </form>
    </Container>
  );
};

export default Login;
