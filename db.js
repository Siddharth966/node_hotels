const mongoose = require('mongoose');

// Define the Mongodb connection URL
const mongoURL = "mongodb://localhost:27017/hotels" // hotels ie oiur databse name

// Set up mongoDB connection
mongoose.connect(mongoURL, {
  useNewUrlParser:true,
  useUnifiedTopology: true
})

// Get the default connection
// Mongose maintains a default connection object represting the Mongodb connection.
const db = mongoose.connection;

// Define event listener for database connection
db.on('connected', () =>{
  console.log('Connected to mangodb server');
})

db.on('error', () =>{
  console.log('mangodb connection error:');
})

db.on('disconnected', () =>{
  console.log('mangodb disconnected: ');
})

// Export the database connection
module.exports = db;