import React, { useState } from "react";
import { Container } from "./style";
import userImg from "../../assets/perfil.png";
import { Header } from "../../components/SideBar/style";
import { GiHamburgerMenu } from "react-icons/gi";
import SideBar from "../../components/SideBar";

const Profile: React.FC = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <Header>
        <GiHamburgerMenu onClick={() => setShowNav(!showNav)} />
      </Header>
      <SideBar children={showNav} />
      <Container>
        <h1>Perfil</h1>
        <h2>Informações Pessoais</h2>
        <div className="header-perfil">
          <img src={userImg} alt="User imagem" />
          <h3>Luis Lorem Ipsum</h3>
        </div>
        <div className="personal-info">
          <div>
            <h3>Nome completo</h3>
            <p>Luis Lorem Ipsum</p>
          </div>
          <div>
            <h3>Idade</h3>
            <p>45 anos</p>
          </div>
          <div>
            <h3>E-mail</h3>
            <p>luis@gmail.com</p>
          </div>
          <div>
            <h3>CPF</h3>
            <p>123.123.123-55</p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Profile;
