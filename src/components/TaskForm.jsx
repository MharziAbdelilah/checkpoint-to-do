import React, { useState, useEffect } from 'react';

function TaskForm({ addTask, updateTask, currentTask }) {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  useEffect(() => {
    if (currentTask) {
      setTaskName(currentTask.name);
      setTaskDescription(currentTask.description);
    } else {
      setTaskName('');
      setTaskDescription('');
    }
  }, [currentTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName || !taskDescription) return;

    const newTask = {
      id: currentTask ? currentTask.id : Date.now(),
      name: taskName,
      description: taskDescription,
      completed: currentTask ? currentTask.completed : false,
    };

    if (currentTask) {
      updateTask(newTask);
    } else {
      addTask(newTask);
    }

    setTaskName('');
    setTaskDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Task Name"
        required
      />
      <input
        type="text"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        placeholder="Task Description"
        required
      />
      <button type="submit">{currentTask ? 'Update Task' : 'Add Task'}</button>
    </form>
  );
}

export default TaskForm;
