import 'reflect-metadata';
import "dotenv/config";
import { ApolloServer } from 'apollo-server-express';
import { createConnection } from 'typeorm';
import * as express from 'express';
import * as session from 'express-session';

import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';

const PORT = 4000;

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }: any) => ({ req }),
  });

  await createConnection();

  const app = express();
  app.use(
    session({
      secret: 'sameer',
      resave: false,
      saveUninitialized: false,
    }),
  );
  server.applyMiddleware({
    app,
    cors: {
      credentials: true,
      origin: 'http://localhost:3000',
    },
  });

  app.listen({ port: PORT }, () => {
    console.log(`Server is running on http://localhost:${PORT}/graphql`);
  });
};

startServer().catch((err) => console.log(err));
