import * as React from "react";
import { Mutation } from "react-apollo";
import StripeCheckout from "react-stripe-checkout";
import { createSubscriptionMutation } from "../graphql/mutations";
import {
  CreateSubscriptionMutation,
  CreateSubscriptionMutationVariables
} from "../schemaTypes";

export class SubscribeUser extends React.PureComponent {
  render() {
    return (
      <Mutation<CreateSubscriptionMutation, CreateSubscriptionMutationVariables>
        mutation={createSubscriptionMutation}
      >
        {mutate => (
          <StripeCheckout
            token={async token => {
              const response = await mutate({
                variables: { source: token.id, ccLast4: token.card.last4 }
              });
              console.log(response);
            }}
            stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE!}
            amount={1000}
          />
        )}
      </Mutation>
    );
  }
}
