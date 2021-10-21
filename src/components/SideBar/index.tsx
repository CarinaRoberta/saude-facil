import React from "react";
import { SideNav } from "./style";
import logoImage from "../../assets/logo.jpg";
import { Link } from "react-router-dom";

const SideBar: React.FC = ({ children }) => {
  return (
    <>
      <SideNav>
        <div className={children ? "sidenav active" : "sidenav"}>
          <a href="/">
            <img src={logoImage} alt="Saúde Fácil" className="logo" />
          </a>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/perfil">Perfil</Link>
            </li>
            <li>
              <Link to="/">Política de privacidade</Link>
            </li>
            <li>
              <Link to="/">Sobre</Link>
            </li>
            <li>
              <Link to="/">Sair</Link>
            </li>
          </ul>
        </div>
      </SideNav>
    </>
  );
};

export default SideBar;
