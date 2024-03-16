import React from 'react';
import './App.css';

const tasks = {
  'To-Do': ['Silly Task', 'Task 2', 'Task 3'],
  'Doing': ['Frontend', 'Backend', 'Database', 'Testing', 'Deployment'],
  'Done': [],
  'Dropped': []
};

function Task({ task }) {
  return <div className="task">{task}</div>;
}

function Column({ status }) {
  return (
    <div className="column">
      <h2>{status}</h2>
      {tasks[status].map(task => (
        <Task key={task} task={task} />
      ))}
    </div>
  );
}

function Board() {
  return (
    <div className="board">
      {Object.keys(tasks).map(status => (
        <Column key={status} status={status} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1 className="title">CPSC362 Group 8 Project</h1>
      <Board />
    </div>
  );
}

export default App;