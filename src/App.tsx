import { useState } from 'react';
import { AddThoughtForm } from './components/addThoughtForm/AddThoughtForm';
import { Thought } from './components/thought/Thought';
import { generateId, getNewExpirationTime } from './utilities/utils';
import './App.css';

export interface ThoughtTypes {
  id: string;
  text: string;
  expiresAt: number;
}

export default function App() {
  const [thoughts, setThoughts] = useState<ThoughtTypes[]>([
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

  const addThought = (thought: ThoughtTypes): void => {
    setThoughts((prev) => [thought, ...prev]); //will add a thought next to the other thoughts
  };

  const removeThought = (thoughtIdToRemove: string) => {
    setThoughts((thoughts) =>
      thoughts.filter((thought) => thought.id !== thoughtIdToRemove)
    );
  };

  return (
    <div className="App">
      <header>
        <h1>Passing Thoughts</h1>
      </header>
      <main>
        <AddThoughtForm addThought={addThought} />
        <ul className="thoughts">
          {thoughts.map((thought) => (
            <Thought
              key={thought.id}
              thought={thought}
              removeThought={removeThought}
            />
          ))}
        </ul>
      </main>
    </div>
  );
}
