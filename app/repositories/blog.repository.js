const CRUDRepository = require('./crud-repository');
const Blog = require('../models/blog.model');

class BlogRepository extends CRUDRepository {
    
    constructor() {
        super(Blog);
    }

    // Add custom methods for blog-related operations
}

module.exports = BlogRepository;
