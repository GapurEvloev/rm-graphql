import React from 'react';
import { gql, useLazyQuery } from "@apollo/client";

const GET_CHARACTER_LOCATIONS = gql`
    query CharactersLocationsQuery($filter: FilterCharacter) {
        characters(filter: $filter) {
            results {
                id
                location {
                    name
                }
                name
            }
        }
    }
`;


type Character = {
    id: string;
    name: string;
    location: {
      name: string;
    };
}

const Search:React.FC = () => {
  const [name, setName] = React.useState("");
  const [getLocations, {loading, error, data}] = useLazyQuery(GET_CHARACTER_LOCATIONS, {
    variables: {
      "filter": {
        name
      }
    }
  });

  return (
    <div>
      <input type="text" value={name} onChange={(event) => setName(event.target.value)}/>
      <button onClick={() => getLocations()}>Search</button>

      {loading && <div>Loading...</div>}
      {error && <div>Error! Something went wrong!</div>}
      {data && (
        <ul>
          {
            data.characters.results.map((char: Character) => {
              return (
                <li key={char.id}>{char.name} - {char.location.name}</li>
              )
            })
          }
        </ul>
      )}
    </div>
  )
}
export default Search;