import * as React from 'react';
import { Mutation } from 'react-apollo';
import { RouteComponentProps } from 'react-router';

import { loginMutation } from '../../graphql/mutations';
import { meQuery } from '../../graphql/queries';
import { LoginMutation, LoginMutationVariables } from '../../schemaTypes';
import { Form } from './Form';

export class LoginView extends React.PureComponent<RouteComponentProps<{}>> {
  render() {
    return (
      <Mutation<LoginMutation, LoginMutationVariables>
        update={(cache, { data }) => {
          if (!data || !data.login) {
            return;
          }
          cache.writeQuery({
            query: meQuery,
            data: { me: data.login },
          });
        }}
        mutation={loginMutation}
      >
        {(mutate, { client }) => (
          <Form
            buttonText="Login"
            onSubmit={async state => {
              await client.resetStore();
              const response = await mutate({
                variables: state,
              });
              console.log(response);
              this.props.history.push('/account');
            }}
          />
        )}
      </Mutation>
    );
  }
}
