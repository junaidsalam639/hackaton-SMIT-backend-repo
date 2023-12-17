const express = require('express');
const route = express.Router();
const userSignup = require('../Schema/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const sendResponse = require('../helpers/sendReponse');

route.get('/' , async (req, res) => {
    try {
        const user = await userSignup.find();
        sendResponse(res, 200, user, 'User_Get_All', false);
    } catch (err) {
        sendResponse(res, 400, null, 'User_Not_Found', true);
    }
});

route.post('/', async (req, res) => {
    try {
        const salt = await bcrypt.genSaltSync(10);
        const hash = await bcrypt.hashSync(req.body.password, salt);
        req.body.password = hash
        console.log('hash password-----> ', hash);
        const user = await userSignup.create({ ...req.body });
        sendResponse(res, 200, user, 'User_Signup successfully', false);
    } catch (err) {
        sendResponse(res, 400, null, 'User_Not_Found', true);
    }
});


route.post('/login' , async (req , res) => {
    try {
        const { email, password } = req.body;
        const user = await userSignup.findOne({ email: email });
        if (user) {
            const isPasswordValid = await bcrypt.compare(password, user.password);
            console.log(isPasswordValid);
            if (isPasswordValid) {
                const token = await jwt.sign({
                    data: user
                }, 'JFKJEKLJREKLNHRKLEJTHRJKLTHEJL')
                sendResponse(res, 200, { user , token }, 'User_Login', false);
            } 
            else {
                sendResponse(res, 400, null, 'Password Does Not Exist', true);
            }
        } 
        else {
            sendResponse(res, 400, null, 'Email Does Not Exist', true);
        }
    } catch (err) {
        sendResponse(res, 400, null, 'User_Not_Found', true);
    }
}) 



route.get('/:id', async (req, res) => {
    try {
        const user = await userSignup.findById(req.params.id);
        sendResponse(res, 200, user, 'User_Get_One', false);
    } catch (err) {
        sendResponse(res, 400, null, 'User_Not_Found', true);
    }
})

route.put('/:id', async (req, res) => {
    try {
        const salt = await bcrypt.genSaltSync(10);
        const hash = await bcrypt.hashSync(req.body.password, salt);
        req.body.password = hash
        const user = await userSignup.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true });
        sendResponse(res, 200, user, 'User_Updated', false);
    } catch (err) {
        sendResponse(res, 400, null, 'User_Not_Found', true);
    }
})


route.delete('/:id', async (req, res) => {
    try {
        const user = await userSignup.findByIdAndDelete(req.params.id)
        sendResponse(res, 200, user, 'User_Delete', false);
    } catch (err) {
        sendResponse(res, 400, null, 'User_Not_Found', true);
    }
})







module.exports = route











