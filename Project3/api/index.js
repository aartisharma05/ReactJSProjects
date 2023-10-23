const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');
const app = express();


app.use(cors());

app.use(express.json());

const MONGODB_URL = 'mongodb+srv://blog:O7kZw0YiNucNGQSO@cluster0.zcswhyw.mongodb.net/?retryWrites=true&w=majority';
  //   "mongodb+srv://blogadmin:admin@cluster0.pceeyou.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(MONGODB_URL)

app.post('/register',async (req,res)=>{
   const {username, password} = req.body;
   const userDoc = await User.create({username, password})
   res.json(userDoc);
})



// O7kZw0YiNucNGQSO;
// mongodb+srv://blog:O7kZw0YiNucNGQSO@cluster0.zcswhyw.mongodb.net/?retryWrites=true&w=majority

app.listen('4000');

