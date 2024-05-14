import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [message, setMessage] = useState("Hello world");
  const [state2, setState2] = useState("e");

  // useEffect with empty dependency array
  // depends on nothing, will run only when initially declared
  useEffect(() => {
    console.log("Component loaded.");
  }, []);

  // useEffect with return function
  // calls function on componentWillUnmount
  // not related to the dependency array at all
  useEffect(() => {
    return (() => {
      console.log("Component will unmount.");
    });
  }, []);


  // useEffect with variable in dependency array
  // depends on variable, will runn in intial declaration
  // but not on any update not listed in the dependency array
  useEffect(() => {
    console.log("Value updated");
  }, [message]);

  return (
    <div className="App">
      <h1>{message}</h1>
      <button onClick={() => setMessage(4546325363453)}>
        Change message
      </button>

      <input type="text" value={message} onChange={(event) => setMessage(event.target.value)} />
    </div>
  )
}

export default App;
