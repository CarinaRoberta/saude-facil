import React, { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import { Container, Content, Test } from "./styles";

interface ModalProps {
  modal?: boolean;
  toggle(): void;
  handleSend(): void;
}

const ModalTask: React.FC<ModalProps> = ({ modal, toggle }) => {
  const { handleSend, handleChangeInput, handleChangeTextArea } =
    useContext(TaskContext);

  return (
    <>
      <Container>
        <Content>
          <form>
            <h1>Adicione um compromisso</h1>
            <h3>Nome do compromisso</h3>
            <input id="title" onChange={handleChangeInput}></input>
            <h3>Descrição</h3>
            <textarea
              id="description"
              onChange={handleChangeTextArea}
            ></textarea>
          </form>
          <div className="buttons">
            <button type="submit" onClick={handleSend}>
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
