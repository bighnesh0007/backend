const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose'); 
const cookieParser = require('cookie-parser');



// Database connection 
mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Database connected...");
  })
  .catch((err) => {
    console.error(err);
  });
  
  
  const app = express();
  
  // middleware
  app.use(express.json());
  app.use(cookieParser());
  app.use(express.urlencoded({extended:false}));

app.use('/', require('./routes/authRoute'));

const port = 8000;
app.listen(port, () => {
  console.log(`Server is up and running...\nhttp://localhost:${port}/`);
});
