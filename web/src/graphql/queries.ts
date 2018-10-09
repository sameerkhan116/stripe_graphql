import { gql } from "apollo-boost";

export const meQuery = gql`
  query meQuery {
    me {
      id
      email
      type
    }
  }
`;
