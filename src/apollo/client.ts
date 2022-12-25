import {ApolloClient, InMemoryCache} from "@apollo/client";
import { API_URL } from "../constants/repo";

const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
  connectToDevTools: true,
})

export default client;