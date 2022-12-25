import React from "react";
import { useCharacters }  from "../hooks/useCharacters";
import { Link } from "react-router-dom";

import "./CharactersList.css"

interface Char {
  id: string;
  name: string;
  image: string;
}

const CharactersList = () => {
  const {data, error, loading} = useCharacters();

  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error! Something went wrong</div>
  }
  return(
    <div className="CharactersList">
      {
        data.characters.results.map((char: Char) => {
          return(
            <Link to={`/${char.id}`} key={char.id}>
              <img src={char.image} alt={char.name}/>
              <h2>{char.name}</h2>
            </Link>
          )
        })
      }
    </div>
  )
};

export default CharactersList;