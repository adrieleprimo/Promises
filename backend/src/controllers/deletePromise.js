/* eslint-disable no-unused-vars */
const knex = require('../models/connection');

const deletePromise = async(req, res)=>{
    const {id} = req.params;

    try{
        const findingPromise = await knex('promises').where({id}).first();
        if(!findingPromise ){
            return res.status(404).json({message: 'id not found'});
        }
        const promise = await knex('promises').del().where({id});
        return res.status(204).json();
    }catch(error){
        return res.status(500).json({message: 'Internal server error'});
    }
};

module.exports = deletePromise;