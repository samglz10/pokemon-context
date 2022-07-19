import { useContext } from "react"
import { PokemonDataContext } from "../App"



export default function Forms() {
    // Always has to be in the body of a function component
    //Cannot call them conditionally (cannot be inside of an if)
    // Cannot use them in a loop
    const { pokeData } =useContext(PokemonDataContext);

    return (
        <>
            <h2> Forms</h2>
            {pokeData && JSON.stringify( pokeData.forms, undefined, 2)}
        </>
    )
}