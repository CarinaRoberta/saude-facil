import React from "react";
import { Container } from "./style";
import logoImage from "../../../assets/logo.jpg";
import Button from "../../../components/Button";
import { Link } from "react-router-dom";

const SignUp: React.FC = () => {

    

  return (
    <Container>
      <img src={logoImage} alt="Saúde Fácil" />
      <h1>Cadastre-se</h1>
      <form>
        <h3>Nome completo</h3>
        <input type="text" />
        <h3>CPF</h3>
        <input type="text" />
        <h3>E-mail</h3>
        <input type="email" />
        <h3>Senha</h3>
        <input type="password" />
        <div className="buttons-container">
          <Button>Cadastrar</Button>
          <Link to="/">Cancelar</Link>
        </div>
      </form>
    </Container>
  );
};

export default SignUp;
