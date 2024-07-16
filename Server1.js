
//to make own server using express.js
const express = require('express')
 const app = express();
// app.use(express.json());

const db = require('./db');

require('dotenv').config();

const PORT = process.env.PORT || 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());   // req.body


const MenuItem = require('./models/MenuItem');


app.get('/',  (req, res)=>{
  res.send("Welcme to our Hotel")
})



// Import the router file
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');

// Use the routers
app.use('/person', personRoutes);
app.use('/menu', menuItemRoutes);
 

// to give a port number in our localhost
app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
}
)