const knex = require('../models/connection');

const createPromise = async(req, res)=>{
    // eslint-disable-next-line no-unused-vars
    const {title, status, created_at} = req.body;
    
    try{
        const existingPromise = await knex('promises').where({title}).first();
        if(existingPromise){
            return res.status(400).json({ message: 'A promise with this title already exists' });
        }
        const dateUTC = new Date(Date.now()).toUTCString();
        const promise = await knex('promises').insert({
            title,
            status:'in progress',
            created_at:dateUTC
        });
        return res.status(201).json({insertId: promise[0]});
    }catch(error){
        return res.status(500).json({message: 'Internal server error'});
    }
};

module.exports = createPromise;