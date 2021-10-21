import React, { useContext, useState } from "react";
import ModalTask from "../../../components/Modal";
import { TaskContext } from "../../../context/TaskContext";

const ToDoList: React.FC = () => {
  const [modal, setModal] = useState(false);
  const { tarefas } = useContext(TaskContext);

  const toggle = () => {
    setModal(!modal);
  };

  const handleTask = () => {};

  return (
    <div>
      <h3>Seus compromissos</h3>
      <p>Adicione novos compromissos</p>
      <button onClick={toggle}>Criar compromisso</button>
      <div className="task-container"></div>
      {modal && <ModalTask toggle={toggle} handleSend={handleTask} />}
      <div>{tarefas?.title}</div>
    </div>
  );
};

export default ToDoList;
