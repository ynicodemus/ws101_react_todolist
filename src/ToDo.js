import React, { useState } from 'react';

const ToDo = () => {
  const [tasks, setTasks] = useState([]);      // To store the list of tasks
  const [input, setInput] = useState('');      // To store the current input value

  // Handle the form submit and add a new task
  const handleAddTask = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setTasks([...tasks, { text: input, completed: false }]);
      setInput('');
    }
  };

  // Toggle the completed state of a task
  const handleToggleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  // Delete a task
  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div>
      <h1>TODO LIST</h1>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a task..."
        />
        <button type="submit">+</button>
      </form>
        <ul>
          {tasks.map((task, index) => (
            <div className='task'>
            <li key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.text}
              <button onClick={() => handleToggleComplete(index)}>
                {task.completed ? 'Undo' : 'Complete'}
              </button>
              <button onClick={() => handleDeleteTask(index)}>Delete</button>
            </li>
            </div>
          ))}
        </ul>
    </div>
  );
};

export default ToDo;