import { IResolvers } from 'graphql-tools';
import * as bcrypt from 'bcryptjs';

import { User } from './entity/User';

export const resolvers: IResolvers = {
  Query: {
    hello: () => 'hi!',
  },
  Mutation: {
    register: async (_, { email, password }) => {
      const hashedPass = await bcrypt.hash(password, 10);
      await User.create({
        email,
        password: hashedPass,
      }).save();
    },
  },
};
