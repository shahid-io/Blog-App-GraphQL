const { UserRepository } = require('../repositories');

const userRepository = new UserRepository()

async function createUser(user) {
    try {
        const newUser = userRepository.createUser(user);
        return newUser;
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = {
    createUser
};