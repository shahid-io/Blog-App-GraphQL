class CRUDRepository {
    constructor(model) {
      this.model = model;
    }
    async create(data) {
      try {
        // const newItem = new this.model(data);
        // const savedItem = await newItem.save();
        return this.model(data).save();
      } catch (error) {
        throw new Error(`Error creating item: ${error.message}`);
      }
    }
  
    async findById(id) {
      try {
        const item = await this.model.findById(id);
        return item;
      } catch (error) {
        throw new Error(`Error finding item: ${error.message}`);
      }
    }
  
    async findAll() {
      try {
        const items = await this.model.find();
        return items;
      } catch (error) {
        throw new Error(`Error fetching items: ${error.message}`);
      }
    }
  
    // Add more CRUD operations here (update, delete, etc.)
  }
  
  module.exports = CRUDRepository;
  