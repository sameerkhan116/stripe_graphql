import { gql } from "apollo-boost";
import * as React from "react";
import { Query } from "react-apollo";
import { Redirect } from "react-router-dom";

import { MeQuery } from "../schemaTypes";
import { SubscribeUser } from './SubscribeUser';

const meQuery = gql`
  query meQuery {
    me {
      id
      email
      type
    }
  }
`;

export class Account extends React.PureComponent {
  render() {
    return (
      <Query<MeQuery> fetchPolicy="network-only" query={meQuery}>
        {({ data, loading }) => {
          if (loading) {
            return null;
          }
          if (!data) {
            return <div>Data is undefined.</div>;
          }
          if (!data.me) {
            return <Redirect to="/login" />;
          }
          if(data.me.type === 'free-trial') {
            return (<SubscribeUser />)
          }
          return <Redirect to="/paid-user" />;
        }}
      </Query>
    );
  }
}
