const faker = require('faker');

function generateVIN() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let vin = '';
  for (let i = 0; i < 17; i++) {
    vin += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return vin;
}


function generatePhoneNumber() {
  return faker.phone.phoneNumberFormat();
}


function generateAddress() {
  return faker.address.streetAddress();
}


module.exports = {
  generateVIN,
  generatePhoneNumber,
  generateAddress
};
