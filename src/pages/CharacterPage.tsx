import React from "react";
import { useCharacter } from "../hooks/useCharacter";
import Character from "../components/Character";
import { useParams } from "react-router-dom";

const CharacterPage:React.FC = () => {
  const {id} = useParams();

  const {data, loading, error} = useCharacter(id);

  if (error) return <div>Error! Something went wrong!</div>

  if (loading) return <div>Loading...</div>;

  const {character} = data;

  return (
    <>
      {
        data && <Character data={character}/>
      }
    </>
  )
};

export default CharacterPage;