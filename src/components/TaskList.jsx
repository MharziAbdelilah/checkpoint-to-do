import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, editTask, deleteTask, toggleComplete }) {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          editTask={editTask}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
        />
      ))}
    </ul>
  );
}

export default TaskList;
