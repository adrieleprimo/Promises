/* eslint-disable no-unused-vars */
const knex = require('../../models/connection');

const updatePromise = async (req, res)=>{
    const {id} = req.params;
    const {title, status} = req.body;

    try{
        const findingPromise = await knex('promises').where({id}).first();
        if(!findingPromise){
            return res.status(404).json({message: 'id not found'});
        }
        const promise = await knex('promises').update({
            title,
            status
        }).where({id});
        return res.status(204).json();
    }catch(error){
        return res.status(500).json({message: 'Internal server error'});
    }
};

module.exports = updatePromise;