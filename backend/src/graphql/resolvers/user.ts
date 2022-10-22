const resolvers = {
  Query: {
    searchUsers: (username: String) => {},
  },

  //   Mutations *********************************
  Mutation: {
    createUsername: async (
      parent: any,
      args: any,
      context: any
    ): Promise<void> => {
      console.log(context.prisma);
      console.log(args);
    },
  },

  // Subscriptions **********************************
  //   Subscription: {}
};

export default resolvers;
