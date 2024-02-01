const promisesModel = require('../models/promisesModel');

const deletePromise = async(req, res)=>{
    const {id} = req.params;

    try{
        await promisesModel.deletePromise(id);
        return res.status(204).json();
    }catch(error){
        return res.status(500).json({message: 'Internal server error'});
    }
};

module.exports = deletePromise;