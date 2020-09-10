import React, { useState, useEffect } from 'react';
import { Form } from '../Form/Form';
import { TodoList } from '../TodoList/TodoList';
import { getData, deleteTodo } from '../../Request';

export const ToDo = () => {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getData();
      setTodo(data);
    })();
  }, []);

  const uploadData = data => {
    setTodo(data);
  };

  const deleteItem = async id => {
    await deleteTodo(id);
    const data = await getData();
    setTodo(data);
  };

  return (
    <>
      <Form uploadData={uploadData} />
      <TodoList todos={todo} deleteTodo={deleteItem} />
    </>
  );
};
