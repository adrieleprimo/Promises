/* eslint-disable no-unused-vars */
const knex = require('../../models/connection');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const passJwt = process.env.JWT_HASH;

const login  = async(req, res)=>{
    const {email, password} = req.body;

    try{
        const user = await knex('users').where('email', email).first();
        if(!user){
            return res.status(400).json({message: 'Incorrect data'});
        }
        const validPassword = await bcrypt.compare(password, user.password);
        if(!validPassword){
            return res.status(400).json({message: 'Incorrect data'});
        }
        const token = jwt.sign({id: user.id}, passJwt, {expiresIn: '1d'});
        const {senha: _, ...loggedInUser} =  user;
        return res.status(200).json({
            token
        });
    }catch(error){
        return res.status(500).json({message: 'Internal server error' });
    }
};

module.exports = login;