import * as React from "react";
import { Mutation } from "react-apollo";
import StripeCheckout from "react-stripe-checkout";
import { changeCreditCardMutation } from "../graphql/mutations";
import {
  ChangeCreditCardMutation,
  ChangeCreditCardMutationVariables
} from "../schemaTypes";

export class ChangeCreditCard extends React.PureComponent {
  render() {
    return (
      <Mutation<ChangeCreditCardMutation, ChangeCreditCardMutationVariables>
        mutation={changeCreditCardMutation}
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
            panelLabel="Change Card"
          >
            <button>Change Credit Card</button>
          </StripeCheckout>
        )}
      </Mutation>
    );
  }
}
