//src/components/AddTask.jsx
import React, { useState } from 'react';
import './AddTask.css';

const AddTask = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(taskName);
    setTaskName('');
  };

  return (
    <form className="add-task" onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Adicionar nova tarefa"
      />
      <button type="submit">Adicionar Tarefa</button>
    </form>
  );
};

export default AddTask;
