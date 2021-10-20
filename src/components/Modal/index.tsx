import React, { useState, FormEvent } from "react";
import { Container, Content, Test } from "./styles";

export interface Tasks {
  name: string;
  description: string;
}

interface ModalProps {
  modal?: boolean;
  toggle(): void;
  handleSend(): void;
}

const ModalTask: React.FC<ModalProps> = ({ modal, toggle, handleSend }) => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [tarefas, setTarefas] = useState<Tasks[]>([]);

  /*const handleSend = () => {
    setTask(task);
    setDescription(description);
    const data: Tasks = {
      name: task,
      description: description,
    };
  };*/

  return (
    <>
      <Container>
        <Content>
          <form>
            <h1>Adicione um compromisso</h1>
            <h3>Nome do compromisso</h3>
            <input id="name" onChange={(e) => setTask(e.target.value)}></input>
            <h3>Descrição</h3>
            <textarea
              id="description"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </form>
          <div className="buttons">
            <button onClick={handleSend} type="submit">
              Adicionar
            </button>
            <button onClick={toggle}>Cancelar</button>
          </div>
        </Content>
      </Container>
    </>
  );
};

export default ModalTask;
