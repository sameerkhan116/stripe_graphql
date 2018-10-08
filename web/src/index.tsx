import ApolloClient from 'apollo-boost';
import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import { render } from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import { Routes } from './Routes';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

render(
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>,
  document.getElementById('root') as HTMLElement,
);
registerServiceWorker();
