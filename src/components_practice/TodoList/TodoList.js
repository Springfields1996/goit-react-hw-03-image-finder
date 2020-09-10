import React from 'react';
// import { FireButton } from '../UI/FireButton.js';

export const TodoList = ({ todos, deleteTodo }) => (
  <ul>
    {todos.map(todo => (
      <li key={todo.id}>
        <h2>{todo.todo}</h2>
        {/* <FireButton label="delete" handleClick={() => deleteTodo(todo.id)} /> */}
      </li>
    ))}
  </ul>
);
