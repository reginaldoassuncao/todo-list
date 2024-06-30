//src/components/EditTaskModal.jsx
import React, { useState } from 'react';
import './EditTaskModal.css';

const EditTaskModal = ({ task, updateTask, closeEditModal }) => {
  const [newTaskName, setNewTaskName] = useState(task.name);

  const handleSave = () => {
    updateTask(task.id, { name: newTaskName });
    closeEditModal();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Editar Tarefa</h2>
        <label>
          Nome da Tarefa:
          <input
            type="text"
            value={newTaskName}
            onChange={(e) => setNewTaskName(e.target.value)}
          />
        </label>
        <button onClick={handleSave}>Salvar</button>
        <button onClick={closeEditModal}>Cancelar</button>
      </div>
    </div>
  );
};

export default EditTaskModal;
  