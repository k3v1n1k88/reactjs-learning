import React, { useEffect, useState } from 'react'; 
import { newExpirationTime, generateId } from './utils';
import './App.css';
import Thought from './Thought';


function App() {
  const [ text, setText] = useState("");
  const [thoughts, setThoughts] = useState(()=>[
    {
      id: generateId(),
      text: "Sample input",
      exp: newExpirationTime()
    }
  ])

  useEffect(()=>{
    const timeout = setTimeout(()=>{
      setThoughts((thoughts)=>{
        return thoughts.filter(thought => (thought.exp - Date.now()) > 0);
      });
    }, 1000);
    return () => {
      clearTimeout(timeout);
    }
  },[thoughts])

  const handleSubmit = (event) => {
    event.preventDefault();
    if(text.trim()){
      const newThought = {
        id: generateId(),
        text: text,
        exp: newExpirationTime()
      }
      setThoughts((prev)=>{
        return [
          newThought,
          ...prev
        ];
      });
      setText('');
    }
  }
  
  const handleTextChange = ( {target} ) => {
    setText(target.value);
  }

  const handleRemoveThought = (thoughtId) => {
    setThoughts((thoughts)=>thoughts.filter(thought=>thought.id!==thoughtId));
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img src='/thought-balloon.png' alt="thought" />
        </div>
        <h1>Passing Thoughts</h1>
      </header>
      <div>
        <form onSubmit={handleSubmit}>
          <input className="App-input" type="text" value={text} onChange={handleTextChange} />
          <button type="submit">Submit</button>
        </form>
        <ul>
          {thoughts.map(thought=>{
            return <Thought key={thought.id} thought={thought} removeThought={handleRemoveThought}/>
          })}
        </ul>
      </div>
    </div>
  );
}




export default App;
