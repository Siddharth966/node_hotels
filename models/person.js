const mongoose = require ('mongoose'); 
 
// Define the Person schema
const personSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  age:{
    type:Number,
    
  },
  work:{
    type:String,
    enum: ['chef','waiter','manager'],
    require: true   
  },
  mobile:{
    type:String,
    required: true, 
  },
  email:{
    type:String,
    required: true,
    unique: true
  },
  address:{
    type:String
  },
  salary:{
    type:Number,
    required:true
  }

});

// create a person model
const Person = mongoose.model('person',personSchema);
module.exports = Person;