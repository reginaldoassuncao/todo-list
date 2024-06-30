//src/components/TodoList.jsx
import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = ({ tasks, updateTask, removeTask, editTask }) => {
  return (
    <table className="todo-list">
      <thead>
        <tr>
          <th>#</th>
          <th>Nome da Tarefa</th>
          <th>Status</th>
          <th>Editar</th>
          <th>Remover</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map(task => (
          <TodoItem key={task.id} task={task} updateTask={updateTask} removeTask={removeTask} editTask={editTask} />
        ))}
      </tbody>
    </table>
  );
};

export default TodoList;
