import { useEffect, useState } from "react";
import Character from "./Character";


const CharacterList = () => {
  const [characters,setCharacters]    = useState([])

  useEffect( ()=> {
   async function fetchData(){

    try{
      const data =await fetch("https://rickandmortyapi.com/api/character");

      const{results} = await  data.json();
      setCharacters(results)
    }catch(error) {
 console.error("Error fetching data "+error)
    }
     
    }
    fetchData()
  },[characters.length])
  return (
    <div className="character-list">
     {
        characters.map((character)=>(
          <Character key={character.id} {...character}/>
          )
        )
      }
    </div>
  )
}

export default CharacterList