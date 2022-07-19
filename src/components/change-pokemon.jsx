import { useContext } from "react"
import { PokemonDataContext } from "../App"

export default function ChangePokemon(){
    const { pokeName,setPokeName } = useContext(PokemonDataContext);
    const handleChangePokeName = (e) => {
        setPokeName(e.currentTarget.value);
    }

    return (
        <>
            <h2> ChangePokemon</h2>
            <input 
                type="search" 
                value={pokeName}
                //conts handleChangePokename works with useContext to run function for onChange
                onChange ={handleChangePokeName}
                />
        </>
    )
}