// models/car.js
class Car {
    constructor(db) {
      this.collection = db.collection('cars');
    }
  
    async getAllCars() {
      return await this.collection.find().toArray();
    }
  
    async createCar(carData) {
      const result = await this.collection.insertOne(carData);
      return result.ops[0];
    }
  }
  
  module.exports = Car;
  