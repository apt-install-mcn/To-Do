import React from 'react';
import Task from './Task';

const TaskList = ({
  tasks,
  onTaskChange,
  newTaskAdded,
  onEditTask,
  editingTaskId,
  editedTaskName,
  onSaveEditedTask,
  updateEditedTaskName, 
}) => {
  return (
    <div id='tasklist'>
      {tasks.map((task) => (
        <Task 
          key={task.id} 
          task={task} 
          onTaskChange={onTaskChange} 
          className={newTaskAdded === task.id ? 'new-task' : ''}
          onEditTask={onEditTask}
          isEditing={task.id === editingTaskId}
          editedTaskName={editedTaskName}
          onSaveEditedTask={onSaveEditedTask}
          updateEditedTaskName={updateEditedTaskName} 
        />
      ))}
    </div>
  );
};

export default TaskList;
