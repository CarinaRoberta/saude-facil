import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineSchedule } from "react-icons/ai";
import SideBar from "../../components/SideBar";
import { Header } from "../../components/SideBar/style";
import { Container, Appointments } from "./style";
import { IScheduled, schedule } from "./mock/ScheduledMock";

const ScheduledAppointment: React.FC = () => {
  const [showNav, setShowNav] = useState(false);
  const [scheduledList, setScheduledList] = useState<IScheduled[]>([]);

  useEffect(() => {
    if (schedule) setScheduledList(schedule);
  }, []);

  return (
    <>
      <Header>
        <GiHamburgerMenu onClick={() => setShowNav(!showNav)} />
      </Header>
      <SideBar children={showNav} />
      <Container>
        <h1>Consultas agendadas</h1>
        <h2>Veja aqui suas próximas consultas</h2>
        {scheduledList
          ? scheduledList.map((scheduled) => (
              <Appointments>
                <AiOutlineSchedule />
                <div>
                  <p>
                    <strong>Especialidade:</strong> {scheduled.especialidade}
                  </p>
                  <p>
                    <strong>Data:</strong> {scheduled.data}
                  </p>
                  <p>
                    <strong>Horário:</strong> {scheduled.horario}
                  </p>
                  <p>
                    <strong>Local:</strong> {scheduled.local}
                  </p>
                </div>
              </Appointments>
            ))
          : ""}
      </Container>
    </>
  );
};

export default ScheduledAppointment;
