import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Query {
    me: User
  }

  type User {
    id: ID!
    email: String!
  }

  type Mutation {
    register(email: String!, password: String!): Boolean!
    login(email: String!, password: String!): User
    createSubscription(source: String!): User
  }
`;
