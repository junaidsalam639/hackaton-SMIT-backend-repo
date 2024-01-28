const express = require('express');
const app = express();
const mongoose  = require('mongoose');
const cors = require('cors');
const Signup = require('./Routes/Signup');


app.use(express.json());
app.use(cors());
app.use('/signup' , Signup);

mongoose.connect('mongodb+srv://Blog:blog@cluster0.4t24tdb.mongodb.net/').then(()=>{
    console.log('mongodb connect');
}).catch((err)=> {
    console.log(err);
})


app.get('/' , (req , res) => {
    res.send('Hello World');
})


app.listen(process.env.PORT || 3000 , () => {
    console.log('App is running on port 3000');
});

















