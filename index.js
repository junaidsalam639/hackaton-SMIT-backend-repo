const express = require('express');
const app = express();
const mongoose  = require('mongoose');
const route  = require('./Model/user');
const sendResponse = require('./helpers/sendReponse');
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use('/addStudent' , route);

mongoose.connect('mongodb+srv://junaidsalam639:hackaton@cluster0.t6urvdj.mongodb.net/').then(()=>{
    console.log('mongodb connect');
}).catch((err)=> {
    console.log(err);
})



app.get('/' , (req , res) => {
    sendResponse(res, 200, 'mongodb and mongoose connected', false);
})


app.listen(3000 , () => {
    console.log('App is running on port 3000');
});












