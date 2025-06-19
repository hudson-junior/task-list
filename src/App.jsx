import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import { Container, TaskList, ListItem, Trash, Check } from "./styles";

const App = () => {
  const [list, setList] = useState([]);
  const [inputTask, setInputTask] = useState("");

  const changeInput = (event) => {
    setInputTask(event.target.value);
  };

  const buttonClick = () => {
    if (inputTask) {
      setList([...list, { id: uuid(), task: inputTask, finished: false }]);
      setInputTask("");
    }
  };

  const completedTask = (id) => {
    const newList = list.map((item) =>
      item.id === id ? { ...item, finished: !item.finished } : item
    );
    setList(newList);
  };

  const deleteTask = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  return (
    <Container>
      <TaskList>
        <input
          onChange={changeInput}
          value={inputTask}
          placeholder="Tarefas aqui"
        />
        <button onClick={buttonClick}>Adicionar</button>

        <ul>
          {list.length > 0 ? (
            list.map((item) => (
              <ListItem IsCompleted={item.finished} key={item.id}>
                <Check onClick={() => completedTask(item.id)} />
                <li>{item.task}</li>
                <Trash onClick={() => deleteTask(item.id)} />
              </ListItem>
            ))
          ) : (
            <h3>Não há tarefas na lista</h3>
          )}
        </ul>
      </TaskList>
    </Container>
  );
};

export default App;
