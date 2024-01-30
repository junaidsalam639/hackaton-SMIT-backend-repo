const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const blogSchema = new Schema({
    user : {
        type : Schema.ObjectId,
        ref : 'signups',
        required : true
    },
    title : {
        type : String,
        required : true,
    },
    desc : {
        type : String,
        required : true,
    },
}, {timestamps : true})

const blog = mongoose.model('blogs' , blogSchema);
module.exports = blog




