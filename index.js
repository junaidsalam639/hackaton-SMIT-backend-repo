const express = require('express');
const app = express();
const mongoose  = require('mongoose');
const cors = require('cors');
const Signup = require('./Routes/Signup');
const Blogs = require('./Routes/Blogs');

app.use(express.json());
app.use(cors());
app.use('/signup' , Signup);
app.use('/blogs' , Blogs);

mongoose.connect('mongodb+srv://junaid:junaid@cluster0.isz5lnm.mongodb.net/').then(()=>{
    console.log('mongodb connect');
}).catch((err)=> {
    console.log(err);
});

app.get('/' , (req , res) => {
    res.send('Hello World');
})


app.listen(process.env.PORT || 3000 , () => {
    console.log('App is running on port 3000');
});




