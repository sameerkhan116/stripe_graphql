import * as React from "react";
import { Mutation } from "react-apollo";
import { RouteComponentProps } from "react-router";

import { loginMutation } from "../../graphql/mutations";
import { meQuery } from "../../graphql/queries";
import { LoginMutation, LoginMutationVariables } from "../../schemaTypes";
import {RedButton} from '../../ui/RedButton';

export class LoginView extends React.PureComponent<RouteComponentProps<{}>> {
  state = {
    email: "",
    password: ""
  };

  handleChange = (e: any) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const { password, email } = this.state;

    return (
      <Mutation<LoginMutation, LoginMutationVariables>
        update={(cache, { data }) => {
          if (!data || !data.login) {
            return;
          }
          cache.writeQuery({
            query: meQuery,
            data: { me: data.login }
          });
        }}
        mutation={loginMutation}
      >
        {(mutate, { client }) => (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <div>
              <input
                name="email"
                placeholder="Email"
                value={email}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <input
                name="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <RedButton
                onClick={async () => {
                  // optional to reset cache
                  await client.resetStore();
                  const response = await mutate({
                    variables: this.state
                  });
                  console.log(response);
                  this.props.history.push("/account");
                }}
              >
                Login
              </RedButton>
            </div>
          </div>
        )}
      </Mutation>
    );
  }
}
