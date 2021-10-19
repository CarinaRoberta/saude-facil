import React, { useState, FormEvent } from "react";
import { Container, Content } from "./styles";

export interface Tasks {
  name: string;
  description: string;
}

interface ModalProps {
  modal?: boolean;
  toggle(): void;
}

const ModalTask: React.FC<ModalProps> = ({ modal, toggle }) => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [tarefas, setTarefas] = useState<Tasks[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    switch (e.target.id) {
      case "name":
        setTask(e.target.value);
        break;
    }
  };

  const handleChangeTextArea = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    switch (e.target.id) {
      case "description":
        setDescription(e.target.value);
        break;
    }
  };

  const handleSend = () => {
    setTask(task);
    setDescription(description);
    const data: Tasks = {
      name: task,
      description: description,
    };

    setTarefas([...tarefas, data]);
  };

  return (
    <Container>
      <Content>
        <form>
          <h1>Adicione um compromisso</h1>
          <h3>Nome do compromisso</h3>
          <input id="name" value={task} onChange={handleChange}></input>
          <h3>Descrição</h3>
          <textarea
            id="description"
            value={description}
            onChange={handleChangeTextArea}
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
  );
};

export default ModalTask;
