
import { gql } from 'apollo-server-express';

export default gql`
  type Query {
    getAllUsers: [User!]!
    getUserById(id: ID!): User!
  }


  type Mutation {
    createUser(input: UserInput): User!
  }


  type User {
    id: ID!
    name: String!
	  email: String!
	  age: Int!
  }

  input UserInput {
    name: String!
    email: String!
    age: Int!
  }	
`;

