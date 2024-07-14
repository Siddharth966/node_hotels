const express = require('express');
const router = express.Router();
const MenuItem = require('../models/MenuItem');


// POST method to add menuItem
router.post('/', async (req, res)=>{
  try {
  const data = req.body // Assumong the request body contains the menu data

  // Create a new Person document using the Mongoose model
  const newMenu = new MenuItem(data);
  
// Save the newMenu to the database
 const response = await newMenu.save();
 console.log('data saved');
 res.status(200).json(response);
  }
 catch(err){
  console.log(err);
  res.status(500).json({error:'Internal server error'});
}
})

// GET method to get the manu detail after post method apply

router.get('/', async (req, res)=>{
  try{
    const data = await MenuItem.find();
    console.log("data fetched");
    res.status(200).json(data);
  } catch{
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'});
  }
})


module.exports = router;