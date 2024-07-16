const express = require('express');
const router = express.Router();
const Person = require('../models/person');

 
// POST method to add person
router.post('/', async (req, res)=>{
  try {
  const data = req.body // Assumong the request body contains the person data

  // Create a new Person document using the Mongoose model
  const newPerson = new Person(data);
  
// Save the new Person to the database
 const response = await newPerson.save();
 console.log('data saved');
 res.status(200).json(response);
  }
 catch(err){
  console.log(err);
  res.status(500).json({error:'Internal server error'});
}
})


// GET method to get the person detail after post method apply

router.get('/', async (req, res)=>{
  try{
    const data = await Person.find();
    console.log("data fetched");
    res.status(200).json(data);
  } catch{
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'});
  }
})


// Person ka sub type create kiya(parametrized work type) 
router.get('/:workType', async(req, res)=>{
  try{
    const workType = req.params.workType; // Extract the work type from the URL parameter
    if(workType == 'chef' || workType == 'manager' || workType == 'waiter'){
      const response = await Person .find ({work: workType});
      console.log('response fetched');
      res.status(200).json(response);
    }else{
      res.status(400).json({error: 'Invalid work type'});
    }
    }catch(err){
      console.log(err);
      res.status(500).json({error: 'Internal server error'});
    }
})

// For update the person data using Put()
router.put('/:id', async (req, res)=>{
try{
  const personId = req.params.id; //Extract the id from the URL parameter
  const updatedPersonData = req.body; //Upadated data for the person

  const response = await Person.findByIdAndUpdate(personId, updatedPersonData,{
    new:true,// Return the updated document
    runValidaters:true,//Updated data for the person
  })

  if(!response){
    return res.status(400).json({ error:'Person not found'});
  }
  
  console.log("data upadated");
  res.status(200).json(response);
}catch(err){
  console.log(err);
  res.status(500).json({error: 'Internal server error'});
}
})



// For delete the person data 
router.delete('/:id', async (req, res)=>{
  try{
    const personId = req.params.id; //Extract the id from the URL parameter
     
    // Asssuming you have a person model
    const response = await Person.findByIdAndDelete(personId);

    if(!response){
      return res.status(400).json({ error:'Person not found'});
    }
    console.log("data deleted");
    res.status(200).json({message: 'Person deleted sucessfully'});
  }catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal server error'});
  }
})

// it is new comment
module.exports = router;