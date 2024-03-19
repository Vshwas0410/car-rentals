// models/dealership.js
class Dealership {
    constructor(db) {
      this.collection = db.collection('dealerships');
    }
  
    async getAllDealerships() {
      return await this.collection.find().toArray();
    }
  
    async createDealership(dealershipData) {
      const result = await this.collection.insertOne(dealershipData);
      return result.ops[0];
    }
  }
  
  module.exports = Dealership;
  