import { gql } from "apollo-boost";
import { userFragment } from './userFragment';

export const createSubscriptionMutation = gql`
  mutation CreateSubscriptionMutation($source: String!, $ccLast4: String!) {
    createSubscription(source: $source, ccLast4: $ccLast4) {
      ...UserInfo
    }
  }
  
  ${userFragment}
`;

export const loginMutation = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      ...UserInfo
    }
  }
  
  ${userFragment}
`;

export const registerMutation = gql`
  mutation RegisterMutation($email: String!, $password: String!) {
    register(email: $email, password: $password)
  }
`;

export const changeCreditCardMutation = gql`
  mutation ChangeCreditCardMutation($source: String!, $ccLast4: String!) {
    changeCreditCard(source: $source, ccLast4: $ccLast4) {
      ...UserInfo
    }
    
  }
  ${userFragment}
`;