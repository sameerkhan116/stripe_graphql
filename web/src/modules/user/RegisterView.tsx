import * as React from 'react';
import { Mutation } from 'react-apollo';
import { RouteComponentProps } from 'react-router';

import { registerMutation } from '../../graphql/mutations';
import { RegisterMutation, RegisterMutationVariables } from '../../schemaTypes';
import { Form } from './Form';

export class RegisterView extends React.PureComponent<RouteComponentProps<{}>> {
  render() {
    return (
      <Mutation<RegisterMutation, RegisterMutationVariables>
        mutation={registerMutation}
      >
        {mutate => (
          <Form
            buttonText="Register"
            onSubmit={async state => {
              const response = await mutate({
                variables: state,
              });
              console.log(response);
              this.props.history.push('/login');
            }}
          />
        )}
      </Mutation>
    );
  }
}
