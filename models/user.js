// models/user.js
const { ObjectId } = require('mongodb');

class User {
  constructor(db) {
    this.collection = db.collection('users');
  }

  async getAllUsers() {
    return await this.collection.find().toArray();
  }

  async createUser(userData) {
    const result = await this.collection.insertOne(userData);
    return result.ops[0];
  }
}

module.exports = User;
