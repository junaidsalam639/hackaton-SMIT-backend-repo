const express = require('express');
const blog = require('../Schema/Blogs');
const route = express.Router();


route.get('/' , async (req , res) => {
    try{
        const blogs = await blog.find().populate('user').exec();
        res.send({
            status : 200,
            blogs : blogs
        })
    }catch(err){
        console.log(err);
    }
})

route.post('/' , async (req , res) => {
    try{
        const blogs = await blog.create({...req.body});
        res.send({
            status : 200,
            blogs : blogs
        })
    }catch(err){
        console.log(err);
    }
})

route.delete('/:id' , async (req , res) => {
    try{
        const blogs = await blog.findByIdAndDelete(req.params.id);
        res.send({
            status : 200,
            message : 'delete successfully',
        })
    }catch(err){
        console.log(err);
    }
})

route.put('/:id' , async (req , res) => {
    try{
        const blogs = await blog.findByIdAndUpdate(req.params.id , {...req.body} , {new : true});
        res.send({
            status : 200,
            message : 'update successfully',
            blogs : blogs
        })
    }catch(err){
        console.log(err);
    }
})


module.exports = route

