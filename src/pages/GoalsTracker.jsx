import React, { useState } from 'react';
import './GoalsTracker.css';


const GoalsTracker = () => {
  const [goals, setGoals] = useState([]);
  const [goal, setGoal] = useState('');

  const addGoal = () => {
    setGoals([...goals, { text: goal, completed: false }]);
    setGoal('');
  };

  const toggleGoal = (index) => {
    setGoals(
      goals.map((g, i) =>
        i === index ? { ...g, completed: !g.completed } : g
      )
    );
  };

  return (
    <div>
      <h1>Ciljevi</h1>
      <input
        type="text"
        placeholder="Dodaj novi cilj"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
      />
      <button onClick={addGoal}>Dodaj</button>

      <ul>
        {goals.map((g, index) => (
          <li
            key={index}
            style={{
              textDecoration: g.completed ? 'line-through' : 'none',
              cursor: 'pointer',
            }}
            onClick={() => toggleGoal(index)}
          >
            {g.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GoalsTracker;
