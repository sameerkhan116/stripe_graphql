import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import { createConnection } from 'typeorm';
import * as express from 'express';

import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';

const PORT = 4000;

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await createConnection();

  const app = express();
  server.applyMiddleware({ app });

  app.listen({ port: PORT }, () => {
    console.log(`Server is running on http://localhost:${PORT}/graphql`);
  });
};

startServer();
