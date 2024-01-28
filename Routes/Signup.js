const express = require('express');
const route = express.Router();
const Signup = require('../Schema/Signup');

route.get('/', async (req, res) => {
    const signup = await Signup.find();
    try{
        res.send({
            status : 200,
            signup : signup
        });
    }catch(err){
        console.log(err);
    }
})

route.get('/:id', async (req, res) => {
    const signup = await Signup.findById(req.params.id);
    try{
        res.send({
            status : 200,
            signup : signup
        });
    }catch(err){
        console.log(err);
    }
})

route.post('/', async (req, res) => {
    try{
        const signup = await Signup.create({...req.body}); 
        res.send({
            status : 200,
            signup : signup
        });
    }catch(err){
        console.log(err);
    }
})


route.put('/:id', async (req, res) => {
    try{
        const signup = await Signup.findByIdAndUpdate(req.params.id,{...req.body} ,{ new : true}); 
        res.send({
            status : 200,
            message : 'updated successfully',
            signup : signup
        });
    }catch(err){
        console.log(err);
    }
})


route.delete('/:id', async (req, res) => {
    try{
        const signup = await Signup.findByIdAndDelete(req.params.id); 
        res.send({
            status : 200,
            message : 'deleted successfully'
        });
    }catch(err){
        console.log(err);
    }
})




module.exports = route





