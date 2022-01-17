import React, { FormEvent, useState } from "react";
import { Container } from "./style";
import logoImage from "../../../assets/logo.jpg";
import Button from "../../../components/Button";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { toast } from "react-toastify";
import maskCPF from "../../../helper/cpfMask";

const SignUp: React.FC = () => {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [nameError, setNameError] = useState("");
  const [cpfError, setCpfError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!name) {
      toast.error("Preencha o campo nome");
      setNameError("Preencha o campo nome");
      console.log("teste");
    }
    if (!cpf) {
      toast.error("Preencha o campo CPF");
      setCpfError("Preencha o campo CPF");
    }
    if (!email) {
      toast.error("Preencha o campo e-mail");
      setEmailError("Preencha o campo e-mail");
    }
    if (!password) {
      toast.error("Preencha o campo senha");
      setPasswordError("Preencha o campo senha");
    }

    if (name && cpf && email && password) {
      try {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
          .then(async (userCredential) => {
            const user = userCredential.user;
            const uuid = user.uid;
            try {
              const users = await addDoc(collection(db, "users"), {
                name: name,
                cpf: cpf,
                email: email,
                password: password,
                id: uuid,
              });
              console.log(users, "foi");
            } catch (error) {
              console.log(error, "aqui");
            }
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
      } catch (e) {
        toast.error("Erro ao cadastrar usuário");
      }
    }
  };

  return (
    <Container>
      <img src={logoImage} alt="Saúde Fácil" />
      <h1>Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <h3>Nome completo</h3>
        <input
          type="text"
          name="name"
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
        <h3>CPF</h3>
        <input
          type="text"
          name="cpf"
          value={cpf}
          onChange={({ target }) => setCpf(maskCPF(target.value))}
        />
        <h3>E-mail</h3>
        <input
          type="email"
          name="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        <h3>Senha</h3>
        <input
          type="password"
          name="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <div className="buttons-container">
          <Button>Cadastrar</Button>
          <Link to="/">Cancelar</Link>
        </div>
      </form>
    </Container>
  );
};

export default SignUp;
