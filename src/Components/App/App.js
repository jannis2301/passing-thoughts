import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css'
import { AddThoughtForm } from '../AddThoughtForm/AddThoughtForm';
import { Thought } from '../Thought/Thought';
import { generateId, getNewExpirationTime } from '../../utilities/utilities';

export default function App() {
  const [thoughts, setThoughts] = useState([
    {
      id: generateId(),
      text: 'This is a place for your passing thoughts.',
      expiresAt: getNewExpirationTime(),
    },
    {
      id: generateId(),
      text: "They'll be removed after 1 minute.",
      expiresAt: getNewExpirationTime(),
    },
  ]);

  const addThought = thought => {
    setThoughts(prev => [thought, ...prev]); //will add a thought next to the other thoughts
  };

  const removeThought = thoughtIdToRemove => {
    setThoughts(thoughts => thoughts.filter(thought => thought.id !== thoughtIdToRemove));
  };

  return (
    <div className="App">
      <header>
        <h1>Passing Thoughts</h1>
      </header>
      <main>
        <AddThoughtForm addThought={addThought}/>
        <ul className="thoughts">
          {thoughts.map((thought) => (
            <Thought key={thought.id} thought={thought} removeThought={removeThought}/>
          ))}
        </ul>
      </main>
    </div>
  );
}

