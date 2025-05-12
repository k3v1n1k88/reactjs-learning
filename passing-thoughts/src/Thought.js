import React from "react";
import './Thought.css'

function Thought(props) {
  const { thought, removeThought } = props;

  const handleRemoveClick = () => {
    removeThought(thought.id)
  }

  return (
    <div className="Thought">
      <span>{thought.id}</span>
      <li>{thought.text}</li>
      <span>{Math.floor((thought.exp - Date.now()) / 1000)}</span>
      <button onClick={handleRemoveClick}>X</button>
    </div>
  );
}

export default Thought;