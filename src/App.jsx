
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import pokemon from './assets/pokemon.png'
import './App.css'
import { useState } from 'react'

async function getPokemon (){
  const url = "https://pokeapi.co/api/v2/pokemon?limit=151";
  try {
    const resultPokemon = await fetch(url)
    console.log(resultPokemon)
  } catch (erreur) {
    console.eroor(erreur.message)
  }
}




function App() {
  const [namePokemon,setNamePokemon] = useState("pikachu")

  return (
    <>
      <section id="center">
        <div className="hero">
          
          <img src={pokemon} />
          
        </div>
        <div>
          <h1>Trouver un pokemon</h1>
          <label> Nom pokemon
            <input type="text" name="namePokemon" value="{namePokemon}"/>
          </label>
         
        </div>
        <button onClick={()=>setNamePokemon()}>button  
        </button>
      </section>
    </>
  )
}

export default App
