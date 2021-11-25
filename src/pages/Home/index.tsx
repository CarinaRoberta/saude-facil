import React, { useState } from "react";
import { Container } from "./style";
import { GiHamburgerMenu, GiMedicines, GiMicroscope } from "react-icons/gi";
import { GrEmergency } from "react-icons/gr";
import { FaNotesMedical } from "react-icons/fa";
import ToDoList from "./components/ModalTaskList";
import MedicineSection from "./components/MedicineSection";
import { Header } from "../../components/SideBar/style";
import SideBar from "../../components/SideBar";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <Header>
        <GiHamburgerMenu onClick={() => setShowNav(!showNav)} />
      </Header>
      <SideBar children={showNav} />
      <Container>
        <h1>Bem vindo, Luis</h1>
        <h2>O que deseja consultar?</h2>

        <div className="categories-content">
          <Link to="/exames">
            <div className="categories">
              <div className="categories-item">
                <GiMicroscope />
                <p>Exames</p>
              </div>
            </div>
          </Link>
          <a href="/">
            <div className="categories">
              <div className="categories-item">
                <GrEmergency />
                <p>Emergência</p>
              </div>
            </div>
          </a>
          <a href="#medicine">
            <div className="categories">
              <div className="categories-item">
                <GiMedicines />
                <p>Medicamentos</p>
              </div>
            </div>
          </a>
          <Link to="/consultas">
            <div className="categories">
              <div className="categories-item">
                <FaNotesMedical />
                <p>Consultas</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="appointment">
          <h2>Seus compromissos</h2>
          <ToDoList />
        </div>
        <span id="#medicine">
          <MedicineSection />
        </span>
      </Container>
    </>
  );
};

export default Home;
