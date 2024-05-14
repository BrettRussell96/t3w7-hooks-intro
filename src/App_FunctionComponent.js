import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [message, setMessage] = useState("Hello world");
  const [pokemon, setPokemon] = useState({});

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


  const getPokemon = async () => {
    let result = await fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 1025) +1}`).then(response => response.json());
    setPokemon({name: result.name, sprite: result.sprites.front_default});
  }

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <div className="App">
      <h1>{message}</h1>
      <button onClick={() => setMessage(4546325363453)}>
        Change message
      </button>

      <input type="text" value={message} onChange={(event) => setMessage(event.target.value)} />

      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprite} alt="URL to the sprite of whatever random pokemon this is" />
      <button onClick={getPokemon}>
        Get random Pokemon
      </button>
    </div>
  )
}

export default App;
