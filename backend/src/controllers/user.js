/* eslint-disable no-unused-vars */
const knex = require('../models/connection');
const bcrypt = require('bcrypt');

const userRegistry = async(req, res)=>{
    const {firstname, lastname, email, password} = req.body;

    try{
        const userFound = await knex('users').where('email', email).first();
        if(userFound){
            return res.status(400).json({message: 'Email exists'});
        }
        const encryptedPassword = await bcrypt.hash(password, 15);
        const [userId] = await knex('users').insert({
            firstname,
            lastname,
            email,
            password: encryptedPassword
        });
        const newUser = await knex('users').where('id', userId).first();
        delete newUser.password;
        return res.status(200).json({user: newUser});
    }catch(error){
        return res.status(500).json({message: 'Internal Error Server'});
    }
};

module.exports = userRegistry;