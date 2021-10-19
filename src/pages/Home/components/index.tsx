import React, { useState } from "react";
import ModalTask, { Tasks } from "../../../components/Modal";


const ToDoList: React.FC = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

  const toggle = () => {
    setModal(!modal);
  };


  return (
    <div>
      <h3>Seus compromissos</h3>
      <p>Adicione novos compromissos</p>
      <button onClick={toggle}>Criar compromisso</button>
      <div className="task-container"></div>
      {modal && <ModalTask toggle={toggle} />}
    </div>
  );
};

export default ToDoList;
