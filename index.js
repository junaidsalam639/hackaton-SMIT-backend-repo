const express = require('express');
const app = express();
const mongoose  = require('mongoose');
const cors = require('cors');

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://junaidsalam639:hackaton@cluster0.t6urvdj.mongodb.net/').then(()=>{
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

















