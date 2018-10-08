import { gql } from 'apollo-boost';
import * as React from 'react';
import { Mutation } from 'react-apollo';
import StripeCheckout from 'react-stripe-checkout';
import { CreateSubscriptionMutation, CreateSubscriptionMutationVariables } from '../schemaTypes';

const createSubscriptionMutation = gql`
  mutation CreateSubscriptionMutation($source: String!) {
    createSubscription(source: $source) {
      id
      email
    }
  }
`;

export class SubscribeUser extends React.PureComponent {
  render() {
    return (
      <Mutation<CreateSubscriptionMutation, CreateSubscriptionMutationVariables> mutation={createSubscriptionMutation}>
        {(mutate) => (
          <StripeCheckout token={async (token) => {
            const response = await mutate({
              variables: { source: token.id }
            })
            console.log(response);
          }}
            stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE!}
          />
        )}
      </Mutation>
    )
  }
}