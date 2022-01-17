import React, { FormEvent, useState } from "react";
import { Container } from "./style";
import logoImage from "../../../assets/logo.jpg";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!email) {
      toast.error("Preencha o campo e-mail");
      setEmailError("Preencha o campo e-mail");
    }
    if (!password) {
      toast.error("Preencha o campo senha");
      setPasswordError("Preencha o campo senha");
    }
    if (email && password) {
      try {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <Container>
      <img src={logoImage} alt="Saúde Fácil" />
      <h1>Faça seu login</h1>
      <form onSubmit={handleSubmit}>
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
          <button>Entrar</button>
        ) : (
          <span>Preencha os campos acima</span>
        )}
        <Link to="/cadastro">Cadastre-se</Link>
      </form>
    </Container>
  );
};

export default Login;
