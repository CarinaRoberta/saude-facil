import React from "react";
import { Container } from "./style";
import { GiMedicines, GiMicroscope } from "react-icons/gi";
import { GrEmergency } from "react-icons/gr";
import { FaNotesMedical } from "react-icons/fa";
import ToDoList from "./components";

const Home: React.FC = () => {
  return (
    <Container>
      <h1>Bem vindo, Luis</h1>
      <h2>O que deseja consultar?</h2>

      <div className="categories-content">
        <a href="/">
          <div className="categories">
            <div className="categories-item">
              <GiMicroscope />
              <p>Exames</p>
            </div>
          </div>
        </a>
        <a href="/">
          <div className="categories">
            <div className="categories-item">
              <GrEmergency />
              <p>Emergência</p>
            </div>
          </div>
        </a>
        <a href="/">
          <div className="categories">
            <div className="categories-item">
              <GiMedicines />
              <p>Medicamentos</p>
            </div>
          </div>
        </a>
        <a href="/">
          <div className="categories">
            <div className="categories-item">
              <FaNotesMedical />
              <p>Consultas</p>
            </div>
          </div>
        </a>
      </div>
      <div className="appointment">
        <h2>Seus compromissos</h2>
        <ToDoList />
      </div>
    </Container>
  );
};

export default Home;
