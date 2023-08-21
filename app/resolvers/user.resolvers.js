export default {

  /** Queries */
  Query: {
    getAlllUsers() {

    },
    getUserById(_, { id }) {

    }
  },

  /** Mutations */
  Mutation: {
    createUser(_, { input }) {
      console.log("input:", input);

      return user;
    },
  },
};

