const jwt = require('jsonwebtoken');

const authenticatejwt = async (req , res , next) => {
    const token = req?.headers['authorization']?.split(' ')[1];
    if(token){
        const isVerify = await jwt.verify(token , 'JFKJEKLJREKLNHRKLEJTHRJKLTHEJL');
        if(isVerify){
            res.send({
                status : 200,
                message : 'User_Authenticated',
                isVerify : isVerify
            })
            next()
        }else{
            res.send({
                status : 404,
                message : 'User_Not_Authenticated',
            })
        }
    }else{
        res.send({
            status : 404,
            message : 'User_Not_Authenticated',
        })
    }
}

module.exports = authenticatejwt

