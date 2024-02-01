const promisesModel = require('../models/promisesModel');

const getAllPromises = async(req, res)=>{
    const [promises] = await promisesModel.getAllPromises();
    return res.status(200).json(promises);
};

const createPromise = async(req, res)=>{
    const createPromise  = await promisesModel.createPromise(req.body);
    return res.status(201).json(createPromise);
};

const deletePromise = async(req, res)=>{
    const {id} = req.params;

    try{
    await promisesModel.deletePromise(id);
    return res.status(204).json();
    }catch(error){
        return res.status(500).json({message: 'Internal server error'});
    }
};

const updatePromise = async (req, res)=>{
    const {id} = req.params;
   

    try{
    await  promisesModel.updatePromise(id, req.body);
    return res.status(204).json();
    }catch(error){
        return res.status(500).json({message: 'Internal server error'});
    }
  };

module.exports = {
    getAllPromises,
    createPromise,
    deletePromise,
    updatePromise
};