import { gql } from 'apollo-boost';
import * as React from 'react';
import { Query } from 'react-apollo';
import { MeQuery } from '../../schemaTypes';

const meQuery = gql`
  query MeQuery {
    me {
      id
      email
    }
  }
`;

export class MeView extends React.PureComponent {
  render() {
    return (
      <Query<MeQuery> query={meQuery}>
        {({ data, loading }) =>
          loading || !data || !data.me ? null : <div>{data.me.email}</div>
        }
      </Query>
    );
  }
}
