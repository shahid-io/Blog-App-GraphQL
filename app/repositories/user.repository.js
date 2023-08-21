const CRUDRepository = require("./crud-repository");
const User = require("../models/user.model");

class UserRepository extends CRUDRepository {
    constructor(User) {
        super(User);
    }
}

module.exports = UserRepository;

