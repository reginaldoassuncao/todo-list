//src/App.jsx
import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import AddTask from './components/AddTask';
import EditTaskModal from './components/EditTaskModal';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks, isLoaded]);

  const addTask = (name) => {
    if (name.trim() === '') {
      setError('O nome da tarefa não pode ser vazio.');
      return;
    }

    if (tasks.some(task => task.name.toLowerCase() === name.toLowerCase())) {
      setError('Uma tarefa com esse nome já existe.');
      return;
    }

    const newTask = {
      id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      name,
      status: 'A Fazer',
    };
    setTasks([...tasks, newTask]);
    setError(null);
  };

  const updateTask = (id, newTask) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, ...newTask } : task)));
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTask = (task) => {
    setTaskToEdit(task);
  };

  const closeEditModal = () => {
    setTaskToEdit(null);
  };

  return (
    <div className="app">
      <h1>Aplicativo de Lista de Tarefas</h1>
      {error && <p className="error">{error}</p>}
      <AddTask addTask={addTask} />
      <TodoList tasks={tasks} updateTask={updateTask} removeTask={removeTask} editTask={editTask} />
      {taskToEdit && <EditTaskModal task={taskToEdit} updateTask={updateTask} closeEditModal={closeEditModal} />}
    </div>
  );
};

export default App;
