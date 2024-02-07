/* eslint-disable no-unused-vars */
const knex = require('../models/connection');
const jwt = require('jsonwebtoken');
const passwordJwt = process.env.JWT_HASH;

const verifyLoggedInUser = async(req, res, next)=>{
    const {authorization} = req.headers;

    if(!authorization){
        return res.status(401).json({message:'To access this feature, a valid authentication token must be sent.'});
    }
    const token = authorization.split(' ')[1];

    try{
        const {id} = jwt.verify(token, passwordJwt);
        const userExists = await knex('users').where({id}).first();
        if(!userExists){
           return res.status(404).json({message: 'User not found'}); 
        }
        const {password, ...user} = userExists;
        req.user = userExists;
        next();
    }catch(error){
        console.log(error);
        return res.status(500).json({message: 'Internal Error Server'});
    }
};

module.exports = verifyLoggedInUser;