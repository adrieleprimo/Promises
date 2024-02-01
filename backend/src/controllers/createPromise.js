const promisesModel = require('../models/promisesModel');

const createPromise = async(req, res)=>{
    try{
        const createPromise = await promisesModel.createPromise(req.body);
        return res.status(201).json(createPromise);
    }catch(error){
        return res.status(500).json({message: 'Internal server error'});
    }
};

module.exports = createPromise;