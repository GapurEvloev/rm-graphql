import React from "react";
import { gql, useQuery } from "@apollo/client";

import "./CharactersList.css"

export const GET_CHARACTERS = gql`
    query CharactersQuery {
        characters {
            results {
                id
                name
                image
            }
        }
    }
`;

interface Char {
  id: string;
  name: string;
  image: string;
}

const CharactersList = () => {
  const {data, error, loading} = useQuery(GET_CHARACTERS);

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
            <div key={char.id}>
              <img src={char.image} alt={char.name}/>
              <h2>{char.name}</h2>
            </div>
          )
        })
      }
    </div>
  )
};

export default CharactersList;