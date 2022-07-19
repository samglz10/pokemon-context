import { createContext, useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Abilites from './components/abilities';
import ChangePokemon from './components/change-pokemon';
import Forms from './components/forms';

//importing pokeAPI
const POKE_ENDPOINT = "https://pokeapi.co/api/v2/pokemon/";

// using context - linked to PokemonDataContext.Provider component
// useContext should be outside your function; Export useContext to move the useState to a child
export const PokemonDataContext = createContext({});


function App() {
  const [pokeData, setPokeData] = useState()
  const [pokeName, setPokeName] = useState('exploud');


  //need to synchronize the data and useState; use useEffect
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(`${POKE_ENDPOINT}${pokeName}`);
        const result = await response.json();
        setPokeData(result);
      }
     fetchData();
    },[pokeName])
  

  return (
    <div className="App">
      <h1> Welcome to my Awesome Pokemon App</h1>
      
      <h2>Who's that Pokemon!</h2>
      {/* PokemonDataContext.Provider allows us to push useContext values*/}
         <PokemonDataContext.Provider value={{pokeData, pokeName, setPokeName}}>
            <ChangePokemon />
            <Abilites/>
            <Forms/>
        </PokemonDataContext.Provider>
      <pre>
        {pokeData && JSON.stringify(pokeData, undefined, 2)}
      </pre>
    </div>
   )
 }

export default App;
