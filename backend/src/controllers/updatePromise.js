const promisesModel = require('../models/promisesModel');

const updatePromise = async (req, res)=>{
    const {id} = req.params;

    try{
        await promisesModel.updatePromise(id, req.body);
        return res.status(204).json();
    }catch(error){
        return res.status(500).json({message: 'Internal server error'});
    }
};

module.exports = updatePromise;