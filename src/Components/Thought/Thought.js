import React from 'react';
import {useEffect} from 'react';
import './Thought.css';

export function Thought(props) {
  const { thought, removeThought } = props;

  const handleRemoveClick = () => {
    removeThought(thought.id);
  };

  useEffect(()=> {
    const timeRemaining = thought.expiresAt - Date.now();
    const timeout = setTimeout(() => {
      removeThought(thought.id);
  }, timeRemaining);
  return () => {
    clearTimeout(timeout);
  };
}, [thought, removeThought]);

  return (
    <li className="Thought">
      <div className="text">{thought.text}</div>
      <button
        aria-label="Remove thought"
        className="remove-button"
        onClick={handleRemoveClick}
      >
        &times;
      </button>
    </li>
  );
}
