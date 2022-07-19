// Import useContext
import { useContext } from "react";
import { PokemonDataContext } from "../App";

//this can be used to export the component
export default function Abilites() {

const { pokeData } =useContext(PokemonDataContext);
console.log(pokeData)
    return (
        <>
        <h2> Abilities</h2> 
            <pre>
                
                {pokeData && JSON.stringify(pokeData.abilities, undefined, 2)}
            </pre>
        </>
    )

}