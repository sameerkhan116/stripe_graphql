import { IResolvers } from 'graphql-tools';
import * as bcrypt from 'bcryptjs';

import { User } from './entity/User';

export const resolvers: IResolvers = {
  Query: {
    me: async (_, __, { req }) => {
      const userId = req.session.userId;
      if (!userId) {
        return null;
      }
      const user = await User.findOne({ where: { id: userId } });
      return user;
    },
  },
  Mutation: {
    register: async (_, { email, password }) => {
      const hashedPass = await bcrypt.hash(password, 10);
      await User.create({
        email,
        password: hashedPass,
      }).save();
      return true;
    },
    login: async (_, { email, password }, { req }) => {
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return null;
      }
      const valid = await bcrypt.compare(password, user.password);
      if (!valid) {
        return null;
      }

      req.session.userId = user.id;
      return user;
    },
  },
};
