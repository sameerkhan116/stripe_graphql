import ApolloClient from 'apollo-boost';
import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import { render } from 'react-dom';
// @ts-ignore
import { createGlobalStyle } from 'styled-components';

import registerServiceWorker from './registerServiceWorker';
import { Routes } from './Routes';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  credentials: 'include',
});

const GlobalStyle = createGlobalStyle`
  body {
    background-color: rgb(255, 254, 252);
  }
`;

render(
  <ApolloProvider client={client}>
    <GlobalStyle />
    <Routes />
  </ApolloProvider>,
  document.getElementById('root') as HTMLElement,
);
registerServiceWorker();
