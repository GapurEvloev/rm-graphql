import { gql, useQuery } from "@apollo/client";

export const GET_CHARACTER = gql`
    query CharacterQuery($characterId: ID!) {
        character(id: $characterId) {
            id
            name
            image
            gender
            episode {
                name
                episode
            }
        }
    }
`;

export const useCharacter = (characterId: string | undefined) => {
  const {data, error, loading} = useQuery(GET_CHARACTER, {
    variables: {
      characterId
    }
  });

  return {
    data,
    error,
    loading,
  }
}