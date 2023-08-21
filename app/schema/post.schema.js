
import { gql } from 'apollo-server-express';

export default gql`
    type Query {
        getAllPosts: [Post!]!
        getPostById(id: ID!): Post!
    }
    
    type Mutation {
        createPost(input: PostInput): Post!
    }

    type Post {
        id: ID!
        title: String!
        content: String!
        author: String!
    }

    input PostInput {
        title: String!
        content: String!
        author: String!
    }
`;
