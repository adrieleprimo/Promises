const promisesModel = require('../models/promisesModel');

const getAllPromises = async(req, res)=>{
    try{
        const [promises] = await promisesModel.getAllPromises();
        return res.status(200).json(promises);
    }catch(error){
        return res.status(500).json({message: 'Internal server error'});
    }
};

module.exports = getAllPromises;