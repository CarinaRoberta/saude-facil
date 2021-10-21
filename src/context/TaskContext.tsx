import React, { createContext, ReactNode, useState } from "react";

type Task = {
  title: string;
  description: string;
};

type TaskData = {
  title: string;
  description: string;
  handleSend: () => void;
  tarefas: Task | null;
  handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeTextArea: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export const TaskContext = createContext({} as TaskData);

type TaskProvider = {
  children: ReactNode;
};

export function TaskProvider(props: TaskProvider) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tarefas, setTarefas] = useState<Task | null>(null);

  function handleChangeInput(e: React.ChangeEvent<HTMLInputElement>): void {
    switch (e.target.id) {
      case "title":
        setTitle(e.target.value);
        break;
    }
  }

  function handleChangeTextArea(
    e: React.ChangeEvent<HTMLTextAreaElement>
  ): void {
    switch (e.target.id) {
      case "description":
        setDescription(e.target.value);
        break;
    }
  }

  function handleSend() {
    setTitle(title);
    setDescription(description);
    const data = {
      title: title,
      description: description,
    };
    setTarefas(data);
    console.log(tarefas);
  }

  return (
    <TaskContext.Provider
      value={{
        title,
        description,
        handleSend,
        tarefas,
        handleChangeInput,
        handleChangeTextArea,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
