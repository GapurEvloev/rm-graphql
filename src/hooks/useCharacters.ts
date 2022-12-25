import { gql, useQuery } from "@apollo/client";

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

export const useCharacters = () => {
  const {data, error, loading} = useQuery(GET_CHARACTERS);

  return {
    data,
    error,
    loading,
  }
}