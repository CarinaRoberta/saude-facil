import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoNote } from "react-icons/go";
import SideBar from "../../components/SideBar";
import { Header } from "../../components/SideBar/style";
import { IExam, exams } from "./mock/ExamMock";
import { Container, ExamContainer } from "./style";

type Props = {
  exam: IExam[];
};

const Exams: React.FC<Props> = ({ exam }) => {
  const [showNav, setShowNav] = useState(false);
  const [examsList, setExamsList] = useState<IExam[]>([]);

  useEffect(() => {
    if (exams) setExamsList(exams);
  }, []);

  return (
    <>
      <Header>
        <GiHamburgerMenu onClick={() => setShowNav(!showNav)} />
      </Header>
      <SideBar children={showNav} />
      <Container>
        <h1>Exames realizados</h1>
        <h2>Veja aqui seus últimos exames realizados</h2>
        {examsList
          ? examsList.map((examList) => (
              <ExamContainer>
                <div>
                  <GoNote />
                  <h3>{examList.titulo}</h3>
                </div>
                <p>Data da coleta: {examList.data}</p>
                <p>Horário: {examList.horario}</p>
                <p>Método: {examList.metodo}</p>
                {examList.info ? (
                  <ul className="infos">
                    <li>
                      <strong>Hemacias: </strong>
                      {examList.info.hemacias}
                    </li>
                    <li>
                      <strong>Hemoglobina:</strong> {examList.info.hemoglobina}
                    </li>
                    <li>
                      <strong>Hematocrito:</strong> {examList.info.hematocrito}
                    </li>
                    <li>
                      <strong>VCM:</strong> {examList.info.vcm}
                    </li>
                    <li>
                      <strong>HCM:</strong> {examList.info.hcm}
                    </li>
                    <li>
                      <strong>RDW:</strong> {examList.info.rdw}
                    </li>
                    <li>
                      <strong>Leucocitos:</strong> {examList.info.leucocitos}
                    </li>
                    <li>
                      <strong>Neutrofilos:</strong> {examList.info.neutrofilos}
                    </li>
                    <li>
                      <strong>Linfocitos: </strong>
                      {examList.info.linfocitos}
                    </li>
                    <li>
                      <strong>Monocitos:</strong> {examList.info.monocitos}
                    </li>
                    <li>
                      <strong>Eosinofilos:</strong> {examList.info.eosinofilos}
                    </li>
                    <li>
                      <strong>Basofilos:</strong> {examList.info.basofilos}
                    </li>
                    <li>
                      <strong>Plaquetas:</strong> {examList.info.plaquetas}
                    </li>
                  </ul>
                ) : (
                  ""
                )}
                <div className="notes">
                  {examList.interpretacao ? (
                    <p>
                      <strong>INTERPRETAÇÃO: </strong>
                      {examList.interpretacao}
                    </p>
                  ) : (
                    ""
                  )}
                  {examList.nota ? (
                    <p>
                      <strong>NOTA: </strong>
                      {examList.nota}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              </ExamContainer>
            ))
          : ""}
      </Container>
    </>
  );
};

export default Exams;
