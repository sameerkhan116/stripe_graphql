import { gql } from "apollo-boost";

export const createSubscriptionMutation = gql`
  mutation CreateSubscriptionMutation($source: String!) {
    createSubscription(source: $source) {
      id
      email
      type
    }
  }
`;

export const loginMutation = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      email
      type
    }
  }
`;

export const registerMutation = gql`
  mutation RegisterMutation($email: String!, $password: String!) {
    register(email: $email, password: $password)
  }
`;
