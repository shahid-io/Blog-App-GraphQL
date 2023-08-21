export default {
    /** Queries */
    Query: {
        async getAlllPosts() { },
        async getPostById(_, { id }) { },
    },


    /** Mutations */
    Mutation: {
        async createPost(_, { input }) {
            console.log("input:", input);

            return post;
        },
    },
};


