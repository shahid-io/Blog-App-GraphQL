const {PostRepository} = require('../repositories');

const postRepository = new PostRepository()

async function createPost(post) {
    try {
        const post = postRepository.createPost(post);
        return post;
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = {
    createPost
};