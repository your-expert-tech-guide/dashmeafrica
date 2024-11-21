const axios = require('axios');
const express = require('express');
const products = require('./data/Products.js');

// start express.js app
const app = express(); 

// HTTP(s) and CORS enabled
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// Using async/await with 'axios' for HTTPS/CORS instead of deprecated 'request'
async function getUser() {
  try {
    const response = await axios.get('http://localhost:3000/api/products');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

const dotenv = require('dotenv');

dotenv.config();
const PORT = process.env.PORT;

const cors = require('cors');
const mongoose = require('mongoose');

//connect db
mongoose
  .connect(process.env.MONGOOSEDB_URL)
  .then(() => console.log('db connected'))
  .then((err) => {
    err;
  });

const databaseSeeder = require('./databaseSeeder');
const userRoute = require('./routes/User');
const productRoute = require("./routes/Product");
const orderRoute = require('./routes/Order.js');

//database seeder routes
app.use('/api/seed',databaseSeeder );

//routes for users
app.use('/api/users',userRoute );

//routes for products
app.use("/api/products", productRoute);

//routes for orders
app.use("/api/orders", orderRoute);

app.use(express.json())

app.use(cors());

app.listen(PORT || 9000, () => {
  console.log(`server listening on port ${PORT}`);
});

/*
//api product test route
app.get('/api/products', (req, res) => {
  res.json(products);
}); 
*/

/*
app.get('/api/products/id', (req, res) => {
  const product = products.find((product)=>product.id === req.params.id)
  res.json(product);
}); //
*/

// qP7CooQ07GYlhatL
// dashmeafrica
// cluster0
// Click on "View" and open "Command Palette."
// Search "MongoDB: Connect" on the Command Palette and click on "Connect with Connection String."
// Connection String - mongodb+srv://dashmeafrica:qP7CooQ07GYlhatL@cluster0.iwcum.mongodb.net/dashme-africa-web-app