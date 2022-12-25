import React from "react";
import "./index.css";

type Episode = {
  name: string;
  episode: string;
};

type Character = {
  data: {
    id: string;
    name: string;
    gender: string;
    image: string;
    episode: Episode[];
  }
}

const Character:React.FC<Character> = ({data}) => {
  return (
    <>
      <h1>{data.name}</h1>
      <div className="character">
        <img src={data.image} alt={data.name} width={400} height={400}/>
        <div className="character-content">
          <p>Gender: {data.gender}</p>
          <p>Episodes: </p>
          <ul className="character-episodes">
            {
              data.episode.map((item: Episode) => {
                return (
                  <li key={item.episode}>{item.episode} -- {item.name}</li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </>
  )
};

export default Character;