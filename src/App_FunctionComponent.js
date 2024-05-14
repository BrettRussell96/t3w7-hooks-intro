import React, { useState } from 'react';
import './App.css';

function App() {

  const [message, setMessage] = useState("Hello world");
  const [state2, setState2] = useState("e");

  return (
    <div className="App">
      <h1>{message}</h1>
      <button onClick={() => setMessage(4546325363453)}>
        Change message
      </button>
    </div>
  )
}

export default App;
