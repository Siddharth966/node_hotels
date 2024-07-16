const mongoose = require('mongoose');
 
require('dotenv').config();

// Define the Mongodb connection URL
//const mongoURL = process.env.MONGODB_URL_LOCAL
const mongoURL = process.env.MONGODB_URL; //this is our local url &  hotels ie oiur databse name


// const mongoURL = 'mongodb+srv://siddharthNode:sid9621@cluster0.wmqshoz.mongodb.net/'


//const mongoURL = process.env.MONGODB_URL_LOCAL;


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