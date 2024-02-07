
const knex = require('../../models/connection');

const getAllPromises = async(req, res)=>{
    try{
        const promises = await knex('promises');
        if(promises.length <1){
            return res.status(200).json({message: 'Sorry, no promises yet'});
        }
        return res.status(200).json(promises);
    }catch(error){
        return res.status(500).json({message: 'Internal server error'});
    }
};

module.exports = getAllPromises;