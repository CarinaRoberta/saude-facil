import React from "react";
import { Container } from "./style";
import logoImage from "../../../assets/logo.jpg";
import Button from "../../../components/Button";
import { Link } from "react-router-dom";
import SignUp from "../SignUp";

const Login: React.FC = () => {
  return (
    <Container>
      <img src={logoImage} alt="Saúde Fácil" />
      <h1>Faça seu login</h1>
      <form>
        <h3>E-mail</h3>
        <input type="email" />
        <h3>Senha</h3>
        <input type="password" />
        <Button>Entrar</Button>
        <Link to="/cadastro">Cadastre-se</Link>
      </form>
    </Container>
  );
};

export default Login;
