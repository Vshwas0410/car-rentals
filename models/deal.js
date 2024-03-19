// models/deal.js
class Deal {
    constructor(db) {
      this.collection = db.collection('deals');
    }
  
    async getAllDeals() {
      return await this.collection.find().toArray();
    }
  
    async createDeal(dealData) {
      const result = await this.collection.insertOne(dealData);
      return result.ops[0];
    }
  }
  
  module.exports = Deal;
  