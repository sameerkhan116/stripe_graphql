import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    me: User
  }

  type User {
    id: ID!
    email: String!
    type: String!
    ccLast4: String
  }

  type Mutation {
    register(email: String!, password: String!): Boolean!
    login(email: String!, password: String!): User
    createSubscription(source: String!, ccLast4: String!): User
    changeCreditCard(source: String!, ccLast4: String!): User
  }
`;
