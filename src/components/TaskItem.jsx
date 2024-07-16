import React from 'react';

function TaskItem({ task, editTask, deleteTask, toggleComplete }) {
  return (
    <li>
      <span
        style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
        onClick={() => toggleComplete(task.id)}
      >
        {task.name}: {task.description}
      </span>
      <button onClick={() => editTask(task)}>Edit</button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
}

export default TaskItem;
