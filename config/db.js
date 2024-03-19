const { MongoClient } = require('mongodb');

// MongoDB connection URL and database name
const url = 'mongodb://localhost:27017';
const dbName = 'carRentals';

// Function to connect to MongoDB
async function connectToDatabase() {
  try {
    // Create a new MongoClient
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

    // Connect to the MongoDB server
    await client.connect();

    console.log('Connected to MongoDB');
    
    // Return the database instance
    return client.db(dbName);
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    throw err; // Throw error to handle it in the calling code
  }
}

module.exports = {
  connectToDatabase
};
