import { useEffect } from 'react';
import './Thought.css';
import { ThoughtTypes } from '../../App';

interface ThoughtProps {
  thought: ThoughtTypes;
  removeThought: (id: string) => void;
}

export function Thought({ thought, removeThought }: ThoughtProps) {
  const handleRemoveClick = () => {
    removeThought(thought.id);
  };

  useEffect(() => {
    const timeRemaining = thought.expiresAt - Date.now();

    // If the thought has already expired, immediately remove it
    if (timeRemaining <= 0) {
      removeThought(thought.id);
      return;
    }

    const timeout = setTimeout(() => {
      removeThought(thought.id);
    }, timeRemaining);

    // Cleanup timeout when the component unmounts or thought changes
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
