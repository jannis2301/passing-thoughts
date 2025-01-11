import { ChangeEvent, useState } from 'react';
import { generateId, getNewExpirationTime } from '../../utilities/utils';
import './AddThoughtForm.css';
import { ThoughtTypes } from '../../App';

interface AddThoughtFormProps {
  addThought: (thought: ThoughtTypes) => void;
}

export function AddThoughtForm({ addThought }: AddThoughtFormProps) {
  const [text, setText] = useState('');

  const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (text.trim().length > 0) {
      const thought = {
        id: generateId(),
        text,
        expiresAt: getNewExpirationTime(),
      };
      addThought(thought);
      setText('');
    }
  };

  return (
    <form className="AddThoughtForm" onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={handleTextChange}
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
      />
      <button
        type="submit"
        className="AddThoughtForm__button"
        aria-label="Add thought"
        title="Add"
      >
        Add
      </button>
    </form>
  );
}
