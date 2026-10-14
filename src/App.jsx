

import pokemon from './assets/pokemon.png'
import './App.css'
import { useState } from 'react'

async function getPokemon (){
  const url = "https://pokeapi.co/api/v2/pokemon?limit=151";
  try {
    const resultPokemon = await fetch(url)
    if(!resultPokemon.ok){
      throw new Error(`Erreur HTTP voici le code : ${resultPokemon.status}`)
    }
    const data = await resultPokemon.json()
    console.log(JSON.stringify(data))
    return data
  } catch (erreur) {
    console.error("Erreur lors de la requete", erreur)
  }
}




function App() {
  console.log("entrée function app")
  const [namePokemon,setNamePokemon] = useState("pikachu")

  const arrayPokemon = getPokemon



  function handleChange(e){
    setNamePokemon(e.target.value);
  }
  return (
    <>
      <section id="center">
        <div className="hero">
          
          <img src={pokemon} />
          
        </div>
        <div>
          <h1>Trouver un pokemon</h1>
          <label> Nom pokemon {namePokemon}
            <input 
            type="text" 
            name="namePokemon" 
            value={namePokemon}
            onChange={handleChange}/>
          </label>
         
        </div>
        <button >button  
        </button>
        {arrayPokemon.maps((pokemon)=><p>{pokemon.name}</p>)}
      </section>
    </>
  )
}

export default App
