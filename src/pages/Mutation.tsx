import React from 'react';
import { gql, useMutation } from "@apollo/client";

const CREATE_PRODUCT = gql`
    mutation CreateProduct($name: String!, $quantityPerUnit: Int!){
        createProduct(record: {
            name: $name,
            quantityPerUnit: $quantityPerUnit,
        }) {
            record {
                name
            }
        }
    }
`;

const Mutation:React.FC = () => {
  const [createProduct, {data, loading, error}] = useMutation(CREATE_PRODUCT, {
    variables: {
      name: "Hot dog",
      quantityPerUnit: 4,
    }
  });

  return (
    <div>
      <button onClick={() => createProduct()}>Create Product</button>
    </div>
  )
}
export default Mutation;