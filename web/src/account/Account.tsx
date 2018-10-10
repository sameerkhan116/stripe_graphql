import * as React from "react";
import { Query } from "react-apollo";
import { Redirect } from "react-router-dom";

import { meQuery } from "../graphql/queries";
import { MeQuery } from "../schemaTypes";
import { ChangeCreditCard } from './ChangeCreditCard';
import { SubscribeUser } from "./SubscribeUser";

export class Account extends React.PureComponent {
  render() {
    return (
      <Query<MeQuery> query={meQuery}>
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
          if (data.me.type === "free-trial") {
            return <SubscribeUser />;
          }
          return (
            <div>
              <div>Your current last 4 digits: {data.me.ccLast4}</div>
              <ChangeCreditCard />
            </div>
          );
        }}
      </Query>
    );
  }
}
