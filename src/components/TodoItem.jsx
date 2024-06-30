//src/components/TodoItem.jsx
import React from 'react';
import './TodoItem.css';

const TodoItem = ({ task, updateTask, removeTask, editTask }) => {
  const handleStatusChange = (e) => {
    updateTask(task.id, { status: e.target.value });
  };

  const handleEditClick = () => {
    if (window.confirm('Você realmente deseja editar esta tarefa?')) {
      editTask(task);
    }
  };

  const handleRemoveClick = () => {
    if (window.confirm('Você realmente deseja excluir esta tarefa?')) {
      removeTask(task.id);
    }
  };

  let taskClass = '';
  if (task.status === 'Concluído') {
    taskClass = 'completed-task';
  } else if (task.status === 'Em Progresso') {
    taskClass = 'in-progress-task';
  }

  return (
    <tr className={taskClass}>
      <td>{task.id}</td>
      <td>{task.name}</td>
      <td>
        <select value={task.status} onChange={handleStatusChange}>
          <option value="A Fazer">A Fazer</option>
          <option value="Em Progresso">Em Progresso</option>
          <option value="Concluído">Concluído</option>
        </select>
      </td>
      <td>
        <button onClick={handleEditClick}>✏️</button>
      </td>
      <td>
        <button onClick={handleRemoveClick}>🗑️</button>
      </td>
    </tr>
  );
};

export default TodoItem;
