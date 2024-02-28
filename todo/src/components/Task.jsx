import React, { useState } from 'react';

const Task = ({
  task,
  onTaskChange,
  onEditTask,
  isEditing,
  editedTaskName,
  onSaveEditedTask,
  updateEditedTaskName,
}) => {
  const [localEditedTaskName, setLocalEditedTaskName] = useState(editedTaskName || task.name);

  const handleSaveEditedTask = () => {
    const newEditedTaskName = localEditedTaskName;
    onSaveEditedTask(newEditedTaskName);
    updateEditedTaskName(newEditedTaskName);
  
    console.log("localEditedTaskName:", localEditedTaskName);
  };
  



  return (
    <div className={`custom-checkbox task-item ${task.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onTaskChange(task.id)}
        id={`custom-checkbox-${task.id}`}
        className="hidden-checkbox"
      />
      <label htmlFor={`custom-checkbox-${task.id}`} className="custom-checkbox-label">
        <div className={`custom-checkbox-circle ${task.completed ? 'green' : ''}`}></div>
      </label>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={localEditedTaskName}
            onChange={(e) => setLocalEditedTaskName(e.target.value)}
          />
          <button onClick={handleSaveEditedTask}>Guardar</button>
        </div>
      ) : (
        <span>{task.name}</span>
      )}
      {isEditing || (
        <button className='editar' onClick={() => onEditTask(task.id)}>Editar</button>
      )}
    </div>
  );
};

export default Task;
