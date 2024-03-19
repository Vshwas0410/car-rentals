const faker = require('faker');
const { MongoClient } = require('mongodb');

// MongoDB connection URL and database name
const url = 'mongodb://localhost:27017';
const dbName = 'carRentals';

// Function to connect to MongoDB
async function connectToDatabase() {
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();
  console.log('Connected to MongoDB');
  return client.db(dbName);
}

// Function to generate and insert dummy data
async function generateDummyData(db) {
  try {
    const usersCollection = db.collection('users');
    const dealershipsCollection = db.collection('dealerships');
    const carsCollection = db.collection('cars');
    const dealsCollection = db.collection('deals');

    // Generate dummy data for users
    const users = [];
    for (let i = 0; i < 10; i++) {
      users.push({
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        role: faker.random.arrayElement(['admin', 'user']),
       
      });
    }

    // Generate dummy data for dealerships
    const dealerships = [];
    for (let i = 0; i < 5; i++) {
      dealerships.push({
        name: faker.company.companyName(),
        location: faker.address.city(),
        owner: faker.name.findName(),
       
      });
    }

    
    const cars = [];
    for (let i = 0; i < 20; i++) {
      cars.push({
        make: faker.vehicle.manufacturer(),
        model: faker.vehicle.model(),
        year: faker.vehicle.year(),
        color: faker.commerce.color(),
        price: faker.random.number({ min: 1000, max: 50000 }),
        mileage: faker.random.number({ min: 0, max: 100000 }),
     
      });
    }

    
    const deals = [];
    for (let i = 0; i < 10; i++) {
      deals.push({
        userId: faker.random.number({ min: 1, max: 10 }),
        dealershipId: faker.random.number({ min: 1, max: 5 }),
        carId: faker.random.number({ min: 1, max: 20 }),
        salePrice: faker.random.number({ min: 1000, max: 50000 }),
        dealDate: faker.date.recent(),
      
      });
    }

   
    await usersCollection.insertMany(users);
    await dealershipsCollection.insertMany(dealerships);
    await carsCollection.insertMany(cars);
    await dealsCollection.insertMany(deals);

    console.log('Dummy data inserted successfully');
  } catch (err) {
    console.error('Error inserting dummy data:', err);
  }
}


async function main() {
  const db = await connectToDatabase();
  await generateDummyData(db);
  db.client.close(); 
}

main().catch(console.error);
