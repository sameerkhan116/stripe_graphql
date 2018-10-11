import * as React from 'react';
import { Mutation } from 'react-apollo';

import { cancelSubscriptionMutation } from '../graphql/mutations';
import { CancelSubscriptionMutation } from '../schemaTypes';

export class CancelSubscription extends React.PureComponent {
  render() {
    return (
      <Mutation<CancelSubscriptionMutation> mutation={cancelSubscriptionMutation}>
        {(mutate) => (
          <button onClick={() => mutate()}>Cancel Subscription</button>
        )}
      </Mutation>
    )
  }
}